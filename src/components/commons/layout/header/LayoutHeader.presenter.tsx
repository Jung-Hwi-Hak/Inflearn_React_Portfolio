import type { ILayoutHeaderUIProps } from "./LayoutHeader.types";
import * as S from "./LayoutHeader.styles";

export default function LayoutHeaderUI(
  props: ILayoutHeaderUIProps
): JSX.Element {
  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.LogoWrapper onClick={props.onClickLogo}>I CAN</S.LogoWrapper>
        <div>
          <S.HeaderButtonLogin onClick={props.onClickMoveToLogin}>
            {"<"} 로그인 {"/>"}
          </S.HeaderButtonLogin>
          <S.HeaderButtonSignUp>
            {"<"} 회원가입 {"/>"}
          </S.HeaderButtonSignUp>
        </div>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
