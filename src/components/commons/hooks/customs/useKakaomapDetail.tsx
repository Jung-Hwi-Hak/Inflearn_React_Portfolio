import { useEffect } from "react";
import type { IKakaomapDetailProps } from "../../kakaomap/kakaomapDetail/kakaomap.types";

declare const window: typeof globalThis & {
  kakao: any;
};
let map: any;
let marker: any;
export const useKakaomapDetail = (props: IKakaomapDetailProps) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=512ea35caeeaa67365f5a84914ff3e7d&libraries=services&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(props.lat, props.lng),
          level: 3,
        };

        map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        marker = new window.kakao.maps.Marker({
          position: map.getCenter(),
        });
        marker.setMap(map);
      });
    };
  }, [props]);

  return {};
};
