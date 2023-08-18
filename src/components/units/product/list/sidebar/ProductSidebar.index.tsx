// import { useCallback, useEffect, useRef, useState } from "react";
import { useEffect, useState } from "react";
import { useMarketSidebar } from "../../../../commons/hooks/customs/useMarketSidebar";
import * as S from "./ProductSidebar.styles";
import type { IQuery } from "../../../../../commons/types/generated/types";
import ProductSidebarItem from "../sidebarItem/ProductSidebarItem.index";
// import * as _ from "lodash";

export default function ProductSideBar() {
  const { onClickScrollDown, onClickScrollUp, onClickMoveToPage } = useMarketSidebar();
  const [data, setData] = useState([]);
  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") ?? "[]");
    setData(baskets);
  }, []);
  return (
    <S.Wrapper>
      <S.SidebarWrapper>
        <S.ScrollUpButton rev={""} onClick={onClickScrollUp} />
        {data.map((el: Pick<IQuery, "fetchUseditem">) => (
          <ProductSidebarItem key={el.fetchUseditem._id} data={el.fetchUseditem} />
          // <div key={el.fetchUseditem._id}>{el.fetchUseditem.name}</div>
        ))}
        <S.ScrollDownButton rev={""} onClick={onClickScrollDown} />
      </S.SidebarWrapper>
      <S.CreateButton onClick={onClickMoveToPage("/products/new")}>등록하기</S.CreateButton>
    </S.Wrapper>
  );
}
