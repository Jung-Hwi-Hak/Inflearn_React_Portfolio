import { useQueryFetchBoards } from "../../../commons/hooks/queries/useQueryFetchBoards";
import { useQueryFetchBoardsCount } from "../../../commons/hooks/queries/useQueryFetchBoardsCount";
import Paginations01 from "../../../commons/paginations/01/Paginations01.index";
import SearchBar01 from "../../../commons/searchBars/searchBar01/SearchBar01.index";
import * as S from "./BoardList.styles";
import BoardListHeader from "./header/BoardListHeader";
import BoardListBody from "./body/BoardListBody";
import BoardListFooter from "./footer/BoardListFooter";
import BestBoardListIndex from "./bestList/BestBoardList.index";
import { memo } from "react";

function BoardList(): JSX.Element {
  const { data, refetch } = useQueryFetchBoards();
  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQueryFetchBoardsCount();

  return (
    <S.Wrapper>
      <BestBoardListIndex />
      <BoardListHeader>
        <SearchBar01
          refetch={refetch}
          dataBoardsCount={dataBoardsCount?.fetchBoardsCount}
          refetchBoardsCount={refetchBoardsCount}
        />
      </BoardListHeader>
      <BoardListBody data={data} />
      <BoardListFooter>
        <Paginations01 refetch={refetch} dataBoardsCount={dataBoardsCount?.fetchBoardsCount} />
      </BoardListFooter>
    </S.Wrapper>
  );
}
export default memo(BoardList);
