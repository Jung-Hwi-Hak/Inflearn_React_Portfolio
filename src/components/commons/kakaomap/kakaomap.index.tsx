import type { ChangeEvent, KeyboardEvent } from "react";
import { useEffect, useState } from "react";
import * as S from "./kakaomap.styles";
import type { IKakaomapProps } from "./kakaomap.types";
declare const window: typeof globalThis & {
  kakao: any;
};
let map: any;
let marker: any;
let geocoder: any;

export default function KakaoMap(props: IKakaomapProps): JSX.Element {
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
        geocoder = new window.kakao.maps.services.Geocoder();
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };

        map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        marker = new window.kakao.maps.Marker({
          position: map.getCenter(),
        });
        marker.setMap(map);

        window.kakao.maps.event.addListener(map, "click", function (mouseEvent: any) {
          const latlng = mouseEvent.latLng;

          marker.setPosition(latlng);
          map.setCenter(latlng);

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

  const onChangePlaceKeyword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPlaceKeyword(event.currentTarget.value);
  };

  const searchPlace = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.code !== "Enter") return;
    geocoder.addressSearch(placeKeyword, function (result: any, status: any) {
      if (status === window.kakao.maps.services.Status.OK) {
        setPlaceAddress(result[0].address_name);
        props.setValue("address", result[0].address_name);
        void props.trigger("address");
        const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
        marker.setPosition(coords);
        map.setCenter(coords);
      }
    });
  };

  function searchAddrFromCoords(coords: any, callback: any) {
    geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
  }

  return (
    <S.KakaoMapWrapper>
      <div id="map" style={{ width: 500, height: 400 }}></div>
      <S.InputWrapper>
        <S.Label className="kakao__input__title">거래장소 지도 검색</S.Label>
        <S.SearchInput
          placeholder="거래장소 검색창 ex) 서울, 마포구, 동교동"
          onKeyDown={searchPlace}
          onChange={onChangePlaceKeyword}
        />
        <S.Label className="kakao__input__title">거래장소 주소</S.Label>
        <S.SearchInput
          placeholder="거래장소를 지도 검색 및 클릭을 해주세요."
          value={placeAddress}
          {...props.register("address")}
          readOnly
        />
        <S.Error>{props.errors.address?.message}</S.Error>
        <S.Label className="kakao__input__title">거래장소 상세주소</S.Label>
        <S.SearchInput
          placeholder="상세주소를 입력해주세요."
          {...props.register("addressDetail")}
        />
        <S.Error>{props.errors.addressDetail?.message}</S.Error>
      </S.InputWrapper>
    </S.KakaoMapWrapper>
  );
}
