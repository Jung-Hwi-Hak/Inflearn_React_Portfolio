import { memo } from "react";
import MyPorfileImageIndex from "./myPorfileImage/MyPorfileImage.index";
import MyProFilePWIndex from "./myProfilePW/MyProFilePW.index";

function MyProfile(): JSX.Element {
  return (
    <>
      <MyPorfileImageIndex />
      <MyProFilePWIndex />
    </>
  );
}
export default memo(MyProfile);
