/**
 * 검색바에 관한 HOOKS
 */

import type { ApolloQueryResult } from "@apollo/client";
import { type Dispatch, type ChangeEvent, type KeyboardEvent, useState, useCallback } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";
import { useRecoilState } from "recoil";
import { searchKeywordState } from "../../../../commons/stores";

interface IUseSearchReturn {
  // keyword: string;
  onChangeKeyword: (event: ChangeEvent<HTMLInputElement>) => void;
  refetchEnterSearch: (event: KeyboardEvent<HTMLInputElement>) => void;
}

interface IUseSearchbarArgs {
  setActivePage: Dispatch<React.SetStateAction<number>>;
  setStartPage: Dispatch<React.SetStateAction<number>>;
  refetch: (variables?: Partial<any> | undefined) => Promise<ApolloQueryResult<Pick<IQuery, any>>>;
  refetchCount: (
    variables?: Partial<any> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, any>>>;
}

export const useSearchBar = (args: IUseSearchbarArgs): IUseSearchReturn => {
  const [keyword, setKeyword] = useState("");
  const [, setSearchKeyword] = useRecoilState(searchKeywordState);
  // ? Change Keyword
  const onChangeKeyword = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
    setKeyword(event.target.value);
  }, []);
  // ? Enter event - 검색
  const refetchEnterSearch = useCallback(
    (event: KeyboardEvent<HTMLInputElement>): void => {
      if (event.code !== "Enter") return;
      void args.refetch({ page: 1, search: keyword });
      void args.refetchCount({ search: keyword });
      args.setActivePage(1);
      args.setStartPage(1);
      setSearchKeyword(keyword);
    },
    [args, keyword, setSearchKeyword]
  );

  return {
    // keyword,
    // searchKeyword,
    onChangeKeyword,
    refetchEnterSearch,
  };
};
