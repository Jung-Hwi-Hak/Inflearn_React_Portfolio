import type { ApolloQueryResult } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import { type MouseEvent } from "react";

export interface IPaginations01Props {
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  count?: number;
}

export interface IPagination01UIProps {
  startPage: number;
  lastPage: number;
  activePage: number;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
}
