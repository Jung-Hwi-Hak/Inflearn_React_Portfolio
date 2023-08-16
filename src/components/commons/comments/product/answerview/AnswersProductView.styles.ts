import styled from "@emotion/styled";
import { Rate, Modal } from "antd";
export const ItemWrapper = styled.div`
  padding-top: 20px;
  min-height: 128px;
  border-bottom: 1px solid lightgray;
  margin: 20px 0;
  background-color: lightgray;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;

export const MainWrapper = styled.div`
  width: 100%;
  padding-left: 10px;
`;
export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
export const Writer = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const Contents = styled.div`
  margin-left: 5px;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const UpdateIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const DeleteIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const AnswerIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const bottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  padding-left: 60px;
`;

export const DateString = styled.div``;

export const Star = styled(Rate)`
  padding-left: 20px;
`;

export const PasswordModal = styled(Modal)``;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;
