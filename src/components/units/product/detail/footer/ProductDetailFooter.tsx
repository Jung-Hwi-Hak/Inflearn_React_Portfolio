import { memo } from "react";
import { useProductDetailFooter } from "../../../../commons/hooks/customs/product/useProductDetailFooter";
import { useQueryIdChecker } from "../../../../commons/hooks/customs/useQueryIdChecker";
import * as S from "./ProductDetailFooter.styles";
import type { IProductDetailFooterProps } from "./ProductDetailFooter.types";
import { useRecoilState } from "recoil";
import { userIDState } from "../../../../../commons/stores";
import { usePayment } from "../../../../commons/hooks/customs/usePayment";

function ProductDetailFooter(props: IProductDetailFooterProps): JSX.Element {
  const { id: productId } = useQueryIdChecker("productId");
  const [userId] = useRecoilState(userIDState);
  const { onClickDeleteProduct } = useProductDetailFooter();
  const { onClickBuyPayment } = usePayment();
  return (
    <>
      {props.data?.fetchUseditem?.seller?.email !== userId ? (
        <S.BottomWrapper>
          <S.Button onClick={props.onClickMoveToPage(`/products`)}>목록으로</S.Button>
          {props.data?.fetchUseditem.soldAt ? (
            <></>
          ) : (
            <S.Button
              onClick={
                props.data
                  ? onClickBuyPayment({ buyData: props.data.fetchUseditem }, productId)
                  : () => {}
              }
            >
              구매하기
            </S.Button>
          )}
        </S.BottomWrapper>
      ) : (
        <S.BottomWrapper>
          <S.Button onClick={props.onClickMoveToPage(`/products`)}>목록으로</S.Button>
          {props.data?.fetchUseditem.soldAt ? (
            <></>
          ) : (
            <>
              <S.Button onClick={props.onClickMoveToPage(`/products/${String(productId)}/edit`)}>
                수정하기
              </S.Button>
              <S.Button onClick={onClickDeleteProduct}>삭제하기</S.Button>
            </>
          )}
        </S.BottomWrapper>
      )}
    </>
  );
}

export default memo(ProductDetailFooter);
