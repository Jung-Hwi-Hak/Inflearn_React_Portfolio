import { memo } from "react";
import { useKakaomapWriter } from "../../hooks/customs/useKakaomapWriter";
import * as S from "./kakaomap.styles";
import type { IKakaomapProps } from "./kakaomap.types";

function KakaoMap(props: IKakaomapProps): JSX.Element {
  const { onChangePlaceKeyword, placeAddress, searchPlace } = useKakaomapWriter(props);

  return (
    <S.KakaoMapWrapper>
      <S.KakaoMap id="map" style={{ width: 500, height: 400 }}></S.KakaoMap>
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
export default memo(KakaoMap);
