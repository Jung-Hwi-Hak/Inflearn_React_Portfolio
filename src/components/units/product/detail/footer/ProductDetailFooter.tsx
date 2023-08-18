import { memo } from "react";
import { useProductDetailFooter } from "../../../../commons/hooks/customs/product/useProductDetailFooter";
import { useQueryIdChecker } from "../../../../commons/hooks/customs/useQueryIdChecker";
import * as S from "./ProductDetailFooter.styles";
import type { IProductDetailFooterProps } from "./ProductDetailFooter.types";

function BoardDetailFooter(props: IProductDetailFooterProps): JSX.Element {
  const { id: productId } = useQueryIdChecker("productId");
  const { onClickDeleteProduct } = useProductDetailFooter();
  return (
    <>
      <S.BottomWrapper>
        <S.Button onClick={props.onClickMoveToPage(`/products`)}>목록으로</S.Button>
        <S.Button onClick={props.onClickMoveToPage(`/products/${String(productId)}/edit`)}>
          수정하기
        </S.Button>
        <S.Button onClick={onClickDeleteProduct}>삭제하기</S.Button>
      </S.BottomWrapper>
    </>
  );
}

export default memo(BoardDetailFooter);
