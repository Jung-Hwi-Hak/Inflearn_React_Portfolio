import { type QueryResult, gql, useQuery } from "@apollo/client";
import type { IQuery, IQueryFetchBoardsCountArgs } from "../../../../commons/types/generated/types";

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount($search: String, $endDate: DateTime, $startDate: DateTime) {
    fetchBoardsCount(search: $search, endDate: $endDate, startDate: $startDate)
  }
`;

export const useQueryFetchBoardsCount = (): QueryResult<
  Pick<IQuery, "fetchBoardsCount">,
  IQueryFetchBoardsCountArgs
> => {
  const query = useQuery<Pick<IQuery, "fetchBoardsCount">, IQueryFetchBoardsCountArgs>(
    FETCH_BOARDS_COUNT
  );

  return query;
};
