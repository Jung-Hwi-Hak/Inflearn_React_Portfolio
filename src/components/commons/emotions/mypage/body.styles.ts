import styled from "@emotion/styled";

interface IColumnHistory {
  status?: boolean;
}
interface IColumnTitle {
  status?: boolean;
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
  color: black;
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
export const HeaderColumnDate = styled.div`
  width: 10%;
`;
export const HeaderColumnTitle = styled.div`
  width: 30%;
`;
export const HeaderColumnProduct = styled.div`
  width: 30%;
`;
export const HeaderColumnChargeID = styled.div`
  width: 30%;
`;
export const HeaderColumnHistory = styled.div`
  width: 20%;
`;
export const HeaderColumnAmount = styled.div`
  width: 20%;
`;

export const HeaderColumnBalance = styled.div`
  width: 20%;
`;

export const ColumnDate = styled.div`
  width: 10%;
`;
export const ColumnTitle = styled.div`
  color: ${(props: IColumnTitle) => (props.status ? "tomato" : "gold")};
  width: 30%;
`;
export const ColumnChargeID = styled.div`
  width: 30%;
`;
export const ColumnProduct = styled.div`
  width: 30%;
`;
export const ColumnHistory = styled.div`
  width: 20%;
  color: ${(props: IColumnHistory) => (props.status ? "tomato" : "gold")};
`;
export const ColumnAmount = styled.div`
  width: 20%;
`;

export const ColumnBalance = styled.div`
  width: 20%;
`;

export const PaginationWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;
