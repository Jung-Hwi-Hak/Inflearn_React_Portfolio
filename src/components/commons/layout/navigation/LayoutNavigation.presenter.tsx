import { Fragment } from "react";
import type { ILayoutNavigationUIProps } from "./LayoutNavigation.types";
import * as S from "./LayoutNavigation.styles";

export default function LayoutNavigationUI(
  props: ILayoutNavigationUIProps
): JSX.Element {
  const NAVIGATION_MENUS = [
    { name: "라이브게시판", page: "/boards" },
    { name: "동물사진", page: "/patpicture" },
    { name: "마이페이지", page: "/mypages" },
  ];

  return (
    <S.Wrapper>
      {NAVIGATION_MENUS.map((el) => (
        <Fragment key={el.page}>
          <S.MenuItem id={el.page} onClick={props.onClickMoveToMenu}>
            {el.name}
          </S.MenuItem>
        </Fragment>
      ))}
    </S.Wrapper>
  );
}
