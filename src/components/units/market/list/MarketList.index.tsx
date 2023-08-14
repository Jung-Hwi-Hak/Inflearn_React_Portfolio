import SearchBar01 from "../../../commons/searchBars/searchBar01/SearchBar01.index";
import * as S from "./MarketList.styles";
import BoardListHeader from "./header/BoardListHeader";
import MarketListBody from "./body/MarketListBody";
import BestBoardListIndex from "./bestList/BestMarketList.index";
import { memo } from "react";
import { useMarketList } from "../../../commons/hooks/customs/useMarketList";

function MarketList(): JSX.Element {
  const { data, refetch, onLoadMore, onChangeIsSold, searchKeyword, setSearchKeyword } =
    useMarketList();

  return (
    <S.Wrapper>
      <BestBoardListIndex />
      <BoardListHeader onChangeIsSold={onChangeIsSold}>
        <SearchBar01
          refetch={refetch}
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
        />
      </BoardListHeader>

      <MarketListBody data={data} onLoadMore={onLoadMore} />
    </S.Wrapper>
  );
}
export default memo(MarketList);
