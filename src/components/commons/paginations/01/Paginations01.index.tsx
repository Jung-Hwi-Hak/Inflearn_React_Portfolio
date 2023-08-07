import type { IPaginations01Props } from "./Paginations01.types";
import * as S from "./Paginations01.styles";
import { memo } from "react";
import { usePagination } from "../../hooks/customs/usePagination";

function Paginations01(props: IPaginations01Props): JSX.Element {
  const paginationArgs = usePagination({
    refetch: props.refetch,
    count: props.dataBoardsCount,
  });
  console.log(paginationArgs.startPage, paginationArgs.lastPage);

  return (
    <div>
      <S.Page onClick={paginationArgs.onClickPrevPage}>{`<`}</S.Page>
      {new Array(10).fill(1).map(
        (_, index) =>
          paginationArgs.startPage + index <= paginationArgs.lastPage && (
            <S.Page
              key={paginationArgs.startPage + index}
              id={String(paginationArgs.startPage + index)}
              onClick={paginationArgs.onClickPage}
              isActive={paginationArgs.startPage + index === paginationArgs.activePage}
            >
              {paginationArgs.startPage + index}
            </S.Page>
          )
      )}
      <S.Page onClick={paginationArgs.onClickNextPage}>{`>`}</S.Page>
    </div>
  );
}

export default memo(Paginations01);
