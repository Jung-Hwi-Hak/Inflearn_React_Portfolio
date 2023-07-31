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

export const userPWState = atom({
  key: "userPWState",
  default: "",
});

export const loginToggleState = atom({
  key: "loginToggleState",
  default: false,
});

export const searchKeywordState = atom({
  key: "searchKeywordState",
  default: "",
});

export const paginationStartPageState = atom({
  key: "paginationStartPageState",
  default: 1,
});
export const paginationActivePageState = atom({
  key: "paginationActivePageState",
  default: 1,
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});
