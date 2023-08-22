import * as S from "./MyPage.styles";
import MyPageSide from "./side/MyPageSide.index";
import MyProductsPage from "./myProducts/MyProductsPage.index";
import { useState } from "react";
import MyPointPage from "./myPoint/MyPoint.index";
export default function MyPageIndex(): JSX.Element {
  const [page, setPage] = useState("myProducts");

  let contentComponent;

  switch (page) {
    case "myProducts":
      contentComponent = <MyProductsPage />;
      break;
    case "myPoint":
      contentComponent = <MyPointPage />;
      break;
    case "myProfile":
      contentComponent = <MyProductsPage />;
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
