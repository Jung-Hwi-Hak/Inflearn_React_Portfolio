import { memo } from "react";
import BoardList from "../../src/components/units/board/list/BoardList.index";

function BoardsPage(): JSX.Element {
  return <BoardList />;
}
export default memo(BoardsPage);
