import * as S from "./MyProductsHeader.styles";
import { type MouseEvent } from "react";
import type { IMyPageHeaderProps } from "./MyProductsHeader.types";
export default function MyPageHeader(props: IMyPageHeaderProps): JSX.Element {
  const changeFocus = (event: MouseEvent<HTMLButtonElement>): void => {
    props.setIsFocus((prev) => !prev);
  };

  return (
    <S.Wrapper>
      <S.Button onClick={changeFocus} isFocus={!props.isFocus}>
        나의 상품
      </S.Button>
      <S.Line />
      <S.Button onClick={changeFocus} isFocus={props.isFocus}>
        마이찜
      </S.Button>
      {/* {props.children} */}
    </S.Wrapper>
  );
}
