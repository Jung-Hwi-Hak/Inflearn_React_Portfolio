import { useRouter } from "next/router";
import LayoutNavigationUI from "./LayoutNavigation.presenter";
import { useEffect, type MouseEvent } from "react";

export default function LayoutNavigation(): JSX.Element {
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

  const onClickMoveToMenu = (event: MouseEvent<HTMLDivElement>): void => {
    void router.push(event.currentTarget.id);
  };

  return <LayoutNavigationUI onClickMoveToMenu={onClickMoveToMenu} />;
}
