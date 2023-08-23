import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchPointTransactionsOfLoadingArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_POINT_TRANSACTIONS_LOADING = gql`
  query fetchPointTransactionsOfLoading {
    fetchPointTransactionsOfLoading {
      amount
      balance
      impUid
      createdAt
    }
  }
`;

export const useQueryFetchPointTransactionsOfLoading = () => {
  const result = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfLoading">,
    IQueryFetchPointTransactionsOfLoadingArgs
  >(FETCH_POINT_TRANSACTIONS_LOADING);
  return result;
};
