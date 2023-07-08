import { getDate } from "../../../../commons/libraries/utils";
import Paginations01 from "../../../commons/paginations/01/Paginations01.container";
import SearchBar01 from "../../../commons/searchBars/searchBar01/SearchBar01.container";
import * as S from "./BoardList.styles";
import type { IBoardListUIProps } from "./BoardList.types";
import { v4 as uuidv4 } from "uuid";

export default function BoardListUI(props: IBoardListUIProps): JSX.Element {
  const SECRET = "@#$%";
  return (
    <S.Wrapper>
      <SearchBar01
        refetch={props.refetch}
        keyword={props.keyword}
        refetchBoardsCount={props.refetchBoardsCount}
        onChangeKeyword={props.onChangeKeyword}
      />
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
          <S.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
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
      <S.Footer>
        <Paginations01 refetch={props.refetch} count={props.count} />
        <S.Button onClick={props.onClickMoveToBoardNew}>
          <S.PencilIcon src="/images/board/list/write.png" />
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
