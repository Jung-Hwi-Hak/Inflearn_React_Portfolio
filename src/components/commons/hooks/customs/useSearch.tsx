import { type ChangeEvent, useState } from "react";

interface IUseSearchReturn {
  keyword: string;
  onChangeKeyword: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const useSearch = (): IUseSearchReturn => {
  const [keyword, setKeyword] = useState("");

  const onChangeKeyword = (event: ChangeEvent<HTMLInputElement>): void => {
    setKeyword(event.target.value);
  };

  return {
    keyword,
    onChangeKeyword,
  };
};
