import { Modal } from "antd";
import * as S from "./CommentsBoardView.styles";
import { useToggle } from "../../../hooks/customs/useToggle";
import type { ICommentsBoardViewProps } from "./CommentsBoardView.types";
import { useBoardComment } from "../../../hooks/customs/board/useBoardComment";
import { useQueryIdChecker } from "../../../hooks/customs/useQueryIdChecker";
import CommentsBoardWrite from "../wirte/CommentsBoardWrite.index";
import { getDate } from "../../../../../commons/libraries/utils";

export default function CommentsBoardView(props: ICommentsBoardViewProps) {
  const { id } = useQueryIdChecker("boardId");
  const [isEdit, onToggleEdit] = useToggle();
  const [isOpen, onToggleModal] = useToggle();
  const { onClickDelete, onChangeDeletePassword } = useBoardComment({
    boardId: id,
    boardCommentId: props.el._id,
  });

  return (
    <>
      {isOpen && (
        <Modal open={true} onOk={onClickDelete} onCancel={onToggleModal}>
          <div>비밀번호 입력: </div>
          <S.PasswordInput type="password" onChange={onChangeDeletePassword} />
        </Modal>
      )}
      {!isEdit && (
        <S.ItemWrapper>
          <S.FlexWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{props.el?.writer}</S.Writer>
                <S.Star value={props.el?.rating} disabled />
              </S.WriterWrapper>
              <S.Contents>{props.el?.contents}</S.Contents>
            </S.MainWrapper>
            <S.OptionWrapper>
              <S.UpdateIcon
                src="/images/boardComment/list/option_update_icon.png/"
                onClick={onToggleEdit}
              />
              <S.DeleteIcon
                src="/images/boardComment/list/option_delete_icon.png/"
                onClick={onToggleModal}
              />
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.bottomWrapper>
            <S.DateString>{getDate(props.el?.createdAt)}</S.DateString>
          </S.bottomWrapper>
        </S.ItemWrapper>
      )}
      {isEdit && <CommentsBoardWrite isEdit={true} onToggleEdit={onToggleEdit} el={props.el} />}
    </>
  );
}
