import { useMarketSidebar } from "../../../../commons/hooks/customs/useMarketSidebar";
import * as S from "./MarketSidebar.styles";

export default function MarketSideBar() {
  const { onClickScrollDown, onClickScrollUp } = useMarketSidebar();

  return (
    <>
      <S.SidebarWrapper>
        <S.ScrollUpButton rev={""} onClick={onClickScrollUp} />
        <div>asdasd</div>
        <div>asdasd</div>
        <S.ScrollDownButton rev={""} onClick={onClickScrollDown} />
      </S.SidebarWrapper>
    </>
  );
}
