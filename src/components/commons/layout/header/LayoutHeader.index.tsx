import * as S from "./LayoutHeader.styles";
import { useMoveToPage } from "../../hooks/customs/useMoveToPage";

export default function LayoutHeader(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.LogoWrapper onClick={onClickMoveToPage("/boards")}>
          I CAN
        </S.LogoWrapper>
        <div>
          <S.HeaderButtonLogin onClick={onClickMoveToPage("/login")}>
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
