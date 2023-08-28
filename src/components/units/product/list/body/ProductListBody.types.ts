import type { IQuery } from "../../../../../commons/types/generated/types";

export interface IProductListBodyProps {
  onLoadMore: () => void;
  data: Pick<IQuery, "fetchUseditems"> | undefined;
}

export interface ITextTokenProps {
  isMatched: boolean;
}
