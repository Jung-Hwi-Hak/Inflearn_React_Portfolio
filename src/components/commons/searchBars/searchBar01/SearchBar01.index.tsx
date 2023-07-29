import { memo } from "react";
import * as S from "./SearchBar01.styles";
import type { SearchBar01Props } from "./SearchBar01.types";

function SearchBar01(props: SearchBar01Props): JSX.Element {
  return (
    <>
      <S.SearchInputWrapper>
        <S.SearchText>검색: </S.SearchText>
        <S.SearchInput
          placeholder="검색어를 입력해 주세요."
          onChange={props.onChangeKeyword}
          onKeyPress={props.refetchEnterSearch}
        />
      </S.SearchInputWrapper>
    </>
  );
}
export default memo(SearchBar01);
