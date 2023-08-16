import { Modal } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import { yupSchema } from "../../../comments/product/wirte/CommentsBoardWrite.validation";
import { useForm } from "react-hook-form";
import { useMutationCreateUseditemQuestion } from "../../mutations/useMutationCreateUseditemQuestion";
import { deleteUseditemQuestion } from "../../mutations/useMutationDeleteUseditemQuestion";
import { useModal } from "../useModal";
import { useCallback } from "react";
import { useMutationUseditemQuestion } from "../../mutations/useMutationUseditemQuestion";
interface IUpdateProductCommentInput {
  contents: string;
}
interface IPrev {
  __ref: string;
}

export const useProductComment = (args: any): any => {
  const [createProductComment] = useMutationCreateUseditemQuestion();
  const [updateProductComment] = useMutationUseditemQuestion();
  const [deleteProductComment] = deleteUseditemQuestion();
  const { confirmModal } = useModal();

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

  const onClickUpdate = useCallback(
    async (data: any) => {
      try {
        const updateUseditemQuestionInput: IUpdateProductCommentInput = {
          contents: data.contents,
        };
        if (!args.productCommentId) return;

        await updateProductComment({
          variables: {
            updateUseditemQuestionInput,
            useditemQuestionId: args.productCommentId,
          },
          update(cache, { data }) {
            cache.modify({
              fields: {
                fetchUseditemQuestions: (prev) => {
                  const updatedId = data?.updateUseditemQuestion._id;
                  return [...prev, updatedId];
                },
              },
            });
          },
        });
        if (args.onToggleEdit) args.onToggleEdit();
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    },
    [args.productCommentId, args.onToggleEdit]
  );

  const onClickWrite = useCallback(
    async (data: any) => {
      try {
        await createProductComment({
          variables: {
            createUseditemQuestionInput: {
              contents: data.contents,
            },
            useditemId: args.productId,
          },
          update(cache, { data }) {
            cache.modify({
              fields: {
                fetchUseditemQuestions: (prev) => {
                  return [data?.createUseditemQuestion, ...prev];
                },
              },
            });
          },
        });
        reset();
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    },
    [args.productId]
  );

  return {
    onClickUpdate,
    onClickDelete,
    onClickWrite,
    register,
    handleSubmit,
    watch,
  };
};
