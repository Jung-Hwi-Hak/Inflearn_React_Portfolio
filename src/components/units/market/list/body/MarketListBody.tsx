import * as S from "./MarketListBody.styles";
import { getDate } from "../../../../../commons/libraries/utils";
import { useMoveToPage } from "../../../../commons/hooks/customs/useMoveToPage";
import { memo, useCallback } from "react";
import type { IUseditem } from "../../../../../commons/types/generated/types";
import InfiniteScroll from "react-infinite-scroller";
import MarketSideBar from "../sidebar";
import DOMPurify from "dompurify";

function MarketListBody(props: any): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const handleImgError = useCallback((e: any): void => {
    e.target.src = "./images/no_image.png";
  }, []);
  return (
    <S.Wrapper>
      <S.Section id={"marketListWrapper"}>
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
              {typeof window !== "undefined" ? (
                <S.ColumnTitle
                  id={el._id}
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(el.contents ?? ""),
                  }}
                  onClick={onClickMoveToPage(`/boards/${el._id}`)}
                ></S.ColumnTitle>
              ) : (
                <S.ColumnTitle></S.ColumnTitle>
              )}

              <S.ColumnBasic>{el.seller?.name}</S.ColumnBasic>
              <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
            </S.ItemCard>
          )) ?? <></>}
        </InfiniteScroll>
      </S.Section>
      <MarketSideBar />
    </S.Wrapper>
  );
}
export default memo(MarketListBody);
