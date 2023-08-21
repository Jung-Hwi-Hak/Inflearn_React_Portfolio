import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { accessTokenState, restoreAccessTokenLoadable } from "../../../../commons/stores";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useModal } from "./useModal";

export const useAuth =
  (Component: any) =>
  (props: any): any => {
    const router = useRouter();
    const [accessToken] = useRecoilState(accessTokenState);
    const accessTokenLoadable = useRecoilValueLoadable(restoreAccessTokenLoadable);
    const { warningModal } = useModal();

    useEffect(() => {
      void accessTokenLoadable.toPromise().then((newAccessToken) => {
        if (newAccessToken === undefined && accessToken === "") {
          warningModal("로그인", "로그인후 이용이 가능합니다.", true);
          void router.push("/login");
        }
      });
    }, []);
    return <Component {...props} />;
  };
