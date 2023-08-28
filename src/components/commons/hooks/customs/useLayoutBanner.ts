import { useCallback, useState } from "react";

interface IUseLayoutBannerReturns {
  settings: {
    dots: boolean;
    arrows: boolean;
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    afterChange: () => void;
    beforeChange: () => void;
  };
  bannerItems: string[][];
  drag: boolean;
}

export const useLayoutBanner = (): IUseLayoutBannerReturns => {
  const [drag, setDrag] = useState(false);
  const bannerItems = [
    // ["Firebase", "/firebasePage"],
    // ["Public APIs", "/publicApis"],
    ["자유게시판", "/boards"],
    ["중고마켓", "/products"],
    ["마이페이지", "/mypage"],
  ];
  const handleBeforeChange = useCallback((): void => {
    setDrag(true);
  }, []);

  const handleAfterChange = useCallback(() => {
    setDrag(false);
  }, []);
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

  return {
    drag,
    settings,
    bannerItems,
  };
};
