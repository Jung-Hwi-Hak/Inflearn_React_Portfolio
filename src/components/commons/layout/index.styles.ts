import styled from "@emotion/styled";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 110%;
  height: 110%;
  background: url("/images/background/noise.png") repeat;
  animation: grain 0.5s steps(1) infinite;
  overflow: hidden;
  z-index: -1;
`;

export const BackgroundInk = styled.div<{ top: string; left: string }>((props) => ({
  position: "absolute",
  opacity: "0.2",
  width: "350px",
  height: "350px",
  top: props.top,
  left: props.left,
  background: 'url("/images/background/ink.png") no-repeat',
  zIndex: "-1",
}));
