import type { ILayoutHeaderUIProps } from "./LayoutHeader.types";
import * as S from "./LayoutHeader.styles";

export default function LayoutHeaderUI(
  props: ILayoutHeaderUIProps
): JSX.Element {
  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.InnerLogo onClick={props.onClickLogo} src="/images/logo.png" />
        <div>
          <S.InnerButton onClick={props.onClickMoveToLogin} type="primary">
            로그인
          </S.InnerButton>
          <S.InnerButton>회원가입</S.InnerButton>
        </div>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
