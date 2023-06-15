import { useState } from "react";
import type { MouseEvent, ChangeEvent } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import type {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import BoardCommentListUI from "./BoardCommentList.presenter";

export default function BoardCommentList(): JSX.Element {
  const router = useRouter();
  if (typeof router.query.boardId !== "string") return <></>;

  // ! useState area
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [password, setPassword] = useState("");
  const [boardCommentId, setBoardCommentId] = useState("");
  // ! API area
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);
  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  // ! function area

  // ? 비밀번호 변경 onChange 함수
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };
  // 댓글 삭제 함수
  const onClickDelete = async (
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setIsOpenDeleteModal(false);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const onClickOpenDeleteModal = (
    event: MouseEvent<HTMLImageElement>
  ): void => {
    setBoardCommentId(event.currentTarget.id);
    setIsOpenDeleteModal((prev) => !prev);
  };

  // ? 비밀번호 모달청 toggle function
  const toggleDeleteModal = (): void => {
    setIsOpenDeleteModal((prev) => !prev);
  };
  return (
    <BoardCommentListUI
      data={data}
      onClickDelete={onClickDelete}
      isOpenDeleteModal={isOpenDeleteModal}
      onClickOpenDeleteModal={onClickOpenDeleteModal}
      onChangePassword={onChangePassword}
      toggleDeleteModal={toggleDeleteModal}
    />
  );
}
