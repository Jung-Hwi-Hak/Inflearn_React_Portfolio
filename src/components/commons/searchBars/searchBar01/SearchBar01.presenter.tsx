import * as S from "./SearchBar01.styles";
import type { SearchBar01UIProps } from "./SearchBar01.types";

export default function SearchBar01UI(props: SearchBar01UIProps): JSX.Element {
  return (
    <>
      <S.SearchInputWrapper>
        <S.SearchText>검색: </S.SearchText>
        <S.SearchInput
          type="text"
          placeholder="검색"
          onChange={props.onChangeKeyword}
          onKeyPress={props.onSearchKeyword}
        />
      </S.SearchInputWrapper>
    </>
  );
}
