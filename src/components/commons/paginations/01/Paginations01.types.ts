import type { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types";
import type { ApolloQueryResult } from "@apollo/client";

export interface IPaginations01Props {
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  dataBoardsCount: number | undefined;
}
