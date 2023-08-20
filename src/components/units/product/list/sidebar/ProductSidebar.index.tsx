import { useMarketSidebar } from "../../../../commons/hooks/customs/useMarketSidebar";
import * as S from "./ProductSidebar.styles";
import type { IQuery } from "../../../../../commons/types/generated/types";
import ProductSidebarItem from "../sidebarItem/ProductSidebarItem.index";

export default function ProductSideBar() {
  const { onClickScrollDown, onClickScrollUp, onClickMoveToPage, recentProduct } =
    useMarketSidebar();

  return (
    <S.Wrapper>
      <S.SidebarWrapper>
        <S.Title>최근본 상품</S.Title>
        <S.ScrollUpButton rev={""} onClick={onClickScrollUp} />
        {recentProduct.map((el: Pick<IQuery, "fetchUseditem">, index) => (
          <ProductSidebarItem
            key={el.fetchUseditem?._id ?? index}
            data={el.fetchUseditem ?? undefined}
          />
        ))}
        <S.ScrollDownButton rev={""} onClick={onClickScrollDown} />
      </S.SidebarWrapper>
      <S.CreateButton onClick={onClickMoveToPage("/products/new")}>등록하기</S.CreateButton>
    </S.Wrapper>
  );
}
