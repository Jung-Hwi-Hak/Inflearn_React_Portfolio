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
import { useBoardList } from "../../../commons/hooks/customs/board/useBoardList";

function BoardList(): JSX.Element {
  const { activePage, setActivePage, startPage, setStartPage, searchKeyword, setSearchKeyword } =
    useBoardList();
  const { data, refetch } = useQueryFetchBoards();
  const { data: dataCount, refetch: refetchCount } = useQueryFetchBoardsCount();

  return (
    <S.Wrapper>
      <BestBoardListIndex />
      <BoardListHeader>
        <SearchBar01
          refetch={refetch}
          refetchCount={refetchCount}
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
          setActivePage={setActivePage}
          setStartPage={setStartPage}
        />
      </BoardListHeader>
      <BoardListBody data={data} searchKeyword={searchKeyword} />
      <BoardListFooter>
        <Paginations01
          refetch={refetch}
          dataCount={dataCount}
          startPage={startPage}
          setStartPage={setStartPage}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </BoardListFooter>
    </S.Wrapper>
  );
}
export default memo(BoardList);
