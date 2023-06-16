import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export default function LayoutHeader(): JSX.Element {
  //
  const router = useRouter();

  // ! function area
  // ? 메인 화면 이동 onClick function
  const onClickLogo = (): void => {
    void router.push("/boards");
  };

  // ? 로그인 페이지이동 onClick function
  const onClickMoveToLogin = (): void => {
    void router.push("/login");
  };

  return (
    <LayoutHeaderUI
      onClickLogo={onClickLogo}
      onClickMoveToLogin={onClickMoveToLogin}
    />
  );
}
