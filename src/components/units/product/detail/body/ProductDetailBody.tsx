import * as S from "./ProductDetailBody.styles";
import type { IProductDetailBodyProps } from "./ProductDetailBody.types";
import DOMPurify from "dompurify";
import { v4 as uuidv4 } from "uuid";
import Slider from "react-slick";
import { useProductDetailBody } from "../../../../commons/hooks/customs/product/useProductDetailBody";
import { memo } from "react";
import KakaoMapDetail from "../../../../commons/kakaomap/kakaomapDetail/kakaomap.index";

function BoardDetailBody(props: IProductDetailBodyProps): JSX.Element {
  const { focusImg, settings, onClickPick } = useProductDetailBody();

  return (
    <>
      <S.Body>
        <S.ProductInfoWrapper>
          <S.ProductInfoSubWrapper>
            <S.Remarks>{props.data?.fetchUseditem?.remarks}</S.Remarks>
            <S.Name>{props.data?.fetchUseditem?.name}</S.Name>
            <S.Price>{props.data?.fetchUseditem?.price?.toLocaleString("ko-KR")}원</S.Price>
          </S.ProductInfoSubWrapper>
          <S.IWrapper>
            <S.PickIcon rev={undefined} onClick={onClickPick} />
            <S.PickCount>{props.data?.fetchUseditem.pickedCount}</S.PickCount>
          </S.IWrapper>
        </S.ProductInfoWrapper>
        {props.data?.fetchUseditem.images?.[0] !== undefined &&
        props.data?.fetchUseditem.images?.[0] !== "none" ? (
          <>
            <Slider {...settings} slide="">
              {props.data?.fetchUseditem?.images
                ?.filter((el) => el)
                .map((el) => (
                  <S.SlideUploadImage key={uuidv4()} src={`https://storage.googleapis.com/${el}`} />
                ))}
            </Slider>
            <S.UploadImageWrapper>
              {props.data?.fetchUseditem?.images
                ?.filter((el) => el)
                .map((el, index) => (
                  <S.UploadImage
                    key={uuidv4()}
                    id={`img_${index}`}
                    className="product_imgs"
                    focusImg={focusImg}
                    src={`https://storage.googleapis.com/${el}`}
                  />
                ))}
            </S.UploadImageWrapper>
          </>
        ) : (
          <></>
        )}
        {typeof window !== "undefined" ? (
          <S.Contents
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(props.data?.fetchUseditem?.contents ?? ""),
            }}
          />
        ) : (
          <S.Contents></S.Contents>
        )}
        <S.Tag>{props.data?.fetchUseditem?.tags?.[0]}</S.Tag>
        <S.Line />
        {props.data?.fetchUseditem.useditemAddress?.lat ? (
          <>
            <KakaoMapDetail
              address={props.data?.fetchUseditem.useditemAddress?.address}
              addressDetail={props.data?.fetchUseditem.useditemAddress?.addressDetail}
              lat={props.data?.fetchUseditem.useditemAddress?.lat}
              lng={props.data?.fetchUseditem.useditemAddress?.lng}
            />
            <S.Line />
          </>
        ) : (
          <></>
        )}
      </S.Body>
    </>
  );
}

export default memo(BoardDetailBody);
