import styled from "@emotion/styled";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 200px;
  margin-left: 50px;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  width: 100%;
  list-style: none;
  flex-direction: column;
  align-items: center;
  background-color: rgba(100, 100, 100, 0.05);
  border-radius: 15px;
`;

export const ScrollUpButton = styled(CaretUpOutlined)`
  width: 100%;
  padding: 15px;
  margin: 0 auto;
  display: block;
`;

export const ScrollDownButton = styled(CaretDownOutlined)`
  display: block;
  width: 100%;
  padding: 15px;
  margin: 0 auto;
`;

export const CreateButton = styled.button`
  width: 100%;
  padding: 15px;
  border-radius: 15px;
  position: absolute;
  background-color: #000;
  color: #fff;
  bottom: 0;
  cursor: pointer;
  /* :hover {
    border: 2px solid tomato;
    background-color: rgba(100, 100, 100, 0.05);
  } */
`;
