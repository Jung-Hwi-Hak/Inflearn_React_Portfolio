import type { ApolloQueryResult } from "@apollo/client";
import { useCallback, useMemo } from "react";
import type { Dispatch, MouseEvent, SetStateAction } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

interface IUsePaginationArgs {
  count: Pick<IQuery, any> | undefined;
  refetch: (variables?: Partial<any> | undefined) => Promise<ApolloQueryResult<Pick<IQuery, any>>>;
  startPage: number;
  setStartPage: Dispatch<SetStateAction<number>>;
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
}

interface IUsePaginationReturns {
  lastPage: number;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
}

export const usePagination = (args: IUsePaginationArgs): IUsePaginationReturns => {
  const lastPage = useMemo(
    () =>
      Math.ceil(
        (args.count?.fetchBoardsCount === 0 ? 10 : args.count?.fetchBoardsCount ?? 10) / 10
      ),
    [args.count]
  );

  const onClickPage = useCallback(
    (event: MouseEvent<HTMLSpanElement>): void => {
      const activePage = Number(event.currentTarget.id);
      args.setActivePage(activePage);
      void args.refetch({ page: activePage });
    },
    [args.refetch]
  );

  const onClickPrevPage = useCallback((): void => {
    if (args.startPage === 1) return;
    args.setStartPage((prevStartPage) => prevStartPage - 10);
    args.setActivePage((prevActivePage) => prevActivePage - 10);
    void args.refetch({ page: args.startPage - 10 });
  }, [args.refetch, args.startPage]);

  const onClickNextPage = useCallback((): void => {
    if (args.startPage + 10 > lastPage) return;
    args.setStartPage((prevStartPage) => prevStartPage + 10);
    args.setActivePage((prevActivePage) => prevActivePage + 10);
    void args.refetch({ page: args.startPage + 10 });
  }, [args.refetch, args.startPage, lastPage]);

  return {
    lastPage,
    onClickPage,
    onClickPrevPage,
    onClickNextPage,
  };
};
