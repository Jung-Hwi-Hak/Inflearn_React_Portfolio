import BoardWriteRepetoring from "../../../../src/components/units/board/write/BoardWrite.index";
import { useQueryFetchBoard } from "../../../../src/components/commons/hooks/queries/useQueryFetchBoard";
import { memo } from "react";

function BoardsEditPage(): JSX.Element {
  const { data } = useQueryFetchBoard();
  return <BoardWriteRepetoring isEdit={true} data={data} />;
}
export default memo(BoardsEditPage);
