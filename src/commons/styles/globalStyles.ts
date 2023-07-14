import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    z-index: 99;
    margin: 0px;
    box-sizing: border-box;
    font-family: myFont;
    background-color: transparent;
  }
  html,
  body {
    position: relative;
    width: 100%;
    height: 100%;
  }
  @font-face {
    font-family: "myFont";
    src: url("/fonts/NanumGothicCoding-Regular.ttf");
  }

  /* Film Animations */
  // Grain
  @keyframes grain {
    0%,
    100% {
      transform: translate(0, 0, 0);
    }

    10% {
      transform: translate(-1%, 0%);
    }

    30% {
      transform: translate(-2%, 0%);
    }

    50% {
      transform: translate(-3%, 0%);
    }

    70% {
      transform: translate(-4%, 0%);
    }

    90% {
      transform: translate(-3%, 0%);
    }
  }
`;
