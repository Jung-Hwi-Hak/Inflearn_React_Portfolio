import styled from "@emotion/styled";

export const Wrapper = styled.div``;

export const DogImg = styled.img`
  border-radius: 50%;
  width: 300px;
  height: 300px;
`;

export const DogImgBr = styled.br`
  display: none;

  &:nth-of-type(3n) {
    display: block;
  }
`;
