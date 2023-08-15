import type { IQuery } from "../../../../../commons/types/generated/types";

export interface IProductDetailFooterProps {
  onClickMoveToPage: (path: string) => () => void;
  data: Pick<IQuery, "fetchUseditem"> | undefined;
}
