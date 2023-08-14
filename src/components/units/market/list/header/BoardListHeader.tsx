import { memo } from "react";
import type { IBoardListHeaderProps } from "./BoardListHeader.types";

function BoardListHeader(props: IBoardListHeaderProps): JSX.Element {
  return (
    <>
      <div onClick={props.onChangeIsSold}>변경</div>
      {props.children}
    </>
  );
}
export default memo(BoardListHeader);
