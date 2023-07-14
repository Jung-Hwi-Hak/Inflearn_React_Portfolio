import type { IQuery } from "../../../../../commons/types/generated/types";

export interface IBoardDetailBodyProps {
  data: Pick<IQuery, "fetchBoard"> | undefined;
}
