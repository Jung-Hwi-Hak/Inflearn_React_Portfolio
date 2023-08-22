import type { Dispatch, SetStateAction } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";
import type { ApolloQueryResult } from "@apollo/client";

export interface IPaginations01Props {
  refetch: (variables?: Partial<any> | undefined) => Promise<ApolloQueryResult<Pick<IQuery, any>>>;
  dataCount: number;
  startPage: number;
  setStartPage: Dispatch<SetStateAction<number>>;
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
}
