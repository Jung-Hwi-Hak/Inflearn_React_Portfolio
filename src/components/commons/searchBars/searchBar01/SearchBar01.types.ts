import type { ChangeEvent, KeyboardEvent } from "react";

export interface SearchBar01Props {
  onChangeKeyword: (event: ChangeEvent<HTMLInputElement>) => void;
  refetchEnterSearch: (event: KeyboardEvent<HTMLInputElement>) => void;
}
