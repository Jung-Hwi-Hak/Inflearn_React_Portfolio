import { type QueryResult, gql, useQuery } from "@apollo/client";
import type { IQuery, IQueryFetchBoardsCountArgs } from "../../../../commons/types/generated/types";

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount($search: String) {
    fetchBoardsCount(search: $search)
  }
`;

export const useQueryFetchBoardsCount = (
  searchKeyword: string
): QueryResult<Pick<IQuery, "fetchBoardsCount">, IQueryFetchBoardsCountArgs> => {
  const query = useQuery<Pick<IQuery, "fetchBoardsCount">, IQueryFetchBoardsCountArgs>(
    FETCH_BOARDS_COUNT,
    {
      variables: {
        search: searchKeyword,
      },
    }
  );

  return query;
};
