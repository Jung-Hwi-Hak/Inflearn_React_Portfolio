import type { IQuery } from "../../../../../commons/types/generated/types";

export interface IProductListBodyProps {
  data: Pick<IQuery, any> | undefined;
  isFocus: number;
}
