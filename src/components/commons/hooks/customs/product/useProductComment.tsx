// import type { ChangeEvent, RefObject } from "react";
// import { FETCH_BOARD_COMMENTS } from "../../../../units/boardComment/list/BoardCommentList.queries";
import { FETCH_USEDITEM_QUESTIONS } from "../../queries/useQueryFetchUseditemQuestions";
// import { useMutationUpdateBoardComment } from "../../mutations/useMutationUpdateBoardComment";
// import { useMutationDeleteBoardComment } from "../../mutations/useMutationDeleteBoardComment";
import { Modal } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import { yupSchema } from "../../../comments/product/wirte/CommentsBoardWrite.validation";
// import type { IBoardComment } from "../../../../../commons/types/generated/types";
import { useForm } from "react-hook-form";
// import type { UseFormWatch, UseFormRegister, UseFormHandleSubmit } from "react-hook-form";
import { useMutationCreateUseditemQuestion } from "../../mutations/useMutationCreateUseditemQuestion";
import { deleteUseditemQuestion } from "../../mutations/useMutationDeleteUseditemQuestion";
import { useModal } from "../useModal";
import { useCallback } from "react";
// interface IUpdateBoardCommentInput {
//   contents?: string;
//   rating?: number;
// }

// interface IUseBoardCommentArgs {
//   productId: string;
//   boardCommentId?: string;
//   onToggleEdit?: () => void;
//   el?: IBoardComment | undefined;
// }

// interface IUseBoardCommentReturn {
//   onClickWrite: (data: any) => Promise<void>;
//   onClickUpdate: (data: any) => Promise<void>;
//   onClickDelete: () => Promise<void>;
//   onChangeStar: (value: number) => void;
//   register: UseFormRegister<{
//     writer: string;
//     contents: string;
//     star: number | undefined;
//     password: string;
//   }>;
//   handleSubmit: UseFormHandleSubmit<
//     {
//       writer: string;
//       contents: string;
//       star: number | undefined;
//       password: string;
//     },
//     undefined
//   >;
//   watch: UseFormWatch<{
//     writer: string;
//     contents: string;
//     star: number | undefined;
//     password: string;
//   }>;
//   starRef: RefObject<HTMLInputElement>;
// }

interface IPrev {
  __ref: string;
}

export const useProductComment = (args: any): any => {
  const [createProductComment] = useMutationCreateUseditemQuestion();
  const [deleteProductComment] = deleteUseditemQuestion();
  const { confirmModal } = useModal();
  // const [updateBoardComment] = useMutationUpdateBoardComment();
  // const [deleteBoardComment] = useMutationDeleteBoardComment();

  const { register, handleSubmit, watch, reset } = useForm({
    resolver: yupResolver(yupSchema),
    mode: "onChange",
    defaultValues: {
      contents: args.el?.contents ?? "",
    },
  });

  const onClickDelete = useCallback(
    (useditemQuestionId: string) => () => {
      confirmModal(
        async (): Promise<void> => {
          try {
            await deleteProductComment({
              variables: {
                useditemQuestionId,
              },
              update(cache, { data }) {
                cache.modify({
                  fields: {
                    fetchUseditemQuestions: (prev, { readField }) => {
                      const deletedId = data?.deleteUseditemQuestion;
                      const filteredPrev = prev.filter(
                        (el: IPrev) => readField("_id", el) !== deletedId
                      );
                      return filteredPrev;
                    },
                  },
                });
              },
            });
          } catch (error) {
            if (error instanceof Error) Modal.error({ content: error.message });
          }
        },
        "댓글삭제",
        "댓글을 삭제하시겠습니까?",
        true
      );
    },
    []
  );

  // const onClickUpdate = async (data: any) => {
  //   if (!data.contents) {
  //     alert("내용이 수정되지 않았습니다.");
  //     return;
  //   }
  //   if (!data.password) {
  //     alert("비밀번호가 입력되지 않았습니다.");
  //     return;
  //   }

  //   try {
  //     const updateBoardCommentInput: IUpdateBoardCommentInput = {};
  //     if (data.contents) updateBoardCommentInput.contents = data.contents;
  //     if (data.star) updateBoardCommentInput.rating = data.star;
  //     if (!args.boardCommentId) return;

  //     await updateBoardComment({
  //       variables: {
  //         updateBoardCommentInput,
  //         password: data.password,
  //         boardCommentId: args.boardCommentId,
  //       },
  //       refetchQueries: [
  //         {
  //           query: FETCH_USEDITEM_QUESTIONS,
  //           variables: { boardId: args.productId },
  //         },
  //       ],
  //     });
  //     if (args.onToggleEdit) args.onToggleEdit();
  //   } catch (error) {
  //     if (error instanceof Error) alert(error.message);
  //   }
  // };

  const onClickWrite = async (data: any) => {
    console.log("asdasdads");

    try {
      const aa = await createProductComment({
        variables: {
          createUseditemQuestionInput: {
            contents: data.contents,
          },
          useditemId: args.productId,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: {
              useditemId: args.productId,
            },
          },
        ],
      });
      console.log(aa);
      reset();
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return {
    onClickDelete,
    onClickWrite,
    register,
    handleSubmit,
    watch,
  };
};
