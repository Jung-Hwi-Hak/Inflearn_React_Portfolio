import type { IProductSidebarItemProps } from "./ProductSidebarItem.types";
import * as S from "./ProductSidebarItem.styles";
import { memo, useCallback } from "react";
import { useMyProductsBody } from "../../../../commons/hooks/customs/mypage/useMyProductsBody";

function ProductSidebarItem(props: IProductSidebarItemProps): JSX.Element {
  const { checkDeleted } = useMyProductsBody();
  const handleImgError = useCallback((e: any): void => {
    e.target.src = "./images/no_image.png";
  }, []);
  return (
    <S.ItemWrapper className="sidebar__item__wrapper" onClick={checkDeleted(props.data?._id ?? "")}>
      <S.ItemImg
        src={
          props.data?.images?.[0]
            ? `https://storage.googleapis.com/${String(props.data.images?.[0])}`
            : "./images/no_image.png"
        }
        onError={handleImgError}
      />
      {props.data ? (
        <>
          <S.ItemName>{props.data?.name}</S.ItemName>
          <S.ItemRemarks>{props.data?.remarks}</S.ItemRemarks>
          <S.ItemPrice>{props.data?.price?.toLocaleString("ko-KR")}원</S.ItemPrice>
        </>
      ) : (
        <>
          <S.ItemName></S.ItemName>
          <S.ItemRemarks></S.ItemRemarks>
          <S.ItemPrice></S.ItemPrice>
        </>
      )}
    </S.ItemWrapper>
  );
}

export default memo(ProductSidebarItem);
