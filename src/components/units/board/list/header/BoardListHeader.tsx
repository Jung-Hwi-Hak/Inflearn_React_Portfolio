import { memo } from "react";
import type { IBoardListHeaderProps } from "./BoardListHeader.types";

function BoardListHeader(props: IBoardListHeaderProps): JSX.Element {
  return <div>{props.children}</div>;
}
export default memo(BoardListHeader);
