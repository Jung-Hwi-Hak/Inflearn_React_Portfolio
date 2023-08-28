import { useMoveToPage } from "../../../hooks/customs/useMoveToPage";
import * as S from "./LayoutHeaderDetail.styles";
import type { ULayoutHeaderDetail } from "./LayoutHeaderDetail.types";

export default function LayoutHeaderDetail(props: ULayoutHeaderDetail): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Wrapper onClick={onClickMoveToPage("/mypage")}>
      <S.Icon
        src={`https://storage.googleapis.com/${String(props.data?.fetchUserLoggedIn?.picture)}`}
      />
      <S.UserInfoWrapper>
        <S.UserName>{props.data?.fetchUserLoggedIn.name}</S.UserName>
        <S.UserPoint>
          {props.data?.fetchUserLoggedIn.userPoint?.amount.toLocaleString("ko-KR")}P
        </S.UserPoint>
      </S.UserInfoWrapper>
    </S.Wrapper>
  );
}
