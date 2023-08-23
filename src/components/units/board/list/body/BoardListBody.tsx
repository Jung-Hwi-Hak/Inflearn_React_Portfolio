// import * as S from "./BoardListBody.styles";
import * as S from "../../../../commons/emotions/commonsListStyle";
import { v4 as uuidv4 } from "uuid";
import type { IBoardListBodyProps } from "./BoardListBody.types";
import { getDate } from "../../../../../commons/libraries/utils";
import { useMoveToPage } from "../../../../commons/hooks/customs/useMoveToPage";
import { memo } from "react";
import type { IBoard } from "../../../../../commons/types/generated/types";

const SECRET = "@#$%";
function BoardListBody(props: IBoardListBodyProps): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      <S.HeaderRow>
        <S.ColumnId>ID</S.ColumnId>
        <S.ColumnTitle>제목</S.ColumnTitle>
        <S.ColunmSellerName>작성자</S.ColunmSellerName>
        <S.ColunmDate>날짜</S.ColunmDate>
      </S.HeaderRow>
      {(props.data?.fetchBoards ?? new Array(10).fill(1)).map((el: IBoard, index: number) => (
        <S.Row key={el._id ?? index}>
          <S.ColumnId>{String(el._id).slice(-4).toUpperCase()}</S.ColumnId>
          <S.ColumnTitle id={el._id} onClick={onClickMoveToPage(`/boards/${el._id}`)}>
            {(el.title ?? "")
              .replaceAll(props.searchKeyword, `${SECRET}${props.searchKeyword}${SECRET}`)
              .split(SECRET)
              .map((el) => (
                <S.SearchKeyword key={uuidv4()} isMatch={el === props.searchKeyword}>
                  {el}
                </S.SearchKeyword>
              ))}
          </S.ColumnTitle>
          <S.ColunmSellerName>{el.writer}</S.ColunmSellerName>
          <S.ColunmDate>{getDate(el.createdAt)}</S.ColunmDate>
        </S.Row>
      ))}
    </>
  );
}
export default memo(BoardListBody);
