import { useCallback, useEffect, useState } from "react";
import { useMoveToPage } from "../useMoveToPage";
interface IuseProductSidebarReturns {
  onClickScrollUp: () => void;

  onClickScrollDown: () => void;
  onClickMoveToPage: (path: string) => () => void;
  recentProduct: never[];
}
export const useProductSidebar = (): IuseProductSidebarReturns => {
  const { onClickMoveToPage } = useMoveToPage();
  const [recentProduct, setRecentProduct] = useState([]);
  const [marketListWrapper, setMarketListWrapper] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setMarketListWrapper(document.getElementById("marketListWrapper"));
  }, []);

  useEffect(() => {
    const recentProducts = JSON.parse(localStorage.getItem("recentProducts") ?? '["",""]');
    if (recentProducts.length < 2) recentProducts.push("");
    setRecentProduct(recentProducts);
  }, []);
  const onClickScrollUp = useCallback(() => {
    marketListWrapper?.scrollTo({ top: 0, behavior: "smooth" });
  }, [marketListWrapper]);

  const onClickScrollDown = useCallback(() => {
    marketListWrapper?.scrollTo({ top: marketListWrapper.scrollHeight, behavior: "smooth" });
  }, [marketListWrapper]);
  return {
    onClickScrollUp,
    onClickScrollDown,
    onClickMoveToPage,
    recentProduct,
  };
};
