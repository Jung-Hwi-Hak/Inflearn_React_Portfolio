import styled from "@emotion/styled";
import { EnterOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding-top: 20px;
  min-height: 128px;
  margin: 20px 0;
`;

export const EnterOutlinedIcon = styled(EnterOutlined)`
  transform: scaleX(-1);
`;

export const ContentWrapper = styled.div`
  width: 100%;
  border: 1px solid lightgray;
  margin-left: 25px;
`;

export const Input = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 20px;
  border: 1px solid lightgray;
  margin-right: 20px;
`;

export const Contents = styled.textarea`
  width: 100%;
  min-height: 108px;
  resize: none;
  padding: 20px;
  border: none;
  border-bottom: 1px solid lightgray;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 51px;
`;

export const ContentsLength = styled.div`
  width: calc(100%-91px);
  padding-left: 20px;
  color: gray;
`;

export const Button = styled.button`
  width: 91px;
  height: 51px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin-left: 5px;
`;

export const ButtonFlex = styled.div`
  display: flex;
  flex-direction: row;
`;
