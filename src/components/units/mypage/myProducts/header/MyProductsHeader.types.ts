import type { Dispatch, SetStateAction } from "react";

export interface IMyPageHeaderProps {
  // children: JSX.Element;
  isFocus: boolean;
  setIsFocus: Dispatch<SetStateAction<boolean>>;
}
