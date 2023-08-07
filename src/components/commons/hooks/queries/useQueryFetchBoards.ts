import { type QueryResult, useQuery, gql } from "@apollo/client";
import type { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types";

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      createdAt
    }
  }
`;

export const useQueryFetchBoards = (
  activePage: number,
  searchKeyword: string
): QueryResult<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs> => {
  const result = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS, {
    variables: {
      page: activePage,
      search: searchKeyword,
    },
  });
  return result;
};
