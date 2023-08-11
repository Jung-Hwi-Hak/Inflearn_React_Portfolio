import { memo } from "react";
import * as S from "./SearchBar01.styles";
import type { ISearchbars01Props } from "./SearchBar01.types";
import { useSearchBar } from "../../hooks/customs/useSearchBar";

function SearchBar01(props: ISearchbars01Props): JSX.Element {
  const { onChangeKeyword, refetchEnterSearch } = useSearchBar({
    searchKeyword: props.searchKeyword,
    refetch: props.refetch,
    refetchCount: props.refetchCount,
    setActivePage: props.setActivePage ?? undefined,
    setStartPage: props.setStartPage ?? undefined,
    setSearchKeyword: props.setSearchKeyword,
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
