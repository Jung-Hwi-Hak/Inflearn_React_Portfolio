import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const userIDState = atom({
  key: "userIDState",
  default: "",
});

export const userNameState = atom({
  key: "userNameState",
  default: "",
});

export const userPWState = atom({
  key: "userPWState",
  default: "",
});

export const loginToggleState = atom({
  key: "loginToggleState",
  default: false,
});
export const productIsSoldState = atom({
  key: "productIsSoldState",
  default: false,
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});
