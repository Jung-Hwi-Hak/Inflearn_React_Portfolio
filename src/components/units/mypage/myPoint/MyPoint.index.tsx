import MyPageHeader01Index from "../../../commons/mypage/header/01/MyPageHeader01.index";
import { useMyPoint } from "../../../commons/hooks/customs/mypage/useMyPoint";
import MyPointAllHistoryIndex from "./allHistory/MyPointAllHistory.index";
import MyPointChargeHistoryIndex from "./chargeHistory/MyPointChargeHistory.index";
import MyPointBuyHistoryIndex from "./buyHistory/MyPointBuyHistory.index";
import MyPointSellHistoryIndex from "./sellHistory/MyPointSellHistory.index";
import MyPointChargePointIndex from "./chargePoint/MyPointChargePoint.index";

export default function MyPointPage(): JSX.Element {
  const { isFocus, setIsFocus } = useMyPoint();
  let contentComponent;
  switch (isFocus) {
    case 0:
      contentComponent = <MyPointAllHistoryIndex />;
      break;
    case 1:
      contentComponent = <MyPointChargeHistoryIndex />;
      break;
    case 2:
      contentComponent = <MyPointBuyHistoryIndex />;
      break;
    case 3:
      contentComponent = <MyPointSellHistoryIndex />;
      break;
    case 4:
      contentComponent = <MyPointChargePointIndex />;
      break;
    default:
      contentComponent = <></>;
  }
  return (
    <>
      <MyPageHeader01Index
        isFocus={isFocus}
        setIsFocus={setIsFocus}
        listNames={["전체내역", "충전내역", "구매내역", "판매내역", "포인트 충전"]}
      />
      {contentComponent}
    </>
  );
}
