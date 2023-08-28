import * as S from "./AnswersProductView.styles";
import { useToggle } from "../../../hooks/customs/useToggle";
import type { IAnswerProductViewProps } from "./AnswersProductView.types";
import { getDate } from "../../../../../commons/libraries/utils";
import { memo } from "react";
import { useProductAnswer } from "../../../hooks/customs/product/useProductAnswer";
import AnswerProductWrite from "../answer/AnswerProductWrite.index";
import { useRecoilState } from "recoil";
import { userIDState } from "../../../../../commons/stores";
import { useCheckLogin } from "../../../hooks/customs/useCheckLogin";

function AnswersProductItem(props: IAnswerProductViewProps) {
  const [userId] = useRecoilState(userIDState);
  const [isEdit, onToggleEdit] = useToggle();
  const { onDeleteAnswer } = useProductAnswer({});
  const { onClickCheckLogin } = useCheckLogin();
  return (
    <>
      {!isEdit && (
        <S.ItemWrapper>
          <S.FlexWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{props.answersData.user.name}</S.Writer>
                <S.Contents>{props.answersData.contents}</S.Contents>
              </S.WriterWrapper>
            </S.MainWrapper>

            {props.answersData.user.email === userId ? (
              <S.OptionWrapper>
                <S.UpdateIcon
                  src="/images/boardComment/list/option_update_icon.png/"
                  onClick={onToggleEdit}
                />
                <S.DeleteIcon
                  src="/images/boardComment/list/option_delete_icon.png/"
                  onClick={onClickCheckLogin(onDeleteAnswer(props.answersData._id))}
                />
              </S.OptionWrapper>
            ) : (
              <></>
            )}
          </S.FlexWrapper>
          <S.bottomWrapper>
            <S.DateString>{getDate(props.answersData.createdAt)}</S.DateString>
          </S.bottomWrapper>
        </S.ItemWrapper>
      )}
      {isEdit && (
        <AnswerProductWrite
          contents={props.answersData.contents}
          useditemQuestionId={props.useditemQuestionId}
          useditemQuestionAnswerId={props.answersData._id}
          isEdit={true}
          onToggleEdit={onToggleEdit}
        />
      )}
    </>
  );
}
export default memo(AnswersProductItem);
