import type { IQuery } from "../../../../../commons/types/generated/types";

export interface IBoardListBodyProps {
  // keyword: string;
  iSoldData: Pick<IQuery, any> | undefined;
  isFocus: boolean;
  // searchKeyword: string;
}

export interface ITextTokenProps {
  isMatched: boolean;
}
