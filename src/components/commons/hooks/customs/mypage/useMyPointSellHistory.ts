import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type {
  IQuery,
  IQueryFetchPointTransactionsOfSellingArgs,
} from "../../../../../commons/types/generated/types";
import { useQueryFetchPointTransactionsOfSelling } from "../../queries/useQueryFetchPointTransactionsOfSelling";
import { useQueryFetchPointCountOfSelling } from "../../queries/useQueryFetchPointCountOfSelling";
import type { ApolloQueryResult } from "@apollo/client";

interface IUseMyPointSellHistoryReturns {
  data: Pick<IQuery, "fetchPointTransactionsOfSelling"> | undefined;
  refetch: (
    variables?: Partial<IQueryFetchPointTransactionsOfSellingArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchPointTransactionsOfSelling">>>;
  countData: Pick<IQuery, "fetchPointTransactionsCountOfSelling"> | undefined;
  startPage: number;
  setStartPage: Dispatch<SetStateAction<number>>;
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
}

export const useMyPointSellHistory = (): IUseMyPointSellHistoryReturns => {
  const [startPage, setStartPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const { data, refetch } = useQueryFetchPointTransactionsOfSelling();
  const { data: countData } = useQueryFetchPointCountOfSelling();
  return {
    data,
    refetch,
    countData,
    startPage,
    setStartPage,
    activePage,
    setActivePage,
  };
};
