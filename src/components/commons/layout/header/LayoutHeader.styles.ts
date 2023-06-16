import styled from "@emotion/styled";
import { Button } from "antd";

export const Wrapper = styled.div`
  height: 152px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

export const InnerLogo = styled.img`
  width: 5%;
  cursor: pointer;
`;
export const InnerButton = styled(Button)`
  margin: 10px;
`;
