import { useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import { useState, type MouseEvent, type ChangeEvent } from "react";
import { useRouter } from "next/router";
import * as S from "./BoardCommentList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import type { IBoardCommentListUIItemProps } from "./BoardCommentList.types";
import BoardCommentWrite from "../write/BoardCommentWrite.container";

export default function BoardCommentListUIItem(
  props: IBoardCommentListUIItemProps
): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [password, setPassword] = useState("");
  const [boardCommentId, setBoardCommentId] = useState("");

  const router = useRouter();
  // 삭제
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

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
  // ? 비밀번호 변경 onChange 함수
  const onChangeDeletePassword = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(event.target.value);
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

  // ? 댓글 수정 함수
  const onClickUpdate = (): void => {
    setIsEdit((prev) => !prev);
  };

  return (
    <>
      {isOpenDeleteModal && (
        <S.PasswordModal
          open={true}
          onOk={onClickDelete}
          onCancel={toggleDeleteModal}
        >
          <div>비밀번호 입력: </div>
          <S.PasswordInput type="password" onChange={onChangeDeletePassword} />
        </S.PasswordModal>
      )}
      {!isEdit ? (
        <S.ItemWrapper key={props.el._id}>
          <S.FlexWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{props.el.writer}</S.Writer>
                <S.Star value={props.el.rating} disabled />
              </S.WriterWrapper>
              <S.Contents>{props.el.contents}</S.Contents>
            </S.MainWrapper>
            <S.OptionWrapper>
              <S.UpdateIcon
                src="/images/boardComment/list/option_update_icon.png/"
                id={props.el._id}
                onClick={onClickUpdate}
              />
              <S.DeleteIcon
                src="/images/boardComment/list/option_delete_icon.png/"
                onClick={onClickOpenDeleteModal}
                id={props.el._id}
              />
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.DateString>{getDate(props.el.createdAt)}</S.DateString>
        </S.ItemWrapper>
      ) : (
        <BoardCommentWrite
          el={props.el}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
      )}
    </>
  );
}
