import React from "react";
import type { DogOpenapiListUIProps } from "./DogOpenapiList.types";
import * as S from "./DogOpenapiList.styles";

export default function DogOpenapiListUI(
  props: DogOpenapiListUIProps
): JSX.Element {
  return (
    <S.Wrapper>
      {props.dogImgUrls.map((el, index) => (
        <React.Fragment key={index + 1}>
          <S.DogImg key={index + 1} src={el} />
          <S.DogImgBr />
        </React.Fragment>
      ))}
    </S.Wrapper>
  );
}
