import type { IQuery } from "../../../../../commons/types/generated/types";

export interface IBoardDetailHeaderProps {
  data: Pick<IQuery, "fetchBoard"> | undefined;
}
