import { memo } from "react";
import { getDate } from "../../../../../commons/libraries/utils";
import type { IUseditem } from "../../../../../commons/types/generated/types";
import * as S from "./BestProductList.styles";
import { useMoveToPage } from "../../../../commons/hooks/customs/useMoveToPage";
import { useQueryFetchUseditemsOfTheBest } from "../../../../commons/hooks/queries/useQueryFetchUseditemsOfTheBest";
import DOMPurify from "dompurify";

function BestProductList(): JSX.Element {
  const { data: dataProducsData } = useQueryFetchUseditemsOfTheBest();
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.BestProductsSection>
      <h1>베스트 상품</h1>
      <S.BestProductsArticle>
        {(dataProducsData?.fetchUseditemsOfTheBest ?? Array(4).fill(1)).map(
          (el: IUseditem, index) => {
            return (
              <S.BestProductCard
                key={el._id ?? index}
                onClick={onClickMoveToPage(`/products/${el._id}`)}
              >
                <S.BestProductImage
                  src={`https://storage.googleapis.com/${(el.images ?? "")[0]}`}
                  alt="베스트 상품 이미지"
                />
                <S.BestProductInfoWrapper>
                  {typeof window !== "undefined" ? (
                    <S.BestProductInfoTitle
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(el.remarks ?? ""),
                      }}
                    ></S.BestProductInfoTitle>
                  ) : (
                    <S.BestProductInfoTitle></S.BestProductInfoTitle>
                  )}

                  <S.InfoSubWrapper>
                    <S.InfoSubLeftWrapper>
                      <S.WriterWrapper>
                        <S.WriterIcon rev={""} />
                        <S.Writer>{el.name}</S.Writer>
                        <S.Date>Date: {getDate(el.createdAt)}</S.Date>
                      </S.WriterWrapper>
                    </S.InfoSubLeftWrapper>
                    <S.InfoSubRightWrapper>
                      <S.PickIcon rev={""} />
                      <S.PickCount>{el.pickedCount}</S.PickCount>
                    </S.InfoSubRightWrapper>
                  </S.InfoSubWrapper>
                </S.BestProductInfoWrapper>
              </S.BestProductCard>
            );
          }
        )}
      </S.BestProductsArticle>
    </S.BestProductsSection>
  );
}

export default memo(BestProductList);
