import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchPointTransactionsOfBuyingArgs,
} from "../../../../commons/types/generated/types";

const FETCH_POINT_TRANSACTIONS_BUYING = gql`
  query fetchPointTransactionsOfBuying($search: String, $page: Int) {
    fetchPointTransactionsOfBuying(search: $search, page: $page) {
      balance
      amount
      createdAt
      status
      useditem {
        name
      }
    }
  }
`;

export const useQueryFetchPointTransactionsOfBuying = () => {
  const result = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfBuying">,
    IQueryFetchPointTransactionsOfBuyingArgs
  >(FETCH_POINT_TRANSACTIONS_BUYING, { variables: { search: "" } });
  return result;
};
