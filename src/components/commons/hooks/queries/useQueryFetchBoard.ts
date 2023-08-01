import { type QueryResult, gql, useQuery } from "@apollo/client";
import type { IQuery, IQueryFetchBoardArgs } from "../../../../commons/types/generated/types";
import { useQueryIdChecker } from "../customs/useQueryIdChecker";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      boardAddress {
        zipcode
        address
        addressDetail
      }
      createdAt
      images
    }
  }
`;

export const useQueryFetchBoard = (): QueryResult<
  Pick<IQuery, "fetchBoard">,
  IQueryFetchBoardArgs
> => {
  const { id: boardId } = useQueryIdChecker("boardId");
  const result = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: { boardId },
  });

  return result;
};
