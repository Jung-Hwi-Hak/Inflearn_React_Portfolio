import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BannerDiv, Wrapper, BannerWrapper } from "./LayoutBanner.styles";
import { v4 as uuidv4 } from "uuid";
import type { LayoutBannerUIProps } from "./LayoutBanner.types";

export default function LayoutBannerUI(
  props: LayoutBannerUIProps
): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: props.handleAfterChange,
    beforeChange: props.handleBeforeChange,
  };
  const bannerItems = [
    ["Firebase", "/firebasePage"],
    ["Public APIs", "/publicApis"],
    ["Graphql", "/boards"],
  ];
  return (
    <Wrapper>
      <Slider {...settings} slide="">
        {bannerItems.map((el) => (
          <BannerWrapper
            key={uuidv4()}
            onClick={props.onClickMoveToPage}
            data-url={el[1]}
          >
            <BannerDiv>{`< ${el[0]} />`}</BannerDiv>
          </BannerWrapper>
        ))}
      </Slider>
    </Wrapper>
  );
}
