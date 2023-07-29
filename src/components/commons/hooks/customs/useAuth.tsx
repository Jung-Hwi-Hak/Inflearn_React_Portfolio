import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { accessTokenState, restoreAccessTokenLoadable } from "../../../../commons/stores";
import { useEffect } from "react";
import { useRouter } from "next/router";

export const useAuth =
  (Component: any) =>
  (props: any): any => {
    const router = useRouter();
    const [accessToken] = useRecoilState(accessTokenState);
    const accessTokenLoadable = useRecoilValueLoadable(restoreAccessTokenLoadable);

    useEffect(() => {
      void accessTokenLoadable.toPromise().then((newAccessToken) => {
        if (newAccessToken === undefined && accessToken === "") {
          alert("로그인후 이용이 가능합니다.");
          void router.push("/login");
        }
      });
    }, []);
    return <Component {...props} />;
  };
