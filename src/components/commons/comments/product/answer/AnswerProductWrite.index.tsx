import { memo } from "react";
// import { useQueryIdChecker } from "../../../hooks/customs/useQueryIdChecker";
import * as S from "./AnswerProductWrite.styles";
import type { IAnswerProductWriteProps } from "./AnswerProductWrite.types";
import { useProductAnswer } from "../../../hooks/customs/product/useProductAnswer";

function AnswerProductWrite(props: IAnswerProductWriteProps): JSX.Element {
  const { register, watch, handleSubmit, onCreateAnswer, onUpdateAnswer } = useProductAnswer({
    useditemQuestionId: props.useditemQuestionId ?? "",
    useditemQuestionAnswerId: props.useditemQuestionAnswerId ?? "",
    onToggleEdit: props.onToggleEdit ?? undefined,
    onToggleAnswer: props.onToggleAnswer ?? undefined,
  });

  return (
    <S.Wrapper>
      <S.EnterOutlinedIcon rev={undefined} />
      <S.ContentWrapper>
        <S.Contents
          maxLength={100}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          {...register("contents")}
        />
        <S.BottomWrapper>
          <S.ContentsLength>{watch("contents")?.length}/100</S.ContentsLength>
          <S.ButtonFlex>
            <S.Button
              onClick={handleSubmit(props.isEdit === true ? onUpdateAnswer : onCreateAnswer)}
            >
              {props.isEdit === true ? "수정하기" : "등록하기"}
            </S.Button>
            <S.Button onClick={props.isEdit === true ? props.onToggleEdit : props.onToggleAnswer}>
              취소
            </S.Button>
          </S.ButtonFlex>
        </S.BottomWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  );
}
export default memo(AnswerProductWrite);
