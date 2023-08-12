import type { IQuery } from "../../../../../commons/types/generated/types";

export interface IProductDetailBodyProps {
  data: Pick<IQuery, "fetchUseditem"> | undefined;
}
