import { memo } from "react";
import ProductList from "../../src/components/units/product/list/ProductList.index";

function ProductPage(): JSX.Element {
  return <ProductList />;
}

export default memo(ProductPage);
