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
import { getDate } from "../../../../commons/libraries/utils";

interface IUseSearchReturn {
  onChangeKeyword: (event: ChangeEvent<HTMLInputElement>) => void;
  refetchSearch: (event: KeyboardEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>) => void;
  onChangeDate: (data: any) => void;
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
  searchDate?: string[];
  setSearchDate?: Dispatch<React.SetStateAction<string[]>>;
}

export const useSearchBar01 = (args: IUseSearchbarArgs): IUseSearchReturn => {
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
        startDate: args.searchDate?.[0],
        endDate: args.searchDate?.[1],
      });
      if (args.refetchCount)
        void args.refetchCount({
          search: args.searchKeyword,
          startDate: args.searchDate?.[0],
          endDate: args.searchDate?.[1],
        });
      if (args.setActivePage) args.setActivePage(1);
      if (args.setStartPage) args.setStartPage(1);
    },
    [args, args.searchKeyword]
  );

  const onChangeDate = useCallback((data) => {
    if (!args.setSearchDate) return;
    console.log(data);
    if (data === null) {
      args.setSearchDate([""]);
      return;
    }
    const tempSearchDate = data.map((el: any) => getDate(el.$d));
    args.setSearchDate(tempSearchDate);
  }, []);

  return {
    onChangeKeyword,
    refetchSearch,
    onChangeDate,
  };
};
