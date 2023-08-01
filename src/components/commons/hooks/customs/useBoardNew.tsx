import { Modal } from "antd";
import { useMutationCreateBoard } from "../mutations/useMutationCreateBoard";
import { useMutationUploadFile } from "../mutations/useMutationUploadFile";
import { useRouter } from "next/router";

import { useCallback } from "react";
interface IUseBoardEditArgs {
  files: File[];
}

export const useBoardNew = (args: IUseBoardEditArgs) => {
  const router = useRouter();
  const [mutationCreateBoard] = useMutationCreateBoard();
  const [uploadFileMutation] = useMutationUploadFile();

  const onClickCreateSubmit = useCallback(
    async (data: any): Promise<void> => {
      try {
        const results = await Promise.all(
          args.files.map(async (el) => await uploadFileMutation({ variables: { file: el } }))
        );
        const resultFilesUrl = results.map((el) => el.data?.uploadFile.url ?? "");

        const result = await mutationCreateBoard({
          variables: {
            createBoardInput: {
              writer: data.writer,
              password: data.password,
              title: data.title,
              contents: data.contents,
              youtubeUrl: data.youtubeUrl,
              boardAddress: {
                zipcode: data.zipcode,
                address: data.address,
                addressDetail: data.addressDetail,
              },
              images: resultFilesUrl,
            },
          },
          update(cache, { data }) {
            cache.modify({
              fields: {
                fetchBoards: (prev) => {
                  return [data?.createBoard, ...prev];
                },
              },
            });
          },
        });
        Modal.success({
          content: "게시글 등록 완료",
          onOk() {
            void router.push(`/boards/${String(result.data?.createBoard._id)}`);
          },
        });
      } catch (error) {
        if (error instanceof Error) Modal.warning({ content: error.message });
      }
    },
    [args.files]
  );

  return {
    onClickCreateSubmit,
  };
};
