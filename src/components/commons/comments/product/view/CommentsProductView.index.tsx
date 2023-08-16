import * as S from "./CommentsProductView.styles";
import { useToggle } from "../../../hooks/customs/useToggle";
import type { ICommentsProductViewProps } from "./CommentsProductView.types";
import CommentsProductWrite from "../wirte/CommentsProductWrite.index";
import { getDate } from "../../../../../commons/libraries/utils";
import { useRecoilState } from "recoil";
import { userIDState } from "../../../../../commons/stores";
import { useProductComment } from "../../../hooks/customs/product/useProductComment";
import { memo } from "react";
import AnswerProductWrite from "../answer/AnswerProductWrite.index";
import { useQueryFetchUseditemQuestionAnswers } from "../../../hooks/queries/useQueryFetchUseditemQuestionAnswers";
import AnswersProductItem from "../answerview/AnswersProductView.index";
function CommentsProductView(props: ICommentsProductViewProps) {
  const [isEdit, onToggleEdit] = useToggle();
  const [isAnswer, onToggleAnswer] = useToggle();
  const [userId] = useRecoilState(userIDState);
  const { onClickDelete } = useProductComment(props.el);
  const { data: answersData } = useQueryFetchUseditemQuestionAnswers(props.el._id);
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
                <S.AnswerIcon src="/images/answer.svg/" onClick={onToggleAnswer} />
              </S.OptionWrapper>
            ) : (
              <S.AnswerIcon src="/images/answer.svg/" onClick={onToggleAnswer} />
            )}
          </S.FlexWrapper>
          <S.bottomWrapper>
            <S.DateString>{getDate(props.el?.createdAt)}</S.DateString>
            {answersData?.fetchUseditemQuestionAnswers.map((el) => (
              <AnswersProductItem key={el._id} answersData={el} useditemQuestionId={props.el._id} />
            ))}
            {isAnswer && (
              <AnswerProductWrite
                useditemQuestionId={props.el._id}
                isEdit={false}
                onToggleAnswer={onToggleAnswer}
              />
            )}
          </S.bottomWrapper>
        </S.ItemWrapper>
      )}
      {isEdit && <CommentsProductWrite isEdit={true} onToggleEdit={onToggleEdit} el={props.el} />}
    </>
  );
}
export default memo(CommentsProductView);
