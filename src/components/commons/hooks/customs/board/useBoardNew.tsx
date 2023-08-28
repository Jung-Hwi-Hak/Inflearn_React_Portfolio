import { useMutationCreateBoard } from "../../mutations/useMutationCreateBoard";
import { useMutationUploadFile } from "../../mutations/useMutationUploadFile";

import { useCallback } from "react";
import { useModal } from "../useModal";
interface IUseBoardEditArgs {
  files: File[];
}

export const useBoardNew = (args: IUseBoardEditArgs) => {
  const [mutationCreateBoard] = useMutationCreateBoard();
  const [uploadFileMutation] = useMutationUploadFile();
  const { successModal, warningModal } = useModal();

  const onClickCreateSubmit = useCallback(
    async (data: any): Promise<void> => {
      try {
        const filteredArray = args.files.filter((item) => item !== undefined && item !== null);
        const results = await Promise.all(
          filteredArray.map(async (el) => await uploadFileMutation({ variables: { file: el } }))
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
        successModal(
          "게시글 등록",
          "게시글 등록 완료",
          true,
          `/boards/${String(result.data?.createBoard._id)}`
        );
      } catch (error) {
        if (error instanceof Error)
          warningModal("게시글 등록", "게시글 등록 실패", true, undefined);
      }
    },
    [args.files]
  );

  return {
    onClickCreateSubmit,
  };
};
