import styled from "@emotion/styled";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-left: 50px;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  width: 100%;
  list-style: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(100, 100, 100, 0.05);
  border-radius: 15px;
`;

export const ScrollUpButton = styled(CaretUpOutlined)`
  width: 100%;
  padding: 15px;
  text-align: center;
`;

export const ScrollDownButton = styled(CaretDownOutlined)`
  width: 100%;
  padding: 15px;
  text-align: center;
`;

export const CreateButton = styled.button`
  width: 100%;
  padding: 15px;
  border-radius: 15px;
  position: absolute;
  bottom: 0;
  :hover {
    border: 2px solid tomato;
    background-color: rgba(100, 100, 100, 0.05);
  }
`;
