import styled from "@emotion/styled";
import type { ITextTokenProps } from "../MarketList.types";

export const Wrapper = styled.section`
  background-color: red;
  overflow: hidden scroll;
  width: 100%;
  height: 1000px;
  scroll-behavior: auto;
`;

export const ItemCard = styled.div`
  display: flex;
  flex-direction: row;
  height: 200px;
  line-height: 52px;
  border-bottom: 1px solid gray;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const ItemImage = styled.img`
  width: 350px;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
`;

export const SearchKeyword = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatch ? "tomato" : "black")};
`;
