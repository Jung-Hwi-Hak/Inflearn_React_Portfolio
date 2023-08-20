import { memo } from "react";
import type { IBoardListHeaderProps } from "./BoardListHeader.types";

function BoardListHeader(props: IBoardListHeaderProps): JSX.Element {
  return <>{props.children}</>;
}
export default memo(BoardListHeader);
