import { memo } from "react";
import { useMoveToPage } from "../../../../commons/hooks/customs/useMoveToPage";
import * as S from "./ProductListFooter.styles";
import type { IProductListFooterProps } from "./ProductListFooter.types";

function ProductListFooter(props: IProductListFooterProps): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Footer>
      {props.children}
      <S.Button onClick={onClickMoveToPage("/product/new")}>
        <S.PencilIcon src="/images/board/list/write.png" />
        게시물 등록하기
      </S.Button>
    </S.Footer>
  );
}
export default memo(ProductListFooter);
