import styled from "@emotion/styled";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";

interface ILayout {
  children: JSX.Element;
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 110%;
  height: 100%;
  background-image: url("/images/background/noise.png");
  animation: grain 0.5s steps(1) infinite;
`;

const BackgroundInk = styled.div<{ top: string; left: string }>((props) => ({
  position: "absolute",
  opacity: "0.2",
  width: "500px",
  height: "500px",
  top: props.top,
  left: props.left,
  background: 'url("/images/background/ink.png") no-repeat',
}));

export default function Layout(props: ILayout): JSX.Element {
  return (
    <>
      <BackgroundInk top={"5px"} left={"30px"} />
      <BackgroundInk top={"200px"} left={"90%"} />
      <BackgroundImage />
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <Body>{props.children}</Body>
    </>
  );
}
