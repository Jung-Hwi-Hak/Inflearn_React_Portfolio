import type { ChangeEvent, KeyboardEvent } from "react";

export interface SearchBar01Props {
  onChangeKeyword: (event: ChangeEvent<HTMLInputElement>) => void;
  refetchEnterSearch: (event: KeyboardEvent<HTMLInputElement>) => void;
}

export interface ISearchbars01Props {
  onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
}
