import * as S from "./CommentsBoardView.styles";
import { useToggle } from "../../../hooks/customs/useToggle";
import type { ICommentsBoardViewProps } from "./CommentsBoardView.types";
import CommentsBoardWrite from "../wirte/CommentsBoardWrite.index";
import { getDate } from "../../../../../commons/libraries/utils";
import { useRecoilState } from "recoil";
import { userIDState } from "../../../../../commons/stores";
import { useProductComment } from "../../../hooks/customs/product/useProductComment";
import { memo } from "react";

function CommentsProductView(props: ICommentsBoardViewProps) {
  const [isEdit, onToggleEdit] = useToggle();
  const [userId] = useRecoilState(userIDState);
  const { onClickDelete } = useProductComment(props.el);

  return (
    <>
      {!isEdit && (
        <S.ItemWrapper>
          <S.FlexWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{props.el?.user.name}</S.Writer>
                <S.Contents>{props.el?.contents}</S.Contents>
              </S.WriterWrapper>
            </S.MainWrapper>
            {props.el.user.email === userId ? (
              <S.OptionWrapper>
                <S.UpdateIcon
                  src="/images/boardComment/list/option_update_icon.png/"
                  onClick={onToggleEdit}
                />
                <S.DeleteIcon
                  src="/images/boardComment/list/option_delete_icon.png/"
                  onClick={onClickDelete(props.el._id)}
                />
              </S.OptionWrapper>
            ) : (
              <></>
            )}
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
export default memo(CommentsProductView);
