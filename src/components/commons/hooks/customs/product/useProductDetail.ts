import { useEffect } from "react";
import type { IQuery } from "../../../../../commons/types/generated/types";
import { useQueryIdChecker } from "../useQueryIdChecker";
import { useQueryFetchUsedItem } from "../../queries/useQueryFetchUseditem";

interface IUseProductDetailReturns {
  data: Pick<IQuery, "fetchUseditem"> | undefined;
}

export const useProductDetail = (): IUseProductDetailReturns => {
  const { id } = useQueryIdChecker("productId");
  const { data } = useQueryFetchUsedItem(id);

  useEffect(() => {
    const recentProducts = JSON.parse(localStorage.getItem("recentProducts") ?? "[]");
    const temp = recentProducts.filter(
      (el: Pick<IQuery, "fetchUseditem">) => el.fetchUseditem?._id === id
    );
    if (temp.length > 0) {
      return;
    }
    if (data === undefined) return;

    if (recentProducts.length === 2) {
      recentProducts.shift();
    }

    recentProducts.push(data);

    localStorage.setItem("recentProducts", JSON.stringify(recentProducts));
  }, [data]);

  return {
    data,
  };
};
