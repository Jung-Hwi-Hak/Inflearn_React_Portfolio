import styled from "@emotion/styled";

export interface ITextTokenProps {
  isMatch: boolean;
}

export const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  border-bottom: 3px solid black;
  border-top: 3px solid black;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-weight: 700;
  padding: 30px 0;
  margin-top: 30px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  & * {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const ColumnId = styled.div`
  width: 5%;
`;
export const ColumnTitle = styled.div`
  width: 40%;
  cursor: pointer;
`;
export const SoldOut = styled.div`
  width: 10%;
  font-weight: 700;
  color: gold;
`;

export const ColunmSellerName = styled.div`
  width: 10%;
`;

export const ColunmPrice = styled.div`
  width: 10%;
`;

export const ColunmDate = styled.div`
  width: 10%;
`;

export const SearchKeyword = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatch ? "tomato" : "black")};
`;
