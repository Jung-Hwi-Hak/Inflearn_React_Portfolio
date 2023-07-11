import { getDate } from "../../../../commons/libraries/utils";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import { useSearch } from "../../../commons/hooks/customs/useSearch";
import { useQueryFetchBoards } from "../../../commons/hooks/queries/useQueryFetchBoards";
import { useQueryFetchBoardsCount } from "../../../commons/hooks/queries/useQueryFetchBoardsCount";
import Paginations01 from "../../../commons/paginations/01/Paginations01.container";
import SearchBar01 from "../../../commons/searchBars/searchBar01/SearchBar01.container";
import * as S from "./BoardList.styles";
import { v4 as uuidv4 } from "uuid";

export default function BoardList(): JSX.Element {
  const SECRET = "@#$%";
  const { onClickMoveToPage } = useMoveToPage();
  const { keyword, onChangeKeyword } = useSearch();
  const { data, refetch } = useQueryFetchBoards();
  const { data: dataBoardsCount, refetch: refetchBoardsCount } =
    useQueryFetchBoardsCount();

  return (
    <S.Wrapper>
      <SearchBar01
        refetch={refetch}
        keyword={keyword}
        refetchBoardsCount={refetchBoardsCount}
        onChangeKeyword={onChangeKeyword}
      />
      <S.TableTop />
      <S.HeaderRow>
        <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
      </S.HeaderRow>
      {data?.fetchBoards.map((el) => (
        <S.Row key={el._id}>
          <S.ColumnBasic>
            {String(el._id).slice(-4).toUpperCase()}
          </S.ColumnBasic>
          <S.ColumnTitle
            id={el._id}
            onClick={onClickMoveToPage(`/boards/${el._id}`)}
          >
            {el.title
              .replaceAll(keyword, `${SECRET}${keyword}${SECRET}`)
              .split(SECRET)
              .map((el) => (
                <S.SearchKeyword key={uuidv4()} isMatch={el === keyword}>
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
        <Paginations01
          refetch={refetch}
          count={dataBoardsCount?.fetchBoardsCount}
        />
        <S.Button onClick={onClickMoveToPage("/boards/new")}>
          <S.PencilIcon src="/images/board/list/write.png" />
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
