import { memo } from "react";
import { getDate } from "../../../../../commons/libraries/utils";
import type { IUseditem } from "../../../../../commons/types/generated/types";
import * as S from "./BestMarketList.styles";
import { useMoveToPage } from "../../../../commons/hooks/customs/useMoveToPage";
import { useQueryFetchUseditemsOfTheBest } from "../../../../commons/hooks/queries/useQueryFetchUseditemsOfTheBest";
import { useQueryFetchUsedItem } from "../../../../commons/hooks/queries/useQueryFetchUseditem";
import DOMPurify from "dompurify";

function BestMarketList(): JSX.Element {
  const { data: dataProducsData } = useQueryFetchUseditemsOfTheBest();
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.BestProductsSection>
      <h1>베스트 상품</h1>
      <S.BestProductsArticle>
        {(dataProducsData?.fetchUseditemsOfTheBest ?? Array(4).fill(1)).map(
          (el: IUseditem, index) => {
            const result = useQueryFetchUsedItem(el._id, false);
            return (
              <S.BestBoardCard
                key={el._id ?? index}
                onClick={onClickMoveToPage(`/products/${el._id}`)}
              >
                <S.BestBoardImage
                  src={`https://storage.googleapis.com/${
                    (result.data?.fetchUseditem.images ?? "")[0]
                  }`}
                  alt="베스트 상품 이미지"
                />
                <S.BestBoardInfoWrapper>
                  {typeof window !== "undefined" ? (
                    <S.BestBoardInfoTitle
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(result.data?.fetchUseditem.remarks ?? ""),
                      }}
                    ></S.BestBoardInfoTitle>
                  ) : (
                    <S.BestBoardInfoTitle></S.BestBoardInfoTitle>
                  )}

                  <S.InfoSubWrapper>
                    <S.InfoSubLeftWrapper>
                      <S.WriterWrapper>
                        <S.WriterIcon rev={""} />
                        <S.Writer>{result.data?.fetchUseditem.name}</S.Writer>
                        <S.Date>Date: {getDate(result.data?.fetchUseditem.createdAt)}</S.Date>
                      </S.WriterWrapper>
                    </S.InfoSubLeftWrapper>
                    <S.InfoSubRightWrapper>
                      <S.LikeIcon rev={""} />
                      <S.LikeCount>{result.data?.fetchUseditem.pickedCount}</S.LikeCount>
                    </S.InfoSubRightWrapper>
                  </S.InfoSubWrapper>
                </S.BestBoardInfoWrapper>
              </S.BestBoardCard>
            );
          }
        )}
      </S.BestProductsArticle>
    </S.BestProductsSection>
  );
}

export default memo(BestMarketList);
