import type { IQuery } from "../../../../../commons/types/generated/types";

export interface IBoardListBodyProps {
  data: Pick<IQuery, any> | undefined;
  isFocus: number;
}
