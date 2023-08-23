import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../../commons/types/generated/types";

const FETCH_POINT_COUNT_BUY = gql`
  query fetchPointTransactionsCountOfBuying {
    fetchPointTransactionsCountOfBuying
  }
`;

export const useQueryFetchPointCountOfBuying = () => {
  const result =
    useQuery<Pick<IQuery, "fetchPointTransactionsCountOfBuying">>(FETCH_POINT_COUNT_BUY);
  return result;
};
