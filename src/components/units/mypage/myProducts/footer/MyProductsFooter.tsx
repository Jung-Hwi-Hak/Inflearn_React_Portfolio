import { memo } from "react";

import * as S from "./MyProductsFooter.styles";
import type { IBoardListFooterProps } from "./MyProductsFooter.types";

function MyPageFooter(props: IBoardListFooterProps): JSX.Element {
  return <S.Footer>{props.children}</S.Footer>;
}
export default memo(MyPageFooter);
