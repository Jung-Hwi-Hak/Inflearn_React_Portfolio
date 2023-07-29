import { useRouter } from "next/router";
import { useCallback } from "react";

interface IUseMoveToPageReturn {
  onClickMoveToPage: (path: string) => () => void;
  onClickMoveToPageToggle: (path: string, boolean: boolean) => () => void;
}

export const useMoveToPage = (): IUseMoveToPageReturn => {
  const router = useRouter();

  const onClickMoveToPage = useCallback(
    (path: string) => () => {
      void router.push(path);
    },
    []
  );

  const onClickMoveToPageToggle = useCallback(
    (path: string, boolean: boolean) => () => {
      if (boolean) return;
      void router.push(String(path));
    },
    []
  );
  return {
    onClickMoveToPage,
    onClickMoveToPageToggle,
  };
};
