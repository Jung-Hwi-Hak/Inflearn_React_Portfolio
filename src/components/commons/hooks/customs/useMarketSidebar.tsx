import { useEffect, useState } from "react";
import { useMoveToPage } from "./useMoveToPage";

export const useMarketSidebar = () => {
  const { onClickMoveToPage } = useMoveToPage();
  const [recentProduct, setRecentProduct] = useState([]);
  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") ?? "[]");
    setRecentProduct(baskets);
  }, []);
  const onClickScrollUp = () => {
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
    recentProduct,
  };
};
