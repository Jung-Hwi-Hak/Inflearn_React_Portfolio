import { memo } from "react";
import * as S from "./MyPointChargePoint.styles";
import { usePayment } from "../../../../commons/hooks/customs/usePayment";
import { useMyPointChargePoint } from "../../../../commons/hooks/customs/mypage/useMyPointChargePoint";
function MyPointChargePoint(): JSX.Element {
  const {
    register,
    handleSubmit,
    handleInputBlur,
    onChangePoint,
    isError,
    unitItems,
    onClickPointUp,
  } = useMyPointChargePoint();
  const { onClickPayment } = usePayment();

  return (
    <S.Wrapper>
      <S.Title>포인트 충전</S.Title>
      <S.Section>
        <S.InputWrapper>
          <S.InputTitle>충천할 포인트</S.InputTitle>
          <S.InputPoint
            type="string"
            placeholder="1,000이상 100단위"
            {...register("price", {
              onChange: (e) => {
                onChangePoint(e);
              },
            })}
            onBlur={handleInputBlur}
          />
          <S.Error isError={isError}>1000 이상부터 100 단위로 입력하여 주세요.</S.Error>
          <S.UnitWrapper>
            {unitItems.map((el, index) => (
              <S.UnitItem key={index} onClick={onClickPointUp(el)}>
                +{el}
              </S.UnitItem>
            ))}
          </S.UnitWrapper>
        </S.InputWrapper>
        <S.SubmitButton onClick={handleSubmit(onClickPayment)}>충전하기</S.SubmitButton>
      </S.Section>
    </S.Wrapper>
  );
}
export default memo(MyPointChargePoint);
