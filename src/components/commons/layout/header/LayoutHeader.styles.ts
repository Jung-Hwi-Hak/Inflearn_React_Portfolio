import styled from "@emotion/styled";
import { Button } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  height: 152px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

export const LogoWrapper = styled.div`
  width: 10%;
  border-bottom: 5px solid #252525;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
`;

export const InnerButton = styled(Button)`
  margin: 10px;
`;

export const HeaderButtonLogin = styled.button`
  font-size: 16px;
  font-weight: bold;
  border: none;
  margin-right: 10px;
  cursor: pointer;
  :hover {
    animation: color 0.3s linear;
    animation-fill-mode: forwards;
  }

  @keyframes color {
    from {
      color: #000;
    }

    to {
      color: tomato;
    }
  }
`;

export const HeaderButtonSignUp = styled.button`
  font-size: 16px;
  font-weight: bold;
  border: none;
  background-color: transparent;
  cursor: pointer;

  :hover {
    animation: color 0.3s forwards;
  }

  @keyframes color {
    from {
      color: #000;
    }

    to {
      color: tomato;
    }
  }
`;

export const UserProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserProfileImg = styled.img`
  margin-right: 5px;
  max-width: 35px;
`;

export const UserProfileIcon = styled(CaretDownOutlined)``;
