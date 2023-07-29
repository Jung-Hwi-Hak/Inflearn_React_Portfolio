import * as S from "./LayoutHeader.styles";
import { useMoveToPage } from "../../hooks/customs/useMoveToPage";
import { useQueryFetchUserLoggedIn } from "../../hooks/queries/useQueryFetchUserLoggedIn";
import { Dropdown, Space } from "antd";
import { memo } from "react";
import { useLayoutHeader } from "../../hooks/customs/useLayoutHeader";

function LayoutHeader(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const { fetchLoggedIn, userId } = useQueryFetchUserLoggedIn();
  const { items } = useLayoutHeader();
  void fetchLoggedIn();
  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.LogoWrapper onClick={onClickMoveToPage("/boards")}>I CAN</S.LogoWrapper>
        <div>
          {userId ? (
            <>
              <Dropdown menu={{ items }} trigger={["click"]}>
                <Space>
                  <S.userProfileImg src="../images/profile.png" alt="" />
                  <S.userProfileIcon />
                </Space>
              </Dropdown>
            </>
          ) : (
            <>
              <S.HeaderButtonLogin onClick={onClickMoveToPage("/login")}>
                {"<"} 로그인 {"/>"}
              </S.HeaderButtonLogin>
              <S.HeaderButtonSignUp onClick={onClickMoveToPage("/signup")}>
                {"<"} 회원가입 {"/>"}
              </S.HeaderButtonSignUp>
            </>
          )}
        </div>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
export default memo(LayoutHeader);
