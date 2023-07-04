import styled from "@emotion/styled";
import { UserOutlined, AlignLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  margin-top: 50px;
  height: 200px;
  width: 500px;
`;

export const FelxInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 50px;
  width: 100%;
`;

export const InputTypeSpan = styled.span`
  margin-left: 5px;
  margin-right: 5px;
`;

export const FlexInput = styled.input`
  width: 80%;
  border: none;
  border-bottom: 1px solid #000;

  :focus {
    outline: none;
  }
`;

export const FlexInputLabel = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 20%;
`;

export const WriterIcon = styled(UserOutlined)`
  font-size: 25px;
`;

export const TitleIcon = styled(AlignLeftOutlined)`
  font-size: 25px;
`;

export const ContentsIcon = styled(AlignLeftOutlined)`
  font-size: 25px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-top: 60px;
`;

export const SubmitButton = styled(Button)`
  width: 110px;
`;

export const CancelButton = styled(Button)`
  width: 110px;
  background-color: pink;
`;
