import type { IQuery } from "../../../../../commons/types/generated/types";

export interface IBoardDetailFooterProps {
  onClickMoveToPage: (path: string) => () => void;
  data: Pick<IQuery, "fetchBoard"> | undefined;
}
