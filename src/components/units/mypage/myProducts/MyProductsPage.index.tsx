import { memo } from "react";
import Paginations01Index from "../../../commons/paginations/01/Paginations01.index";
// import SearchBar02Index from "../../../commons/searchBars/searchBar02/SearchBar02.index";
import MyPageBodyIndex from "./body/MyProductsBody.index";
import MyPageFooter from "./footer/MyProductsFooter";
import MyPageHeader from "./header/MyProductsHeader.index";
import { useMyProductsPage } from "../../../commons/hooks/customs/mypage/useMyProductsPage";

function MyProductsPage(props: any) {
  const {
    isFocus,
    setIsFocus,
    activePage,
    setActivePage,
    startPage,
    setStartPage,
    data,
    refetch,
    count,
  } = useMyProductsPage();
  return (
    <>
      <MyPageHeader isFocus={isFocus} setIsFocus={setIsFocus} />
      {/* <SearchBar02Index
          refetch={iSoldRefetch}
          refetchCount={iSoldCountRefetch}
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
        /> */}
      {/* </MyPageHeader> */}
      <MyPageBodyIndex iSoldData={data} isFocus={isFocus} />
      <MyPageFooter>
        <Paginations01Index
          refetch={refetch}
          dataCount={count ?? 0}
          startPage={startPage}
          setStartPage={setStartPage}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </MyPageFooter>
    </>
  );
}

export default memo(MyProductsPage);
