import { memo } from "react";
import * as S from "./SearchBar02.styles";
import type { ISearchbars02Props } from "./SearchBar02.types";
import { useSearchBar02 } from "../../hooks/customs/useSearchBar02";

function SearchBar02(props: ISearchbars02Props): JSX.Element {
  const { onChangeKeyword, refetchSearch } = useSearchBar02({
    searchKeyword: props.searchKeyword,
    refetch: props.refetch,
    refetchCount: props.refetchCount,
    setActivePage: props.setActivePage ?? undefined,
    setStartPage: props.setStartPage ?? undefined,
    setSearchKeyword: props.setSearchKeyword,
  });

  return (
    <S.Wrapper>
      <S.SearchLabel htmlFor="search-input-text">
        <S.SearchInputWrapper>
          <S.SearchIcon src="./images/search.svg" />
          <S.SearchInput
            id="search-input-text"
            placeholder="제목을  입력해 주세요."
            onChange={onChangeKeyword}
            onKeyPress={refetchSearch}
          />
        </S.SearchInputWrapper>
      </S.SearchLabel>

      <S.Button onClick={refetchSearch}>검색하기</S.Button>
    </S.Wrapper>
  );
}
export default memo(SearchBar02);
