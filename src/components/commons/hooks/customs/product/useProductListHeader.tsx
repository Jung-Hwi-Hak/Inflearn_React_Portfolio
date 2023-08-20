import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { productIsSoldState } from "../../../../../commons/stores";

interface IUseProductListHeaderReturn {
  onChangeIsSold: (boolean: boolean) => () => void;
  isSold: boolean;
}

export const useProductListHeader = (): IUseProductListHeaderReturn => {
  const [isSold, setIsSold] = useRecoilState(productIsSoldState);

  const onChangeIsSold = useCallback(
    (boolean: boolean) => () => {
      setIsSold(boolean);
    },
    []
  );
  return {
    onChangeIsSold,
    isSold,
  };
};
