import styled from "@emotion/styled";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;
  border: 1px solid gray;
  margin: 0px 12px;
  cursor: pointer;

  :hover {
    background-color: gold;
    border-color: white;
  }
`;

export const LikeIconWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 50px;
`;

export const IWrapper = styled.div``;

export const LikeIcon = styled(LikeOutlined)`
  font-size: 24px;
  color: blue;
  margin: 0px 20px;
  cursor: pointer;
`;

export const DisLikeIcon = styled(DislikeOutlined)`
  font-size: 24px;
  color: tomato;
  margin: 0px 20px;
  cursor: pointer;
`;

export const LikeCount = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: blue;
`;
export const DisLikeCount = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: tomato;
`;
