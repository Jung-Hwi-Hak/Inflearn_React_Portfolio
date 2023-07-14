import type { ChangeEvent } from "react";
import { useState } from "react";
import { useMutationCreateBoardComment } from "../mutations/useMutationCreateBoardComment";
import { FETCH_BOARD_COMMENTS } from "../queries/useQueryFetchBoardComments";
import { useMutationUpdateBoardComment } from "../mutations/useMutationUpdateBoardComment";
import { useMutationDeleteBoardComment } from "../mutations/useMutationDeleteBoardComment";
import { Modal } from "antd";

interface IUpdateBoardCommentInput {
  contents?: string;
}

interface IUseBoardComment {
  boardId: string;
  boardCommentId?: string;
  onToggleEdit?: () => void;
}

export const useBoardComment = (args: IUseBoardComment) => {
  const [myPassword, setMyPassword] = useState("");
  const [createBoardComment] = useMutationCreateBoardComment();
  const [updateBoardComment] = useMutationUpdateBoardComment();
  const [deleteBoardComment] = useMutationDeleteBoardComment();

  const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event?.target.value);
  };

  const onClickDelete = async () => {
    if (!args.boardCommentId) return;
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: args.boardCommentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: args.boardId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickUpdate = async (data: any) => {
    if (!data.contents) {
      alert("내용이 수정되지 않았습니다.");
      return;
    }
    if (!data.password) {
      alert("비밀번호가 입력되지 않았습니다.");
      return;
    }

    try {
      const updateBoardCommentInput: IUpdateBoardCommentInput = {};
      if (data.contents) updateBoardCommentInput.contents = data.contents;

      if (!args.boardCommentId) return;

      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password: data.password,
          boardCommentId: args.boardCommentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: args.boardId },
          },
        ],
      });
      if (args.onToggleEdit) args.onToggleEdit();
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickWrite = (reset: any) => async (data: any) => {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: data.writer,
            password: data.password,
            contents: data.contents,
            rating: data.star,
          },
          boardId: args.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: args.boardId },
          },
        ],
      });
      reset();
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return {
    onClickWrite,
    onClickUpdate,
    onChangeDeletePassword,
    onClickDelete,
  };
};
