import { useState } from "react";
import { useQueryFetchUseditemsISold } from "../../queries/useQueryFetchUseditemsISold";
import { useQueryFetchUseditemsCountISold } from "../../queries/useQueryFetchUseditemsCountISold";
import { useQueryFetchUseditemsIPicked } from "../../queries/useQueryFetchUseditemsIPicked";
import { useQueryFetchUseditemsCountIPicked } from "../../queries/useQueryFetchUseditemsCountIPicked";

export const useMyProductsPage = () => {
  const [activePage, setActivePage] = useState(1);
  const [startPage, setStartPage] = useState(1);
  const [isFocus, setIsFocus] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  const iSoldQueries = useQueryFetchUseditemsISold();
  const iSoldCountQueries = useQueryFetchUseditemsCountISold();
  const iPickQueries = useQueryFetchUseditemsIPicked();
  const iPickCountQueries = useQueryFetchUseditemsCountIPicked();

  const data = isFocus
    ? iPickQueries.data?.fetchUseditemsIPicked
    : iSoldQueries.data?.fetchUseditemsISold;
  const refetch = isFocus ? iPickQueries.refetch : iSoldQueries.refetch;
  const count = isFocus
    ? iPickCountQueries.data?.fetchUseditemsCountIPicked
    : iSoldCountQueries.data?.fetchUseditemsCountISold;

  return {
    data,
    refetch,
    count,
    isFocus,
    setIsFocus,
    activePage,
    setActivePage,
    startPage,
    setStartPage,
    searchKeyword,
    setSearchKeyword,
  };
};
