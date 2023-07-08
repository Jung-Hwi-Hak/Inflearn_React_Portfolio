import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #252525;
  font-size: 18px;
  color: #fff;
`;

export const MenuItem = styled.div`
  margin: 0px 60px;
  cursor: pointer;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(175, 175, 175, 0.5);

  :hover {
    color: tomato;
    animation: borderBottom 1s forwards;
  }
  @keyframes borderBottom {
    from {
      border-bottom: 2px solid rgba(175, 175, 175, 0.5);
    }
    to {
      border-bottom: 2px solid rgba(255, 255, 255, 1);
    }
  }

  &.focus {
    margin: 0px 60px;
    color: tomato;
    cursor: pointer;
    padding-bottom: 10px;
    border-bottom: 2px solid rgba(175, 175, 175, 1);
  }
`;
