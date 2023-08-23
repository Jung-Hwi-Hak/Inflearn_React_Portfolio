import styled from "@emotion/styled";
import type { IImgUpdateButton } from "./MyProfileImage.types";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid gray;
  padding-bottom: 30px;
  margin-bottom: 50px;
`;

export const ImgWrapper = styled.div`
  position: relative;
  & * {
    cursor: pointer;
  }
  margin-bottom: 10px;
`;

export const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

export const ImgCancelButton = styled.img`
  position: absolute;
  width: 20px;
  right: 0;
  top: 0;
`;

export const ImgSettingButton = styled.img`
  position: absolute;
  width: 20px;
  right: 0;
  top: 0;
`;

export const ImgInput = styled.input`
  display: none;
`;

export const ImgUpdateButton = styled.button`
  /* padding: 16px 45px; */
  border: none;
  color: #fff;
  background-color: ${(props: IImgUpdateButton) => (props.isChange ? "black" : "tomato")};
  cursor: pointer;
  width: 180px;
  height: 52px;
`;
