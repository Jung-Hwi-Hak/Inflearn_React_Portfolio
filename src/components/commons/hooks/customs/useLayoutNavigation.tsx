import { useRouter } from "next/router";
import { useEffect } from "react";

export const useLayoutNavigation = () => {
  const router = useRouter();

  useEffect(() => {
    const changeFocusNavigation = (): void => {
      const path = router.asPath.split("/")[1];
      if (!path) return;
      const navigation = document.getElementById(`/${path}`);
      const navigationFocus = document.querySelectorAll(".focus");
      navigationFocus.forEach((el) => {
        el.classList.remove("focus");
      });
      navigation?.classList.add("focus");
    };
    changeFocusNavigation();
  }, [router.asPath]);
};

// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// export const useLayoutNavigation = () => {
//   const router = useRouter();
//   const [windowWidth, setWindowWidth] = useState(
//     typeof window !== "undefined" ? window.innerWidth : 1200
//   );
//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     // 창의 크기가 변경될 때마다 handleResize 함수 호출
//     window.addEventListener("resize", handleResize);
//     const changeFocusNavigation = (): void => {
//       const path = router.asPath.split("/")[1];
//       if (!path) return;
//       const navigation = document.getElementById(`/${path}`);
//       const navigationFocus = document.querySelectorAll(".focus");
//       navigationFocus.forEach((el) => {
//         el.classList.remove("focus");
//       });
//       navigation?.classList.add("focus");
//     };
//     changeFocusNavigation();
//     // 컴포넌트가 unmount될 때 리스너 제거
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [router.asPath]);

//   return {
//     windowWidth,
//   };
// };
