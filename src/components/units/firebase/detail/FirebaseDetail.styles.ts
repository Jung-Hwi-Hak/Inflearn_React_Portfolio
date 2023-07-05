import styled from "@emotion/styled";
import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 1200px;
  margin: 100px;
`;

export const WriterInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #000;
  padding-bottom: 20px;
  margin-bottom: 80px;
`;

export const WriterIcon = styled(UserOutlined)`
  font-size: 56px;
  margin-right: 5px;
`;

export const WriterDetailInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const WriterName = styled.span`
  font-weight: bold;
  font-size: 24px;
`;

export const WriterSubmitDate = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 40px;
`;

export const Contents = styled.div`
  width: 100%;
  background-color: #e5e5e5;
  min-height: 300px;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 100px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 100px;
`;

export const SubmitButton = styled(Button)`
  width: 179px;
  height: 52px;
  margin-right: 24px;
`;
export const CancelButton = styled(Button)`
  width: 179px;
  height: 52px;
`;
