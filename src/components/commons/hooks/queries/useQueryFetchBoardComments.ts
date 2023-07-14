import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!, $page: Int) {
    fetchBoardComments(boardId: $boardId, page: $page) {
      _id
      writer
      contents
      createdAt
      rating
    }
  }
`;

export const useQueryFetchBoardComments = (
  variables: IQueryFetchBoardCommentsArgs
) => {
  const query = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, { variables });

  return query;
};
