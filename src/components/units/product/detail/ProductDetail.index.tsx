import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import ProductDetailHeader from "./header/ProductDetailHeader";
import ProductDetailBody from "./body/ProductDetailBody";
import ProductDetailFooter from "./footer/ProductDetailFooter";
import styled from "@emotion/styled";
import { memo } from "react";
import { useProductDetail } from "../../../commons/hooks/customs/product/useProductDetail";

const CardWrapper = styled.div`
  border: 1px solid black;
  min-width: 1200px;
  max-width: 1200px;
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
  margin-bottom: 50px;
`;

function ProductDetail(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();

  const { data } = useProductDetail();
  return (
    <>
      <CardWrapper>
        <ProductDetailHeader data={data} />
        <ProductDetailBody data={data} />
        <ProductDetailFooter data={data} onClickMoveToPage={onClickMoveToPage} />
      </CardWrapper>
    </>
  );
}
export default memo(ProductDetail);
