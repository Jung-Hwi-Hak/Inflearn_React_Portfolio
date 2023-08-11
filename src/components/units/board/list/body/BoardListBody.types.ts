import type { IQuery } from "../../../../../commons/types/generated/types";

export interface IBoardListBodyProps {
  // keyword: string;
  data?: Pick<IQuery, "fetchBoards">;
  searchKeyword: string;
}

export interface ITextTokenProps {
  isMatched: boolean;
}
