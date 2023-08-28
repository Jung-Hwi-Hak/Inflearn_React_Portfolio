import { Tooltip } from "antd";
import { getDate } from "../../../../../commons/libraries/utils";
import * as S from "./ProductDetailHeader.styles";
import type { IProductDetailHeaderProps } from "./ProductDetailHeader.types";
import { memo } from "react";

function ProductDetailHeader(props: IProductDetailHeaderProps): JSX.Element {
  return (
    <>
      <S.Header>
        <S.AvatarWrapper>
          <S.Avatar
            src={
              props.data?.fetchUseditem?.seller?.picture !== null
                ? `https://storage.googleapis.com/${String(
                    props.data?.fetchUseditem?.seller?.picture
                  )}`
                : "../images/profile.png"
            }
          />

          <S.Info>
            <S.Writer>{props.data?.fetchUseditem?.seller?.name}</S.Writer>
            <S.CreatedAt>{getDate(props.data?.fetchUseditem?.createdAt)}</S.CreatedAt>
          </S.Info>
        </S.AvatarWrapper>
        <S.IconWrapper>
          <Tooltip
            placement="topRight"
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            title={`${props.data?.fetchUseditem?.useditemAddress?.address}(${props.data?.fetchUseditem?.useditemAddress?.addressDetail})`}
          >
            <S.LocationIcon src="/images/board/detail/location.png" />
          </Tooltip>
        </S.IconWrapper>
      </S.Header>
    </>
  );
}

export default memo(ProductDetailHeader);
