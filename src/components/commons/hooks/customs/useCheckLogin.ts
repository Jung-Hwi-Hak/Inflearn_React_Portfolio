import { useQueryFetchUserLoggedIn } from "../queries/useQueryFetchUserLoggedIn";
import { useModal } from "./useModal";

export const useCheckLogin = () => {
  const { data } = useQueryFetchUserLoggedIn();

  const { warningModal } = useModal();

  const onClickCheckLogin = (callback: any) => (args: any) => {
    if (data) {
      if (args) {
        callback(args);
      } else {
        callback();
      }
    } else {
      warningModal("로그인", "로그인후 이용이 가능합니다.");
    }
  };
  return {
    onClickCheckLogin,
  };
};
