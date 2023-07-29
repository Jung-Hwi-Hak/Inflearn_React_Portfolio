import * as S from "./BoardListBody.styles";
import { v4 as uuidv4 } from "uuid";
import type { IBoardListBodyProps } from "./BoardListBody.types";
import { getDate } from "../../../../../commons/libraries/utils";
import { useMoveToPage } from "../../../../commons/hooks/customs/useMoveToPage";
import { memo } from "react";
import { useRecoilState } from "recoil";
import { searchKeywordState } from "../../../../../commons/stores";
import type { IBoard } from "../../../../../commons/types/generated/types";

const SECRET = "@#$%";
function BoardListBody(props: IBoardListBodyProps): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const [searchKeyword] = useRecoilState(searchKeywordState);
  return (
    <>
      <S.TableTop />
      <S.HeaderRow>
        <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
      </S.HeaderRow>
      {(props.data?.fetchBoards ?? new Array(10).fill(1)).map((el: IBoard, index: number) => (
        <S.Row key={el._id ?? index}>
          <S.ColumnBasic>{String(el._id).slice(-4).toUpperCase()}</S.ColumnBasic>
          <S.ColumnTitle id={el._id} onClick={onClickMoveToPage(`/boards/${el._id}`)}>
            {(el.title ?? "")
              .replaceAll(searchKeyword, `${SECRET}${searchKeyword}${SECRET}`)
              .split(SECRET)
              .map((el) => (
                <S.SearchKeyword key={uuidv4()} isMatch={el === searchKeyword}>
                  {el}
                </S.SearchKeyword>
              ))}
          </S.ColumnTitle>
          <S.ColumnBasic>{el.writer}</S.ColumnBasic>
          <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
        </S.Row>
      ))}
      <S.TableBottom />
    </>
  );
}
export default memo(BoardListBody);
