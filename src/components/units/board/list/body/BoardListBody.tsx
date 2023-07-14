import * as S from "./BoardListBody.styles";
import { v4 as uuidv4 } from "uuid";
import type { IBoardListBodyProps } from "./BoardListBody.types";
import { getDate } from "../../../../../commons/libraries/utils";
import { useMoveToPage } from "../../../../commons/hooks/customs/useMoveToPage";

const SECRET = "@#$%";

export default function BoardListBody(props: IBoardListBodyProps): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <>
      <S.TableTop />
      <S.HeaderRow>
        <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
      </S.HeaderRow>
      {props.data?.fetchBoards.map((el) => (
        <S.Row key={el._id}>
          <S.ColumnBasic>
            {String(el._id).slice(-4).toUpperCase()}
          </S.ColumnBasic>
          <S.ColumnTitle
            id={el._id}
            onClick={onClickMoveToPage(`/boards/${el._id}`)}
          >
            {el.title
              .replaceAll(props.keyword, `${SECRET}${props.keyword}${SECRET}`)
              .split(SECRET)
              .map((el) => (
                <S.SearchKeyword key={uuidv4()} isMatch={el === props.keyword}>
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
