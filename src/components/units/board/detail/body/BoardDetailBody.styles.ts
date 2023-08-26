import styled from "@emotion/styled";
import ReactPlayer from "react-player";

export const Body = styled.div`
  width: 100%;
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
