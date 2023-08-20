import { memo } from "react";
import type { IProductListHeaderProps } from "./ProductListHeader.types";
import { useProductListHeader } from "../../../../commons/hooks/customs/product/useProductListHeader";
import * as S from "./ProductListHeader.styles";
function ProductListHeader(props: IProductListHeaderProps): JSX.Element {
  const { onChangeIsSold, isSold } = useProductListHeader();
  return (
    <>
      <S.IsSoldSpan isActive={!isSold} onClick={onChangeIsSold(false)}>
        판매중
      </S.IsSoldSpan>
      <S.IsSoldSpan isActive={isSold} onClick={onChangeIsSold(true)}>
        판매완료
      </S.IsSoldSpan>
      {props.children}
    </>
  );
}
export default memo(ProductListHeader);
