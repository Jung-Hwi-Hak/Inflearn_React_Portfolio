import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    padding: 0;
    margin: 0;
    margin: 0px;
    box-sizing: border-box;
    font-family: Noto Sans CJK KR;
    background-color: transparent;
  }
  html,
  body {
    position: relative;
    width: 100%;
    height: 100%;
  }
  /* @font-face {
    font-family: "myFont";
    src: url("/fonts/NanumGothicCoding-Regular.ttf");
  } */

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

  // warning modal
  .ant-modal-confirm-warning .ant-btn-primary {
    background-color: tomato;
  }
  .ant-modal-confirm-warning .ant-btn-primary:hover {
    background-color: tomato;
  }

  // date picker
  .dateRangePicker.ant-calendar-picker-input.ant-input:hover {
    border-color: gray !important;
    outline: 0 !important;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .dateRangePicker:hover {
    border-color: gray !important;
  }

  .dateRangePicker.ant-picker-focused {
    border-color: gray !important;
    outline: 0 !important;
  }

  .dateRangePicker .ant-picker-active-bar {
    background-color: tomato !important;
  }

  .dateRangePicker .ant-picker-cell-in-view.ant-picker-cell-range-start .ant-picker-cell-inner {
    background-color: tomato !important;
  }

  .dateRangePicker .ant-picker-cell-in-view.ant-picker-cell-range-end .ant-picker-cell-inner {
    background-color: tomato !important;
  }

  .dateRangePicker .ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner::before {
    border-color: tomato !important;
  }

  .dateRangePicker
    .ant-picker-cell-in-view.ant-picker-cell-range-start:not(
      .ant-picker-cell-range-start-single
    )::before,
  .dateRangePicker .ant-picker-cell-in-view.ant-picker-cell-in-range::before,
  .dateRangePicker
    .ant-picker-cell-in-view.ant-picker-cell-range-end:not(
      .ant-picker-cell-range-end-single
    )::before,
  .dateRangePicker
    .ant-picker-time-panel-column
    > li.ant-picker-time-panel-cell-selected
    .ant-picker-time-panel-cell-inner {
    background: #e6ffe8 !important;
  }

  .dateRangePicker .ant-btn-primary {
    background-color: tomato !important;
    border-color: tomato !important;
  }

  // ant Menu

  .ant-menu-submenu-title:where(.css-dev-only-do-not-override-txh9fw).ant-menu-light
    .ant-menu-submenu-selected
    > .ant-menu-submenu-title,
  :where(.css-dev-only-do-not-override-txh9fw).ant-menu-light
    .ant-menu-submenu-selected
    > .ant-menu-submenu-title {
    color: black;
  }
  .ant-menu-item .ant-menu-item-selected .ant-menu-item-only-child::after {
    color: red;
  }
  .ant-menu-item-selected {
    background-color: rgba(0, 0, 0, 0.2) !important;
    color: #fff !important;
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
