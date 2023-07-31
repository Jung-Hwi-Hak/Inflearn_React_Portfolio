import { memo } from "react";
import * as S from "./SearchBar01.styles";
import type { ISearchbars01Props } from "./SearchBar01.types";
import { useSearchBar } from "../../hooks/customs/useSearchBar";
import { usePagination } from "../../hooks/customs/usePagination";

function SearchBar01(props: ISearchbars01Props): JSX.Element {
  const { setActivePage, setStartPage } = usePagination({
    refetch: props.refetch,
    count: props.dataBoardsCount,
  });

  const { onChangeKeyword, refetchEnterSearch } = useSearchBar({
    refetch: props.refetch,
    refetchCount: props.refetchBoardsCount,
    setActivePage,
    setStartPage,
  });

  return (
    <>
      <S.SearchInputWrapper>
        <S.SearchText>검색: </S.SearchText>
        <S.SearchInput
          placeholder="검색어를 입력해 주세요."
          onChange={onChangeKeyword}
          onKeyPress={refetchEnterSearch}
        />
      </S.SearchInputWrapper>
    </>
  );
}
export default memo(SearchBar01);
