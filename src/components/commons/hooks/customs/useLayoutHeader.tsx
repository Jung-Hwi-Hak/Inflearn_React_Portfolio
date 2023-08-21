import type { MenuProps } from "antd";
import { useMutationLogoutUser } from "../mutations/useMutationLogoutUser";
import styled from "@emotion/styled";
import { useMoveToPage } from "./useMoveToPage";
import { useQueryFetchUserLoggedIn } from "../queries/useQueryFetchUserLoggedIn";
import LayoutHeaderDetail from "../../layout/header/detail/LayoutHeaderDetail.index";
import type { MouseEvent } from "react";

const MyInfoButton = styled.button`
  border: none;
  cursor: pointer;
  padding-left: 15px;
`;
const LogoutButton = styled.button`
  border: none;
  cursor: pointer;
  padding-left: 15px;
  color: tomato;
`;

export const useLayoutHeader = () => {
  const { data } = useQueryFetchUserLoggedIn();
  const [logoutMutation] = useMutationLogoutUser();
  const { onClickMoveToPage } = useMoveToPage();

  const onClickLogout = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await logoutMutation();
    location.reload();
  };

  const items: MenuProps["items"] = [
    {
      label: <LayoutHeaderDetail data={data} />,
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: <MyInfoButton onClick={onClickMoveToPage("/mypage")}>내 정보</MyInfoButton>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: <LogoutButton onClick={onClickLogout}>로그아웃</LogoutButton>,
      key: "2",
    },
  ];

  return {
    userId: data?.fetchUserLoggedIn.email,
    items,
  };
};
