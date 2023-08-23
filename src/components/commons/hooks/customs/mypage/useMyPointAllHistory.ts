import type { IQuery } from "../../../../../commons/types/generated/types";
import { useQueryFetchPointTransactions } from "../../queries/useQueryFetchPointTransactions";

interface IUseMyPointAllHistoryReturns {
  data: Pick<IQuery, "fetchPointTransactions"> | undefined;
}

export const useMyPointAllHistory = (): IUseMyPointAllHistoryReturns => {
  const { data } = useQueryFetchPointTransactions();
  return {
    data,
  };
};
