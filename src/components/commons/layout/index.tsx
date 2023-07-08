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

export default function Layout(props: ILayout): JSX.Element {
  return (
    <>
      <BackgroundImage />
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <Body>{props.children}</Body>
    </>
  );
}
