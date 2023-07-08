import type { KeyboardEvent } from "react";
import SearchBar01UI from "./SearchBar01.presenter";
import type { SearchBar01Props } from "./SearchBar01.types";

export default function SearchBar01(props: SearchBar01Props): JSX.Element {
  const onSearchKeyword = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.code !== "Enter") return;
    void props.refetch({ page: 1, search: props.keyword });
    void props.refetchBoardsCount({ search: props.keyword });
  };
  return (
    <SearchBar01UI
      onChangeKeyword={props.onChangeKeyword}
      onSearchKeyword={onSearchKeyword}
    />
  );
}
