import { memo } from "react";
import * as S from "./MyPageSide.styles";
import { useQueryFetchUserLoggedIn } from "../../../commons/hooks/queries/useQueryFetchUserLoggedIn";
import NavigationItems from "./items/NavigationItems.index";
import type { IMyPageSideProps } from "./MyPageSide.types";

function MyPageSide(props: IMyPageSideProps): JSX.Element {
  const { data } = useQueryFetchUserLoggedIn();

  return (
    <S.Wrapper>
      <S.Title>MYPAGE</S.Title>
      <S.UserImg
        src={`https://storage.googleapis.com/${String(data?.fetchUserLoggedIn.picture)}`}
      />
      <S.UserName>{data?.fetchUserLoggedIn.name ?? ""}</S.UserName>
      <S.UserPointWrapper>
        <S.UserPointImg src="./images/point.svg" />
        <S.UserPoint>
          {data?.fetchUserLoggedIn.userPoint?.amount.toLocaleString("ko-KR")}P
        </S.UserPoint>
        {/* <S.ChargeIcon src="./images/add_circle.svg" onClick={}/> */}
      </S.UserPointWrapper>
      <S.NavigationList>
        <NavigationItems setPage={props.setPage} />
      </S.NavigationList>
    </S.Wrapper>
  );
}
export default memo(MyPageSide);
