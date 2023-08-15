import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    padding: 0;
    margin: 0;
    /* z-index: 99; */
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

  // antd design
  :where(.css-dev-only-do-not-override-15coxvv).ant-modal .ant-modal-content {
    background-color: rgba(999, 999, 999, 0.7);
  }
  .ant-modal-confirm-body {
    justify-content: center;
    font-weight: bold;
  }
  // success modal
  .ant-modal-confirm-success .ant-btn-primary {
    background-color: black;
  }
  .ant-modal-confirm-success .ant-btn-primary:hover {
    background-color: black;
  }
  /* .ant-modal-confirm-success .anticon-check-circle {
    display: none;
  } */

  // warning modal
  .ant-modal-confirm-warning .ant-btn-primary {
    background-color: tomato;
  }
  .ant-modal-confirm-warning .ant-btn-primary:hover {
    background-color: tomato;
  }
  /* .anticon-exclamation-circle {
    display: none;
  } */

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
