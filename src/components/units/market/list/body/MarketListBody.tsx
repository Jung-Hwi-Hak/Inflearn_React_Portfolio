import * as S from "./MarketListBody.styles";
import { getDate } from "../../../../../commons/libraries/utils";
import { useMoveToPage } from "../../../../commons/hooks/customs/useMoveToPage";
import { memo, useCallback } from "react";
import type { IUseditem } from "../../../../../commons/types/generated/types";
import InfiniteScroll from "react-infinite-scroller";
import MarketSideBar from "../sidebar";

function MarketListBody(props: any): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const handleImgError = useCallback((e: any): void => {
    e.target.src = "./images/no_image.png";
  }, []);
  return (
    <S.Wrapper id={"marketListWrapper"}>
      <link rel="preload" href="./images/no_image.png" />

      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true} useWindow={false}>
        {props.data?.fetchUseditems.map((el: IUseditem, index: number) => (
          <S.ItemCard key={el._id ?? index}>
            <S.ItemImage
              src={
                el.images?.[0]
                  ? `https://storage.googleapis.com/${el.images?.[0]}`
                  : "./images/no_image.png"
              }
              onError={handleImgError}
              alt="상품이미지"
            />
            <S.ColumnTitle id={el._id} onClick={onClickMoveToPage(`/boards/${el._id}`)}>
              {el.contents ?? ""}
            </S.ColumnTitle>
            <S.ColumnBasic>{el.seller?.name}</S.ColumnBasic>
            <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
          </S.ItemCard>
        )) ?? <></>}
      </InfiniteScroll>
      <MarketSideBar />
    </S.Wrapper>
  );
}
export default memo(MarketListBody);
