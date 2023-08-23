import type { MenuProps } from "antd";
import { useMutationLogoutUser } from "../mutations/useMutationLogoutUser";
import styled from "@emotion/styled";
import { useMoveToPage } from "./useMoveToPage";
import { useQueryFetchUserLoggedIn } from "../queries/useQueryFetchUserLoggedIn";
import LayoutHeaderDetail from "../../layout/header/detail/LayoutHeaderDetail.index";
import { useEffect, useCallback } from "react";
import { userIDState, userNameState } from "../../../../commons/stores";
import { useRecoilState } from "recoil";

const Button = styled.button`
  width: 100%;
  border: none;
  cursor: pointer;
  font-weight: 700;
  padding-left: 15px;
  text-align: left;
  &.logout__btn {
    color: tomato;
  }
`;

export const useLayoutHeader = () => {
  const { data } = useQueryFetchUserLoggedIn();
  const [, setUserId] = useRecoilState(userIDState);
  const [, setUserName] = useRecoilState(userNameState);
  const [logoutMutation] = useMutationLogoutUser();
  const { onClickMoveToPage } = useMoveToPage();

  const onClickLogout = useCallback(async () => {
    await logoutMutation();
    location.reload();
  }, [logoutMutation]);

  useEffect(() => {
    setUserId(data?.fetchUserLoggedIn.email ?? "");
    setUserName(data?.fetchUserLoggedIn.name ?? "");
  }, [data?.fetchUserLoggedIn.email, setUserId]);

  const items: MenuProps["items"] = [
    {
      label: <LayoutHeaderDetail data={data} />,
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: <Button onClick={onClickMoveToPage("/mypage")}>마이페이지</Button>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Button className="logout__btn" onClick={onClickLogout}>
          로그아웃
        </Button>
      ),
      key: "2",
    },
  ];

  return {
    userId: data?.fetchUserLoggedIn.email,
    items,
  };
};
