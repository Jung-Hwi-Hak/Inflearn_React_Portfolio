import styled from "@emotion/styled";
import ReactPlayer from "react-player";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";

export const Body = styled.div`
  width: 100%;
  min-height: 800px;
`;

export const Title = styled.h1`
  padding-top: 80px;
`;

export const Contents = styled.div`
  padding-top: 40px;
  padding-bottom: 120px;
`;
export const YoutubeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const Youtube = styled(ReactPlayer)`
  width: auto;
`;

export const UploadImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UploadImage = styled.img`
  width: 800px;
  margin: 15px;
`;

export const LikeIconWrapper = styled.div`
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
