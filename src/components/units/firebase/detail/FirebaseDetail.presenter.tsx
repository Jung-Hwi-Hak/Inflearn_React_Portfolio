import type { FirebaseDetailUIProps } from "./FirebaseDetail.types";
import * as S from "./FirebaseDetail.styles";
export default function FirebaseDetailUI(
  props: FirebaseDetailUIProps
): JSX.Element {
  return (
    <S.Wrapper>
      <S.WriterInfoWrapper>
        <S.WriterIcon />
        <S.WriterDetailInfoWrapper>
          <S.WriterName>{props.detailBoard?.writer}</S.WriterName>
          <S.WriterSubmitDate>
            {props.detailBoard?.timestamp}
          </S.WriterSubmitDate>
        </S.WriterDetailInfoWrapper>
      </S.WriterInfoWrapper>
      <S.Title>{props.detailBoard?.title}</S.Title>
      <S.Contents>{props.detailBoard?.contents}</S.Contents>
      <S.ButtonWrapper>
        <S.SubmitButton onClick={props.onClickEditPage} type="primary">
          수정
        </S.SubmitButton>
        <S.CancelButton
          onClick={props.onClickMoveToFirebaseList}
          type="primary"
          danger
        >
          뒤로가기
        </S.CancelButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
