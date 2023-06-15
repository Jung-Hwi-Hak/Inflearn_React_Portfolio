import type { IBoardCommentListUIProps } from "./BoardCommentList.types";
import * as S from "./BoardCommentList.styles";
import { getDate } from "../../../../commons/libraries/utils";
export default function BoardCommentListUI(
  props: IBoardCommentListUIProps
): JSX.Element {
  return (
    <>
      {props.isOpenDeleteModal && (
        <S.PasswordModal
          open={true}
          onOk={props.onClickDelete}
          onCancel={props.toggleDeleteModal}
        >
          비밀번호 입력
          <S.PasswordModalInput
            type="password"
            onChange={props.onChangePassword}
          />
        </S.PasswordModal>
      )}
      <div>
        {props.data?.fetchBoardComments.map((el) => (
          <S.ItemWrapper key={el._id}>
            <S.FlexWrapper>
              <S.Avatar src="/images/avatar.png" />
              <S.MainWrapper>
                <S.WriterWrapper>
                  <S.Writer>{el?.writer}</S.Writer>
                  <S.Star disabled value={el.rating} />
                </S.WriterWrapper>
                <S.Contents>{el?.contents}</S.Contents>
              </S.MainWrapper>
              <S.OptionWrapper>
                <S.UpdateIcon src="/images/boardComment/list/option_update_icon.png/" />
                <S.DeleteIcon
                  id={el?._id}
                  onClick={props.onClickOpenDeleteModal}
                  src="/images/boardComment/list/option_delete_icon.png/"
                />
              </S.OptionWrapper>
            </S.FlexWrapper>
            <S.DateString>{getDate(el?.createdAt)}</S.DateString>
          </S.ItemWrapper>
        ))}
      </div>
    </>
  );
}
