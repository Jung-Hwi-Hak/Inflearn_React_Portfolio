import { memo } from "react";
import Paginations01Index from "../../../commons/paginations/01/Paginations01.index";
// import SearchBar02Index from "../../../commons/searchBars/searchBar02/SearchBar02.index";
import MyPageBodyIndex from "./body/MyProductsBody.index";
import MyPageFooter from "./footer/MyProductsFooter";
import { useMyProductsPage } from "../../../commons/hooks/customs/mypage/useMyProductsPage";
import MyPageHeader01 from "../../../commons/mypage/header/01/MyPageHeader01.index";

function MyProducts(props: any) {
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
      <MyPageHeader01
        listNames={["나의 상품", "마이찜"]}
        isFocus={isFocus}
        setIsFocus={setIsFocus}
      />
      {/* <SearchBar02Index
          refetch={iSoldRefetch}
          refetchCount={iSoldCountRefetch}
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
        /> */}
      {/* </MyPageHeader> */}
      <MyPageBodyIndex data={data} isFocus={isFocus} />
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

export default memo(MyProducts);
