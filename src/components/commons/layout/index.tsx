import * as S from "./index.styles";
import LayoutHeader from "./header/LayoutHeader.index";
import LayoutNavigation from "./navigation/LayoutNavigation.index";
import { memo } from "react";
import LayoutBanner from "./banner/LayoutBanner.index";
import type { ILayoutProps } from "./index.types";

function Layout(props: ILayoutProps): JSX.Element {
  return (
    <>
      <S.BackgroundInk top={"5px"} left={"30px"} />
      <S.BackgroundInk top={"200px"} left={"70%"} />
      <S.BackgroundImage />
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <S.Body>{props.children}</S.Body>
    </>
  );
}
export default memo(Layout);
