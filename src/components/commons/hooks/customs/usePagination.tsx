import type { ApolloQueryResult } from "@apollo/client";
import { useState } from "react";
import type { MouseEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

interface IUsePaginationArgs {
  count: number | undefined;
  refetch: (
    variables?: Partial<any> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, any>>>;
}

export const usePagination = (args: IUsePaginationArgs): any => {
  const [startPage, setStartPage] = useState(1);

  const [activePage, setActivePage] = useState(1);

  // ? 게시글 마지막 페이지
  const lastPage = Math.ceil((args.count ?? 10) / 10);
  // const lastPage = args.count != null ? Math.ceil(args.count / 10) : 0;

  // ? 페이지 클릭 함수
  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    const activePage = Number(event.currentTarget.id);
    setActivePage(activePage);
    void args.refetch({ page: activePage });
  };

  // ? 이전 페이지 클릭 함수
  const onClickPrevPage = (): void => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    setActivePage(startPage - 10);
    void args.refetch({ page: startPage - 10 });
  };

  // ? 다음 페이지 클릭 함수
  const onClickNextPage = (): void => {
    if (startPage + 10 > lastPage) return;
    setStartPage(startPage + 10);
    setActivePage(startPage + 10);
    void args.refetch({ page: startPage + 10 });
  };

  return {
    startPage,
    activePage,
    setActivePage,
    setStartPage,
    lastPage,
    onClickPage,
    onClickPrevPage,
    onClickNextPage,
  };
};
