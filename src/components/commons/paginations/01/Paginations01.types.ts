import { type MouseEvent } from "react";

export interface IPaginations01Props {
  startPage: number;
  lastPage: number;
  activePage: number;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
}
