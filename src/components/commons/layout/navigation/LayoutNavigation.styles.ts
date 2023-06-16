import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #5729ff;
  font-size: 18px;
  color: #fff;
`;

export const MenuItem = styled.div`
  margin: 0px 60px;
  cursor: pointer;

  :hover {
    color: orchid;
  }
`;
