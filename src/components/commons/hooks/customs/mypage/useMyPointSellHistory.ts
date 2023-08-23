import type { IQuery } from "../../../../../commons/types/generated/types";
import { useQueryFetchPointTransactionsOfSelling } from "../../queries/useQueryFetchPointTransactionsOfSelling";

interface IUseMyPointSellHistoryReturns {
  data: Pick<IQuery, "fetchPointTransactionsOfSelling"> | undefined;
}

export const useMyPointSellHistory = (): IUseMyPointSellHistoryReturns => {
  const { data } = useQueryFetchPointTransactionsOfSelling();

  return {
    data,
  };
};
