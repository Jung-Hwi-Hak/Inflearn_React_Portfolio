import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BannerImg, Wrapper } from "./LayoutBanner.styles";

export default function LayoutBannerUI(): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <BannerImg src="/images/banner/cat.png" alt="" />
        </div>
        <div>
          <BannerImg src="/images/banner/cat.png" alt="" />
        </div>
      </Slider>
    </Wrapper>
  );
}
