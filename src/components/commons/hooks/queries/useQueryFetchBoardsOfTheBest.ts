import type { OperationVariables, QueryResult } from "@apollo/client";
import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_BEST_BOARDS = gql`
  query {
    fetchBoardsOfTheBest {
      _id
    }
  }
`;

export const useQueryFetchBoardsOfTheBest = (): QueryResult<
  Pick<IQuery, "fetchBoardsOfTheBest">,
  OperationVariables
> => {
  const result = useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(FETCH_BEST_BOARDS);

  return result;
};
