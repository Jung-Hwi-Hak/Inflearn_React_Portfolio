import type { Dispatch, SetStateAction } from "react";

export interface IMyPageHeaderProps {
  // children: JSX.Element;
  isFocus: number;
  setIsFocus: Dispatch<SetStateAction<number>>;
  listNames: string[];
}
