import type { IQuery } from "../../../../../commons/types/generated/types";

export interface IBestBoardListProps {
  bestBoardData: Pick<IQuery, "fetchBoardsOfTheBest"> | undefined;
  onClickMoveToPage: (path: string) => () => void;
}
