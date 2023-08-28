import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BannerDiv, Wrapper, BannerWrapper } from "./LayoutBanner.styles";
import { v4 as uuidv4 } from "uuid";
import { useMoveToPage } from "../../hooks/customs/useMoveToPage";
import { useLayoutBanner } from "../../hooks/customs/useLayoutBanner";

export default function LayoutBanner(): JSX.Element {
  const { bannerItems, settings, drag } = useLayoutBanner();
  const { onClickMoveToPageToggle } = useMoveToPage();

  return (
    <Wrapper>
      <Slider {...settings} slide="">
        {bannerItems.map((el) => (
          <BannerWrapper key={uuidv4()} onClick={onClickMoveToPageToggle(el[1], drag)}>
            <BannerDiv>{`< ${el[0]} />`}</BannerDiv>
          </BannerWrapper>
        ))}
      </Slider>
    </Wrapper>
  );
}
