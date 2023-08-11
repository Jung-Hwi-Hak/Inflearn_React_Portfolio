import styled from "@emotion/styled";
import { UserOutlined, LikeOutlined } from "@ant-design/icons";

export const BestBoardsSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

export const BestBoardsArticle = styled.article`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 50px;
`;

export const BestBoardCard = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 25px;
  position: relative;
  box-shadow: 2px 2px 10px #444;
`;

export const BestBoardImage = styled.img`
  width: 100%;
  height: 50%;
  position: absolute;
  border-radius: 25px 25px 0 0;
  left: 0;
  top: 0;
  z-index: -1;
`;

export const BestBoardInfoWrapper = styled.div`
  width: 100%;
  height: 50%;
  border-radius: 0 0 25px 25px;
  transform: translateY(100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
`;
export const BestBoardInfoTitle = styled.h3``;

export const InfoSubWrapper = styled.div`
  width: 100%;
  display: flex;
`;
export const InfoSubLeftWrapper = styled.div`
  width: 80%;
  text-align: left;
`;
export const WriterWrapper = styled.div``;
export const WriterIcon = styled(UserOutlined)`
  text-align: left;
  width: 17%;
  margin-right: 3%;
`;
export const Writer = styled.span`
  display: inline-block;
  width: 80%;
`;

export const Date = styled.span`
  font-size: 13px;
  width: 100%;
  color: rgba(0, 0, 0, 0.5);
`;
export const InfoSubRightWrapper = styled.div`
  width: 20%;
  text-align: center;
`;

export const LikeIcon = styled(LikeOutlined)`
  display: block;
`;

export const LikeCount = styled.span`
  font-size: 13px;
`;
