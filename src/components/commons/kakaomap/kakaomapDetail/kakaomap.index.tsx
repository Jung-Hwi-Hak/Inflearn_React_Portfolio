import { useKakaomapDetail } from "../../hooks/customs/useKakaomapDetail";
import * as S from "./kakaomap.styles";
import type { IKakaomapDetailProps } from "./kakaomap.types";

export default function KakaoMapDetail(props: IKakaomapDetailProps): JSX.Element {
  useKakaomapDetail(props);

  return (
    <S.KakaoMapWrapper>
      <S.KakaoMap id="map" style={{ width: "100%", height: 400 }}></S.KakaoMap>
      <S.Address>
        주소: {props.address}({props.addressDetail})
      </S.Address>
    </S.KakaoMapWrapper>
  );
}
