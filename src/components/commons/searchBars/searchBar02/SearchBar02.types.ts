import type { Dispatch, SetStateAction } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";
import type { ApolloQueryResult } from "@apollo/client";

export interface ISearchbars02Props {
  refetch: (variables?: Partial<any> | undefined) => Promise<ApolloQueryResult<Pick<IQuery, any>>>;
  refetchCount?: (
    variables?: Partial<any> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, any>>>;
  searchKeyword: string;
  setSearchKeyword: Dispatch<SetStateAction<string>>;
  setActivePage?: Dispatch<SetStateAction<number>>;
  setStartPage?: Dispatch<SetStateAction<number>>;
  searchDate?: string[];
  setSearchDate?: Dispatch<SetStateAction<string[]>>;
}
