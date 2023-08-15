import { memo } from "react";
import type { IProductListHeaderProps } from "./ProductListHeader.types";

function ProductListHeader(props: IProductListHeaderProps): JSX.Element {
  return (
    <>
      <div onClick={props.onChangeIsSold}>변경</div>
      {props.children}
    </>
  );
}
export default memo(ProductListHeader);
