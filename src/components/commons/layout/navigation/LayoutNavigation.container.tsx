import { useRouter } from "next/router";
import LayoutNavigationUI from "./LayoutNavigation.presenter";
import { useEffect, type MouseEvent } from "react";

export default function LayoutNavigation(): JSX.Element {
  const router = useRouter();
  useEffect(() => {
    const navigation = document.getElementById(router.asPath);
    navigation?.classList.add("focus");
  }, []);
  const onClickMoveToMenu = (event: MouseEvent<HTMLDivElement>): void => {
    const navigation = document.querySelectorAll(".focus");
    navigation.forEach((el) => {
      el.classList.remove("focus");
    });
    event.currentTarget.classList.add("focus");
    void router.push(event.currentTarget.id);
  };

  return <LayoutNavigationUI onClickMoveToMenu={onClickMoveToMenu} />;
}
