import { useRouter } from "next/router";
import { useEffect } from "react";

export const useLayoutNavigation = () => {
  const router = useRouter();

  useEffect(() => {
    const changeFocusNavigation = (): void => {
      const path = router.asPath.split("/")[1];
      if (path === null) return;
      const navigation = document.getElementById(`/${path}`);
      const navigationFocus = document.querySelectorAll(".focus");
      navigationFocus.forEach((el) => {
        el.classList.remove("focus");
      });
      navigation?.classList.add("focus");
    };
    changeFocusNavigation();
  }, [router.asPath]);
};
