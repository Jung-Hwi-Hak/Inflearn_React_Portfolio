import * as S from "./LayoutHeader.styles";
import { useMoveToPage } from "../../hooks/customs/useMoveToPage";
import { Dropdown, Space } from "antd";
import { memo } from "react";
import { useLayoutHeader } from "../../hooks/customs/useLayoutHeader";
import { useQueryFetchUserLoggedIn } from "../../hooks/queries/useQueryFetchUserLoggedIn";

function LayoutHeader(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const { items, userId } = useLayoutHeader();
  const { data } = useQueryFetchUserLoggedIn();
  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.LogoWrapper onClick={onClickMoveToPage("/boards")}>I CAN</S.LogoWrapper>
        <div>
          {userId ? (
            <>
              <Dropdown menu={{ items }} trigger={["click"]}>
                <Space>
                  {/* <S.UserProfileImg src="../images/profile.png" alt="" /> */}
                  <S.UserProfileImg
                    src={`https://storage.googleapis.com/${String(
                      data?.fetchUserLoggedIn.picture
                    )}`}
                    alt=""
                  />
                  <S.UserProfileIcon rev={""} />
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
