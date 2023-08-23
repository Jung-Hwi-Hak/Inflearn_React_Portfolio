import { useState, type MouseEvent, useCallback } from "react";
import * as S from "./NavigationItems.styles";
import type { INavigationItemsProps } from "./NavigationItems.types";
const NAVIGATION_LIST = [
  { name: "내 장터", page: "myProducts", img: "cart.svg" },
  { name: "내 포인트", page: "myPoint", img: "point.svg" },
  { name: "내 프로필", page: "myProfile", img: "profile.svg" },
];
export default function NavigationItems(props: INavigationItemsProps): JSX.Element {
  const [isFocus, setIsFocus] = useState(0);
  const changeFocusNavigation = useCallback(
    (index: number, name: string) =>
      (event: MouseEvent<HTMLLIElement>): void => {
        props.setPage(name);
        setIsFocus(index);
      },
    [props.setPage]
  );

  return (
    <>
      {NAVIGATION_LIST.map((el, index) => (
        <S.NavigationItem key={index} onClick={changeFocusNavigation(index, el.page)}>
          <S.NavigationImg
            src={`./images/${isFocus === index ? "active_" : "inactive_"}${el.img}`}
          />
          <S.NavigationText>{el.name}</S.NavigationText>
        </S.NavigationItem>
      ))}
    </>
  );
}
