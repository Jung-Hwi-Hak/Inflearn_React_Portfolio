import styled from "@emotion/styled";
// import type { ITextTokenProps } from "../body/MyProductsBody.types";

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

export const PencilIcon = styled.img``;

export const Button = styled.button`
  width: 171px;
  height: 52px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f5f2fc;
  }
`;

// export const SearchKeyword = styled.span`
//   color: ${(props: ITextTokenProps) => (props.isMatch ? "tomato" : "black")};
// `;
