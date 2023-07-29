import { useEffect, Fragment, memo } from "react";
import { useRouter } from "next/router";

import * as S from "./LayoutNavigation.styles";
import { useMoveToPage } from "../../hooks/customs/useMoveToPage";

const NAVIGATION_MENUS = [
  // { name: "Firebase Boards", page: "/firebasePage" },
  // { name: "Public APIs", page: "/publicApis" },
  { name: "자유게시판", page: "/boards" },
  { name: "내 정보", page: "/mypage" },
];

function LayoutNavigation(): JSX.Element {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  // const { onClickMoveToPage } = useMemo(() => useMoveToPage(), []);
  useEffect(() => {
    const changeFocusNavigation = (): void => {
      const path = router.asPath.split("/")[1];
      if (path === null) return;
      const navigation = document.getElementById(`/${path}`);
      const navigationFocus = document.querySelectorAll(".focus");
      navigationFocus.forEach((el) => {
        el.classList.remove("focus");
      });
      navigation?.classList.add("focus");
    };
    changeFocusNavigation();
  }, [router.asPath]);
  return (
    <>
      <S.Wrapper>
        {NAVIGATION_MENUS.map((el) => (
          <Fragment key={el.page}>
            <S.MenuItem id={el.page} onClick={onClickMoveToPage(el.page)}>
              {el.name}
            </S.MenuItem>
          </Fragment>
        ))}
      </S.Wrapper>
    </>
  );
}
export default memo(LayoutNavigation);
