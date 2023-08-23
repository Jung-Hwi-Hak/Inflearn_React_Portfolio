import { Fragment, memo } from "react";

import * as S from "./LayoutNavigation.styles";
import { useMoveToPage } from "../../hooks/customs/useMoveToPage";
import { useLayoutNavigation } from "../../hooks/customs/useLayoutNavigation";

const NAVIGATION_MENUS = [
  { name: "자유게시판", page: "/boards" },
  { name: "중고마켓", page: "/products" },
  { name: "마이페이지", page: "/mypage" },
];

function LayoutNavigation(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  useLayoutNavigation();

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
