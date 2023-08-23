import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchPointTransactionsArgs,
} from "../../../../commons/types/generated/types";

// 날짜, 내용, 거래 및 충전 내역, 잔액
const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactions {
    fetchPointTransactions {
      amount
      balance
      status
      statusDetail
      createdAt
    }
  }
`;

export const useQueryFetchPointTransactions = () => {
  const result = useQuery<Pick<IQuery, "fetchPointTransactions">, IQueryFetchPointTransactionsArgs>(
    FETCH_POINT_TRANSACTIONS
  );
  return result;
};
