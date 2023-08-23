import type { IQuery } from "../../../../../commons/types/generated/types";
import { useQueryFetchPointTransactionsOfLoading } from "../../queries/useQueryFetchPointTransactionsOfLoading";

interface IUseMyPointChargeHistory {
  data: Pick<IQuery, "fetchPointTransactionsOfLoading"> | undefined;
}

export const useMyPointChargeHistory = (): IUseMyPointChargeHistory => {
  const { data } = useQueryFetchPointTransactionsOfLoading();
  return {
    data,
  };
};
