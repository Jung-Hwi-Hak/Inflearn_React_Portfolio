/**
 * 검색바에 관한 HOOKS
 */

import type { ApolloQueryResult } from "@apollo/client";
import { type Dispatch, type ChangeEvent, type KeyboardEvent, useCallback } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";
import * as _ from "lodash";

interface IUseSearchReturn {
  onChangeKeyword: (event: ChangeEvent<HTMLInputElement>) => void;
  refetchEnterSearch: (event: KeyboardEvent<HTMLInputElement>) => void;
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

export const useSearchBar = (args: IUseSearchbarArgs): IUseSearchReturn => {
  const onChangeKeyword = useCallback(
    _.debounce((event: ChangeEvent<HTMLInputElement>): void => {
      args.setSearchKeyword(event.target.value);
    }, 150),
    []
  );

  const refetchEnterSearch = useCallback(
    (event: KeyboardEvent<HTMLInputElement>): void => {
      if (event.code !== "Enter") return;
      void args.refetch({ page: 1, search: args.searchKeyword });
      if (args.refetchCount) void args.refetchCount({ search: args.searchKeyword });
      if (args.setActivePage) args.setActivePage(1);
      if (args.setStartPage) args.setStartPage(1);
    },
    [args, args.searchKeyword]
  );

  return {
    onChangeKeyword,
    refetchEnterSearch,
  };
};
