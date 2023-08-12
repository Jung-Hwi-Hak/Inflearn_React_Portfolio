import styled from "@emotion/styled";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";

export const SidebarWrapper = styled.div`
  display: flex;
  width: 200px;
  height: 500px;
  list-style: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: 50px;
  background-color: rgba(100, 100, 100, 0.05);
  border-radius: 15px;
`;

export const ScrollUpButton = styled(CaretUpOutlined)`
  width: 100%;
  padding: 15px;
`;

export const ScrollDownButton = styled(CaretDownOutlined)`
  width: 100%;
  padding: 15px;
`;
