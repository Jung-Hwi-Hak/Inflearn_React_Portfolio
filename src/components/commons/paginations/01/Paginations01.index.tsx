import type { IPaginations01Props } from "./Paginations01.types";
import * as S from "./Paginations01.styles";
import { memo } from "react";
import { usePagination } from "../../hooks/customs/usePagination";

function Paginations01(props: IPaginations01Props): JSX.Element {
  const paginationArgs = usePagination({
    refetch: props.refetch,
    count: props.dataCount,
    startPage: props.startPage,
    setStartPage: props.setStartPage,
    activePage: props.activePage,
    setActivePage: props.setActivePage,
  });

  return (
    <div>
      <S.Page onClick={paginationArgs.onClickPrevPage}>{`<`}</S.Page>
      {new Array(10).fill(1).map(
        (_, index) =>
          Number(props.startPage) + index <= paginationArgs.lastPage && (
            <S.Page
              key={Number(props.startPage) + index}
              id={String(Number(props.startPage) + index)}
              onClick={paginationArgs.onClickPage}
              isActive={Number(props.startPage) + index === props.activePage}
            >
              {Number(props.startPage) + index}
            </S.Page>
          )
      )}
      <S.Page onClick={paginationArgs.onClickNextPage}>{`>`}</S.Page>
    </div>
  );
}

export default memo(Paginations01);
