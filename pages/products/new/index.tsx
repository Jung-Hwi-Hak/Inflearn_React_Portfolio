import { memo } from "react";
import ProductWrite from "../../../src/components/units/product/write/ProductWrite.index";

function BoardsNewPage(): JSX.Element {
  return <ProductWrite isEdit={false} />;
}

export default memo(BoardsNewPage);
