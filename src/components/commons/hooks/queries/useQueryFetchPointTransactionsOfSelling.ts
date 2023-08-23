import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchPointTransactionsOfSellingArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_POINT_TRANSACTIONS_SELLING = gql`
  query fetchPointTransactionsOfSelling {
    fetchPointTransactionsOfSelling {
      balance
      amount
      createdAt
      useditem {
        name
      }
    }
  }
`;

export const useQueryFetchPointTransactionsOfSelling = () => {
  const result = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfSelling">,
    IQueryFetchPointTransactionsOfSellingArgs
  >(FETCH_POINT_TRANSACTIONS_SELLING);
  return result;
};
