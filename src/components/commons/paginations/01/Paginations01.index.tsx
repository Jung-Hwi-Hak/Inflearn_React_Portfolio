import type { IPaginations01Props } from "./Paginations01.types";
import * as S from "./Paginations01.styles";
import { memo } from "react";

function Paginations01(props: IPaginations01Props): JSX.Element {
  return (
    <div>
      <S.Page onClick={props.onClickPrevPage}>{`<`}</S.Page>
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <S.Page
              key={props.startPage + index}
              id={String(props.startPage + index)}
              onClick={props.onClickPage}
              isActive={props.startPage + index === props.activePage}
            >
              {props.startPage + index}
            </S.Page>
          )
      )}
      <S.Page onClick={props.onClickNextPage}>{`>`}</S.Page>
    </div>
  );
}

export default memo(Paginations01);
