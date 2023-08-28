import { useProductSidebar } from "../../../../commons/hooks/customs/product/useProductSidebar";
import * as S from "./ProductSidebar.styles";
import type { IQuery } from "../../../../../commons/types/generated/types";
import ProductSidebarItem from "../sidebarItem/ProductSidebarItem.index";
import { memo } from "react";
import { useCheckLogin } from "../../../../commons/hooks/customs/useCheckLogin";

function ProductSideBar() {
  const { onClickScrollDown, onClickScrollUp, onClickMoveToPage, recentProduct } =
    useProductSidebar();
  const { onClickCheckLogin } = useCheckLogin();

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

      <S.CreateButton onClick={onClickCheckLogin(onClickMoveToPage("/products/new"))}>
        등록하기
      </S.CreateButton>
    </S.Wrapper>
  );
}

export default memo(ProductSideBar);
