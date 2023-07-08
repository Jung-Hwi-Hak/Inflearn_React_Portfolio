import { useRouter } from "next/router";
import LayoutBannerUI from "./LayoutBanner.presenter";
import { useState } from "react";
import type { MouseEvent } from "react";

export default function LayoutBanner(): JSX.Element {
  const router = useRouter();
  const [drag, setDrag] = useState(false);

  const handleBeforeChange = (): void => {
    setDrag(true);
  };

  const handleAfterChange = (): void => {
    setDrag(false);
  };

  const onClickMoveToPage = (event: MouseEvent<HTMLDivElement>): void => {
    if (drag) return;

    const url = String(event.currentTarget.getAttribute("data-url"));
    void router.push(String(url));
  };
  return (
    <LayoutBannerUI
      handleBeforeChange={handleBeforeChange}
      handleAfterChange={handleAfterChange}
      onClickMoveToPage={onClickMoveToPage}
    />
  );
}
