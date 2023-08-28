import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { useQueryFetchUseditemsISold } from "../../queries/useQueryFetchUseditemsISold";
import { useQueryFetchUseditemsCountISold } from "../../queries/useQueryFetchUseditemsCountISold";
import { useQueryFetchUseditemsIPicked } from "../../queries/useQueryFetchUseditemsIPicked";
import { useQueryFetchUseditemsCountIPicked } from "../../queries/useQueryFetchUseditemsCountIPicked";
import type {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
  IUseditem,
} from "../../../../../commons/types/generated/types";
import type { ApolloQueryResult } from "@apollo/client";

interface IUseMyProductsPageReturns {
  data: IUseditem[] | undefined;
  refetch:
    | ((
        variables?: Partial<IQueryFetchUseditemsIPickedArgs> | undefined
      ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsIPicked">>>)
    | ((variables?: Partial<any> | undefined) => Promise<any>);
  count: number | undefined;
  isFocus: number;
  setIsFocus: Dispatch<SetStateAction<number>>;
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
  startPage: number;
  setStartPage: Dispatch<SetStateAction<number>>;
  searchKeyword: string;
  setSearchKeyword: Dispatch<SetStateAction<string>>;
}

export const useMyProductsPage = (): IUseMyProductsPageReturns => {
  const [activePage, setActivePage] = useState(1);
  const [startPage, setStartPage] = useState(1);
  const [isFocus, setIsFocus] = useState(0);
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
