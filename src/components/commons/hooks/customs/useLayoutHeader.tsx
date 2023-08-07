import type { MenuProps } from "antd";
import { useQueryFetchUserLoggedIn } from "../queries/useQueryFetchUserLoggedIn";
import { useQueryLogoutUser } from "../queries/useQueryLogoutUser";
import styled from "@emotion/styled";
import { useMoveToPage } from "./useMoveToPage";

const LogoutButton = styled.button`
  border: none;
  cursor: pointer;
  color: tomato;
`;

export const useLayoutHeader = () => {
  const { userId } = useQueryFetchUserLoggedIn();
  const [logoutMutation] = useQueryLogoutUser();
  const { onClickMoveToPage } = useMoveToPage();

  const items: MenuProps["items"] = [
    {
      label: `${userId}`,
      key: "0",
    },
    {
      label: <span onClick={onClickMoveToPage("/mypage")}>내 정보</span>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: (
        <LogoutButton
          onClick={async () => {
            await logoutMutation();
            location.reload();
          }}
        >
          로그아웃
        </LogoutButton>
      ),
      key: "3",
    },
  ];

  return {
    items,
  };
};
