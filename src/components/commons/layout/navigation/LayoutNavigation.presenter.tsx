import { Fragment } from "react";
import type { ILayoutNavigationUIProps } from "./LayoutNavigation.types";
import * as S from "./LayoutNavigation.styles";

export default function LayoutNavigationUI(
  props: ILayoutNavigationUIProps
): JSX.Element {
  const NAVIGATION_MENUS = [
    { name: "Firebase Boards", page: "/firebasePage" },
    { name: "Public APIs", page: "/publicApis" },
    { name: "Graphql Boards", page: "/boards" },
    { name: "My Page", page: "/mypages" },
  ];

  return (
    <>
      <S.Wrapper>
        {NAVIGATION_MENUS.map((el) => (
          <Fragment key={el.page}>
            <S.MenuItem id={el.page} onClick={props.onClickMoveToMenu}>
              {el.name}
            </S.MenuItem>
          </Fragment>
        ))}
      </S.Wrapper>
    </>
  );
}
