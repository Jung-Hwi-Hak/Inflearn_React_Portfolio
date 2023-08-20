import { type QueryResult, useQuery, gql } from "@apollo/client";
import type { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types";

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String, $endDate: DateTime, $startDate: DateTime) {
    fetchBoards(page: $page, search: $search, endDate: $endDate, startDate: $startDate) {
      _id
      writer
      title
      createdAt
    }
  }
`;
export const useQueryFetchBoards = (): QueryResult<
  Pick<IQuery, "fetchBoards">,
  IQueryFetchBoardsArgs
> => {
  const result = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);
  return result;
};
