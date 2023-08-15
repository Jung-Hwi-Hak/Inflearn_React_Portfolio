// import { useCallback, useEffect, useRef, useState } from "react";
import { useMarketSidebar } from "../../../../commons/hooks/customs/useMarketSidebar";
import * as S from "./MarketSidebar.styles";
// import * as _ from "lodash";

export default function ProductSideBar() {
  const { onClickScrollDown, onClickScrollUp, onClickMoveToPage } = useMarketSidebar();
  // const [scroll, setScroller] = useState(0);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // const handleScroll = useCallback(
  //   _.throttle(() => {
  //     if (ref.current === null) return;
  //     if (window.scrollY > 1230) {
  //       setScroller(window.scrollY - 1230);
  //       // ref.current.setAttribute("scroll", String(window.scrollY - 1230));
  //       // console.log(ref.current.getAttribute("scroll"));
  //     } else {
  //       setScroller(0);
  //       // ref.current.setAttribute("scroll", String(0));
  //     }
  //   }, 300),
  //   []
  // );
  return (
    <S.Wrapper>
      <S.SidebarWrapper>
        <S.ScrollUpButton rev={""} onClick={onClickScrollUp} />
        <div>asdasd</div>
        <div>asdasd</div>
        <S.ScrollDownButton rev={""} onClick={onClickScrollDown} />
      </S.SidebarWrapper>
      <S.CreateButton onClick={onClickMoveToPage("/products/new")}>등록하기</S.CreateButton>
    </S.Wrapper>
  );
}
