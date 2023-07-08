import type { MouseEvent } from "react";

export interface LayoutBannerUIProps {
  handleBeforeChange: () => void;
  handleAfterChange: () => void;
  onClickMoveToPage: (event: MouseEvent<HTMLDivElement>) => void;
}
