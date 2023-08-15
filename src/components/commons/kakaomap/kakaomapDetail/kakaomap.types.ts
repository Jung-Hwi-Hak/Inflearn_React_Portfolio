import type { Maybe } from "yup";

export interface IKakaomapDetailProps {
  address: Maybe<string> | undefined;
  addressDetail: Maybe<string> | undefined;
  lat: Maybe<number> | undefined;
  lng: Maybe<number> | undefined;
}
