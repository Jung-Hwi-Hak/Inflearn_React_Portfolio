/**
 * 검색바에 관한 HOOKS
 */

import type { ApolloQueryResult } from "@apollo/client";
import {
  type Dispatch,
  type ChangeEvent,
  type KeyboardEvent,
  useCallback,
  type MouseEvent,
} from "react";
import type { IQuery } from "../../../../commons/types/generated/types";
import * as _ from "lodash";

interface IUseSearchReturn {
  onChangeKeyword: (event: ChangeEvent<HTMLInputElement>) => void;
  refetchSearch: (event: KeyboardEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>) => void;
}

interface IUseSearchbarArgs {
  setActivePage?: Dispatch<React.SetStateAction<number>>;
  setStartPage?: Dispatch<React.SetStateAction<number>>;
  setSearchKeyword: Dispatch<React.SetStateAction<string>>;
  searchKeyword: string;
  refetch: (variables?: Partial<any> | undefined) => Promise<ApolloQueryResult<Pick<IQuery, any>>>;
  refetchCount?: (
    variables?: Partial<any> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, any>>>;
}

export const useSearchBar02 = (args: IUseSearchbarArgs): IUseSearchReturn => {
  const onChangeKeyword = useCallback(
    _.debounce((event: ChangeEvent<HTMLInputElement>): void => {
      args.setSearchKeyword(event.target.value);
    }, 150),
    []
  );

  const refetchSearch = useCallback(
    (event: KeyboardEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>): void => {
      if ("code" in event && event.code !== "Enter") return;
      void args.refetch({
        page: 1,
        search: args.searchKeyword,
      });
      if (args.refetchCount)
        void args.refetchCount({
          search: args.searchKeyword,
        });
      if (args.setActivePage) args.setActivePage(1);
      if (args.setStartPage) args.setStartPage(1);
    },
    [args, args.searchKeyword]
  );

  return {
    onChangeKeyword,
    refetchSearch,
  };
};
