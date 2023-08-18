import { useCallback, useState, useEffect } from "react";
import type { ChangeEvent, KeyboardEvent } from "react";
import type { IKakaomapProps } from "../../kakaomap/kakaomapWriter/kakaomap.types";

declare const window: typeof globalThis & {
  kakao: any;
};
let map: any;
let marker: any;
let geocoder: any;
export const useKakaomapWriter = (props: IKakaomapProps) => {
  const [placeKeyword, setPlaceKeyword] = useState("");
  const [placeAddress, setPlaceAddress] = useState("");
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=512ea35caeeaa67365f5a84914ff3e7d&libraries=services&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const lat = props.data?.fetchUseditem.useditemAddress?.lat ?? 33.450701;
        const lng = props.data?.fetchUseditem.useditemAddress?.lng ?? 126.570667;
        const address = props.data?.fetchUseditem.useditemAddress?.address ?? "";
        geocoder = new window.kakao.maps.services.Geocoder();
        const options = {
          center: new window.kakao.maps.LatLng(lat, lng),
          level: 3,
        };
        if (address !== "") {
          setPlaceAddress(address);
          props.setValue("address", address);
          void props.trigger("address");
        }
        map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        marker = new window.kakao.maps.Marker({
          position: map.getCenter(),
        });
        marker.setMap(map);

        window.kakao.maps.event.addListener(map, "click", function (mouseEvent: any) {
          const latlng = mouseEvent.latLng;

          marker.setPosition(latlng);
          map.setCenter(latlng);
          map.setLevel(3);
          console.log(mouseEvent);

          props.setValue("lat", latlng.getLat());
          props.setValue("lng", latlng.getLng());
          void props.trigger("lat");
          void props.trigger("lng");
          searchAddrFromCoords(mouseEvent.latLng, function (result: any, status: any) {
            if (status === window.kakao.maps.services.Status.OK) {
              setPlaceAddress(result[0].address_name);
              props.setValue("address", result[0].address_name);
              void props.trigger("address");
            }
          });
        });
      });
    };
  }, []);
  const onChangePlaceKeyword = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
    setPlaceKeyword(event.currentTarget.value);
  }, []);

  const searchPlace = useCallback(
    (event: KeyboardEvent<HTMLInputElement>): void => {
      if (event.code !== "Enter") return;
      geocoder.addressSearch(placeKeyword, function (result: any, status: any) {
        if (status === window.kakao.maps.services.Status.OK) {
          setPlaceAddress(result[0].address_name);
          props.setValue("address", result[0].address_name);
          props.setValue("lat", result[0].y);
          props.setValue("lng", result[0].x);
          void props.trigger("address");
          void props.trigger("lat");
          void props.trigger("lng");
          const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
          marker.setPosition(coords);
          map.setCenter(coords);
          map.setLevel(3);
        }
      });
    },
    [placeKeyword]
  );

  const searchAddrFromCoords = (coords: any, callback: any) => {
    geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
  };

  return {
    onChangePlaceKeyword,
    searchPlace,
    placeAddress,
  };
};
