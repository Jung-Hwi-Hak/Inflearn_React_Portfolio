import { memo } from "react";
import MarketList from "../../src/components/units/market/list/MarketList.index";

function MarketPage(): JSX.Element {
  return <MarketList />;
}

export default memo(MarketPage);
