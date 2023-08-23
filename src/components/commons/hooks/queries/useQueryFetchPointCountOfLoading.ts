import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../../commons/types/generated/types";

const FETCH_POINT_COUNT_LOADING = gql`
  query fetchPointTransactionsCountOfLoading {
    fetchPointTransactionsCountOfLoading
  }
`;

export const useQueryFetchPointCountOfLoading = () => {
  const result =
    useQuery<Pick<IQuery, "fetchPointTransactionsCountOfLoading">>(FETCH_POINT_COUNT_LOADING);
  return result;
};
