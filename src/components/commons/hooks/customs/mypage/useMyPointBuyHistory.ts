import type { ApolloQueryResult } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchPointTransactionsOfBuyingArgs,
} from "../../../../../commons/types/generated/types";
import { useQueryFetchPointCountOfBuying } from "../../queries/useQueryFetchPointCountOfBuying";
import { useQueryFetchPointTransactionsOfBuying } from "../../queries/useQueryFetchPointTransactionsOfBuying";
import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
interface IUseMyPointBuyHistory {
  data: Pick<IQuery, "fetchPointTransactionsOfBuying"> | undefined;
  refetch: (
    variables?: Partial<IQueryFetchPointTransactionsOfBuyingArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchPointTransactionsOfBuying">>>;
  countData: Pick<IQuery, "fetchPointTransactionsCountOfBuying"> | undefined;
  startPage: number;
  setStartPage: Dispatch<SetStateAction<number>>;
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
}

export const useMyPointBuyHistory = (): IUseMyPointBuyHistory => {
  const [startPage, setStartPage] = useState(1);
  const [activePage, setActivePage] = useState(1);

  const { data, refetch } = useQueryFetchPointTransactionsOfBuying();
  const { data: countData } = useQueryFetchPointCountOfBuying();
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
