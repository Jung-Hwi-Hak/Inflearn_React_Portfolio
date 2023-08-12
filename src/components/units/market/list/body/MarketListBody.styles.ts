import styled from "@emotion/styled";
// import type { ITextTokenProps } from "../MarketList.types";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

export const Section = styled.section`
  overflow: hidden scroll;
  width: 70%;
  height: 600px;
  scroll-behavior: auto;

  ::-webkit-scrollbar {
    width: 6px;
    background-color: #f2f2f2;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: tomato;
    border-radius: 10px;
  }
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
  width: 15%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 50%;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
`;

// export const SearchKeyword = styled.span`
//   color: ${(props: ITextTokenProps) => (props.isMatch ? "tomato" : "black")};
// `;
