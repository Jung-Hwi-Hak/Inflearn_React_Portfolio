import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

export const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;
`;

export const TableColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const TableColumnHeaderContents = styled.div`
  width: 70%;
  text-align: center;
`;

export const TableColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const TableColumnContents = styled.div`
  width: 70%;
  text-align: center;
`;

export const PencilIcon = styled.img``;

export const Button = styled.button`
  margin-top: 40px;
  width: 171px;
  height: 52px;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid #000;
  cursor: pointer;

  :hover {
    background-color: #f5f2fc;
  }
`;
