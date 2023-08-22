import styled from "@emotion/styled";
import type { ITextTokenProps } from "../BoardList.types";

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;
export const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;
  justify-content: space-evenly;
  font-weight: 700;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;
  justify-content: space-evenly;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  & * {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const ColumnHeaderBasic = styled.div`
  width: 20%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 20%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 20%;
  text-align: center;
`;
export const ColumnTitle = styled.div`
  width: 20%;
  text-align: center;
  cursor: pointer;
`;

export const SearchKeyword = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatch ? "tomato" : "black")};
`;
