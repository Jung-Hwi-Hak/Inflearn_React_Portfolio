import type { NextRouter } from "next/router";

export interface IBoardDetailFooterProps {
  onClickMoveToPage: (path: string) => () => void;
  router: NextRouter;
}
