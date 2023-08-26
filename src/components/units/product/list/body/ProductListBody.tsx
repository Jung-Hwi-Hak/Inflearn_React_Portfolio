import * as S from "./ProductListBody.styles";
import { useMoveToPage } from "../../../../commons/hooks/customs/useMoveToPage";
import { memo, useCallback } from "react";
import type { IUseditem } from "../../../../../commons/types/generated/types";
import InfiniteScroll from "react-infinite-scroller";
import ProductSideBar from "../sidebar/ProductSidebar.index";

function ProductListBody(props: any): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const handleImgError = useCallback((e: any): void => {
    e.target.src = "./images/no_image.png";
  }, []);
  return (
    <S.Wrapper>
      <S.Section id={"marketListWrapper"}>
        <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true} useWindow={false}>
          {props.data?.fetchUseditems.map((el: IUseditem, index: number) => (
            <S.ItemWrapper
              key={el._id ?? index}
              id={el._id}
              onClick={onClickMoveToPage(`/products/${el._id}`)}
            >
              <S.ItemImage
                src={
                  el.images?.[0]
                    ? `https://storage.googleapis.com/${el.images?.[0]}`
                    : "./images/no_image.png"
                }
                onError={handleImgError}
                alt="상품이미지"
              />
              <S.ItemInfoWrapper>
                <S.ItenName>{el.name}</S.ItenName>
                <S.ItemRemarks>{el.remarks}</S.ItemRemarks>
                <S.ItemTags>{el.tags}</S.ItemTags>
                <S.ItemInfoFooter>
                  <S.SellerImg
                    src={
                      el.seller?.picture !== null
                        ? `https://storage.googleapis.com/${String(el.seller?.picture)}`
                        : "./images/profile.png"
                    }
                  />
                  <S.SellerName>{el.seller?.name}</S.SellerName>
                  <S.PickIcon rev={undefined} />
                  <S.PickCount>{el.pickedCount}</S.PickCount>
                </S.ItemInfoFooter>
              </S.ItemInfoWrapper>
              <S.ItemInfoRight>
                <S.ItemPrice>
                  &#x20a9;
                  {el.price?.toLocaleString("ko-KR")}원
                </S.ItemPrice>
              </S.ItemInfoRight>
            </S.ItemWrapper>
          )) ?? <></>}
        </InfiniteScroll>
      </S.Section>
      <ProductSideBar />
    </S.Wrapper>
  );
}
export default memo(ProductListBody);
