import * as S from "./MyPageHeader01.styles";
import { memo, type MouseEvent } from "react";
import type { IMyPageHeaderProps } from "./MyPageHeader01.types";
function MyPageHeader01(props: IMyPageHeaderProps): JSX.Element {
  const changeFocus =
    (index: number) =>
    (event: MouseEvent<HTMLButtonElement>): void => {
      props.setIsFocus(index);
    };

  return (
    <S.Wrapper>
      {props.listNames.map((el, index) => (
        <S.Button key={index} onClick={changeFocus(index)} isFocus={props.isFocus === index}>
          {el}
        </S.Button>
      ))}
    </S.Wrapper>
  );
}
export default memo(MyPageHeader01);
