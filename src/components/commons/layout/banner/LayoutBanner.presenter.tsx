import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import { BannerDiv, Wrapper, BannerWrapper } from "./LayoutBanner.styles";
import { v4 as uuidv4 } from "uuid";
import type { LayoutBannerUIProps } from "./LayoutBanner.types";
import { useMoveToPage } from "../../hooks/customs/useMoveToPage";

export default function LayoutBannerUI(
  props: LayoutBannerUIProps
): JSX.Element {
  const [drag, setDrag] = useState(false);
  const { onClickMoveToPageToggle } = useMoveToPage();
  const handleBeforeChange = (): void => {
    setDrag(true);
  };

  const handleAfterChange = (): void => {
    setDrag(false);
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: handleAfterChange,
    beforeChange: handleBeforeChange,
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
            onClick={onClickMoveToPageToggle(el[1], drag)}
          >
            <BannerDiv>{`< ${el[0]} />`}</BannerDiv>
          </BannerWrapper>
        ))}
      </Slider>
    </Wrapper>
  );
}
