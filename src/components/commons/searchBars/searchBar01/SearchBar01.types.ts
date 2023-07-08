import type { ApolloQueryResult } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import type { ChangeEvent, KeyboardEvent } from "react";

export interface SearchBar01Props {
  keyword: string;

  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetchBoardsCount: (
    variables: Partial<IQueryFetchBoardsCountArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
  onChangeKeyword: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface SearchBar01UIProps {
  onChangeKeyword: (event: ChangeEvent<HTMLInputElement>) => void;
  onSearchKeyword: (event: KeyboardEvent<HTMLInputElement>) => void;
}
