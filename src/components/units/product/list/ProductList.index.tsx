import SearchBar01 from "../../../commons/searchBars/searchBar01/SearchBar01.index";
import * as S from "./ProductList.styles";
import ProductListHeader from "./header/ProductListHeader";
import ProductListBody from "./body/ProductListBody";
import BestProductListIndex from "./bestList/BestProductList.index";
import { memo } from "react";
import { useProductList } from "../../../commons/hooks/customs/useMarketList";

function ProductList(): JSX.Element {
  const { data, refetch, onLoadMore, searchKeyword, setSearchKeyword } = useProductList();

  return (
    <S.Wrapper>
      <BestProductListIndex />
      <ProductListHeader>
        <SearchBar01
          refetch={refetch}
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
        />
      </ProductListHeader>

      <ProductListBody data={data} onLoadMore={onLoadMore} />
    </S.Wrapper>
  );
}
export default memo(ProductList);
