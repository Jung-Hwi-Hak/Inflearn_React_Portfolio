import { memo } from "react";
import BoardWriteRepetoring from "../../../src/components/units/board/write-repactoring/BoardWrite.index";

function BoardsNewPage(): JSX.Element {
  return <BoardWriteRepetoring isEdit={false} />;
}

export default memo(BoardsNewPage);
