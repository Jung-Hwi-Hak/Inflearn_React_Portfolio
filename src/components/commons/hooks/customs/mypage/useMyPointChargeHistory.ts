import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type {
  IQuery,
  IQueryFetchPointTransactionsOfLoadingArgs,
} from "../../../../../commons/types/generated/types";
import { useQueryFetchPointCountOfLoading } from "../../queries/useQueryFetchPointCountOfLoading";
import { useQueryFetchPointTransactionsOfLoading } from "../../queries/useQueryFetchPointTransactionsOfLoading";
import type { ApolloQueryResult } from "@apollo/client";

interface IUseMyPointChargeHistory {
  data: Pick<IQuery, "fetchPointTransactionsOfLoading"> | undefined;
  refetch: (
    variables?: Partial<IQueryFetchPointTransactionsOfLoadingArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchPointTransactionsOfLoading">>>;
  countData: Pick<IQuery, "fetchPointTransactionsCountOfLoading"> | undefined;
  startPage: number;
  setStartPage: Dispatch<SetStateAction<number>>;
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
}

export const useMyPointChargeHistory = (): IUseMyPointChargeHistory => {
  const [startPage, setStartPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const { data, refetch } = useQueryFetchPointTransactionsOfLoading();
  const { data: countData } = useQueryFetchPointCountOfLoading();
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
