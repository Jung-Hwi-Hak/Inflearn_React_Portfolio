import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../../commons/types/generated/types";

const FETCH_POINT_COUNT_SELL = gql`
  query fetchPointTransactionsCountOfSelling {
    fetchPointTransactionsCountOfSelling
  }
`;

export const useQueryFetchPointCountOfSelling = () => {
  const result =
    useQuery<Pick<IQuery, "fetchPointTransactionsCountOfSelling">>(FETCH_POINT_COUNT_SELL);
  return result;
};
