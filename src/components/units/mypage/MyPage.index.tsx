import * as S from "./MyPage.styles";
import MyPageSide from "./side/MyPageSide.index";
import MyProducts from "./myProducts/MyProducts.index";
import { memo, useState } from "react";
import MyPoint from "./myPoint/MyPoint.index";
import MyProfile from "./myProfile/MyProfile.index";
function MyPageIndex(): JSX.Element {
  const [page, setPage] = useState("myProducts");

  let contentComponent;

  switch (page) {
    case "myProducts":
      contentComponent = <MyProducts />;
      break;
    case "myPoint":
      contentComponent = <MyPoint />;
      break;
    case "myProfile":
      contentComponent = <MyProfile />;
      break;
    default:
      contentComponent = <></>;
  }
  return (
    <S.Wrapper>
      <MyPageSide setPage={setPage} />

      <S.Section>{contentComponent}</S.Section>
    </S.Wrapper>
  );
}
export default memo(MyPageIndex);
