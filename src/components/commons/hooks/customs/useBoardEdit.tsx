import { useCallback, useEffect, useMemo } from "react";
import { useMutationUpdateBoard } from "../mutations/useMutationUpdateBoard";
import { useMutationUploadFile } from "../mutations/useMutationUploadFile";
import { useQueryFetchBoard } from "../queries/useQueryFetchBoard";
import { useQueryIdChecker } from "./useQueryIdChecker";
import { useRouter } from "next/router";
import { Modal } from "antd";
import type { IBoardWriteYupSchema } from "../../../units/board/write/BoardWrite.validation";
import type { UseFormWatch, UseFormSetValue } from "react-hook-form";
interface IUseBoardEditArgs {
  setValue: UseFormSetValue<IBoardWriteYupSchema>;
  files: File[];
  watch: UseFormWatch<IBoardWriteYupSchema>;
}

export const useBoardEdit = (args: IUseBoardEditArgs) => {
  const router = useRouter();
  const { id: boardId } = useQueryIdChecker("boardId");
  const [mutationUpdateBoard] = useMutationUpdateBoard();
  const [uploadFileMutation] = useMutationUploadFile();

  const { data } = useQueryFetchBoard();
  const memoizedWriter = useMemo(() => data?.fetchBoard.writer ?? "", [data]);
  const memoizedTitle = useMemo(() => data?.fetchBoard.title ?? "", [data]);
  const memoizedContents = useMemo(() => data?.fetchBoard.contents ?? "", [data]);

  useEffect(() => {
    args.setValue("writer", memoizedWriter);
    args.setValue("title", memoizedTitle);
    args.setValue("contents", memoizedContents);
  }, [memoizedWriter, memoizedTitle, memoizedContents, args.setValue]);

  const onClickUpdateSubmit = useCallback(
    async (data: any) => {
      try {
        const results = await Promise.all(
          args.files.map(async (el) => await uploadFileMutation({ variables: { file: el } }))
        );
        const resultFilesUrl = results.map((el) => el.data?.uploadFile.url ?? "");
        const result = await mutationUpdateBoard({
          variables: {
            boardId,
            password: args.watch("password"),
            updateBoardInput: {
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
        });
        Modal.success({
          content: "게시글 수정 완료",
          onOk() {
            void router.push(`/boards/${String(result.data?.updateBoard._id)}`);
          },
        });
      } catch (error) {
        if (error instanceof Error) Modal.warning({ content: error.message });
      }
    },
    [args.files]
  );

  return {
    onClickUpdateSubmit,
  };
};
