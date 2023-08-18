import type { IProductSidebarItemProps } from "./ProductSidebarItem.types";
import * as S from "./ProductSidebarItem.styles";
import { useCallback } from "react";
import { useMoveToPage } from "../../../../commons/hooks/customs/useMoveToPage";
export default function ProductSidebarItem(props: IProductSidebarItemProps): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const handleImgError = useCallback((e: any): void => {
    e.target.src = "./images/no_image.png";
  }, []);
  return (
    <S.ItemWrapper
      className="sidebar__item__wrapper"
      onClick={onClickMoveToPage(`/products/${props.data._id}`)}
    >
      <S.ItemImg
        src={
          props.data.images?.[0]
            ? `https://storage.googleapis.com/${String(props.data.images?.[0])}`
            : "./images/no_image.png"
        }
        onError={handleImgError}
      />
      <S.ItemName>{props.data.name}</S.ItemName>
      <S.ItemRemarks>{props.data.remarks}</S.ItemRemarks>
      <S.ItemPrice>{props.data.price}원</S.ItemPrice>
    </S.ItemWrapper>
  );
}
