import { useState, type MouseEvent, useCallback } from "react";
import * as S from "./NavigationItems.styles";
import type { INavigationItemsProps } from "./NavigationItems.types";
const NAVIGATION_LIST = [
  { name: "내 장터", page: "myProducts" },
  { name: "내 포인트", page: "myPoint" },
  { name: "내 프로필", page: "myProfile" },
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
          <S.NavigationImg src="./images/point.svg" isFocus={isFocus === index} />
          <S.NavigationText>{el.name}</S.NavigationText>
        </S.NavigationItem>
      ))}
    </>
  );
}
