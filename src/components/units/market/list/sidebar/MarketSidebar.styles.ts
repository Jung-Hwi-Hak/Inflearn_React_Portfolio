import styled from "@emotion/styled";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";

export const SidebarWrapper = styled.div`
  position: fixed;
  right: 5%;
  top: 50%;
  width: 200px;
  height: 500px;
  background-color: tomato;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ScrollUpButton = styled(CaretUpOutlined)`
  width: 100%;
  padding: 15px;
  background-color: red;
`;

export const ScrollDownButton = styled(CaretDownOutlined)`
  width: 100%;
  padding: 15px;
  background-color: red;
`;
