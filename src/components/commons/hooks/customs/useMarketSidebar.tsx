import { useMoveToPage } from "./useMoveToPage";

export const useMarketSidebar = () => {
  const { onClickMoveToPage } = useMoveToPage();

  const onClickScrollUp = () => {
    // window.scrollTo({ top: 0, behavior: "smooth" });
    const marketListWrapper = document.getElementById("marketListWrapper");
    marketListWrapper?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onClickScrollDown = () => {
    const marketListWrapper = document.getElementById("marketListWrapper");
    marketListWrapper?.scrollTo({ top: marketListWrapper.scrollHeight, behavior: "smooth" });
  };

  return {
    onClickScrollUp,
    onClickScrollDown,
    onClickMoveToPage,
  };
};
