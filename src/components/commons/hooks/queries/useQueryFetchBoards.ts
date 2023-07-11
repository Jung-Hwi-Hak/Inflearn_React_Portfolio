import { type QueryResult, useQuery, gql } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

// graphql fragment 을 이용해 변경해서 사용할수 있음.
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
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
  // ? 게시글 조회 API
  const result = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  return result;
};
