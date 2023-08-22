import type { Dispatch, SetStateAction } from "react";

export interface INavigationItemsProps {
  setPage: Dispatch<SetStateAction<string>>;
}

export interface INavigationItemProps {
  isFocus: boolean;
}
