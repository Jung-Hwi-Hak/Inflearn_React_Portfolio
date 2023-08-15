import { Tooltip } from "antd";
import { getDate } from "../../../../../commons/libraries/utils";
import * as S from "./ProductDetailHeader.styles";
import type { IProductDetailHeaderProps } from "./ProductDetailHeader.types";

export default function BoardDetailHeader(props: IProductDetailHeaderProps): JSX.Element {
  return (
    <>
      <S.Header>
        <S.AvatarWrapper>
          <S.Avatar src="/images/avatar.png" />
          <S.Info>
            <S.Writer>{props.data?.fetchUseditem?.name}</S.Writer>
            <S.CreatedAt>{getDate(props.data?.fetchUseditem?.createdAt)}</S.CreatedAt>
          </S.Info>
        </S.AvatarWrapper>
        <S.IconWrapper>
          <Tooltip
            placement="topRight"
            title={`${props.data?.fetchUseditem.useditemAddress?.address ?? ""}(${
              props.data?.fetchUseditem.useditemAddress?.addressDetail ?? ""
            })`}
          >
            <S.LocationIcon src="/images/board/detail/location.png" />
          </Tooltip>
        </S.IconWrapper>
      </S.Header>
    </>
  );
}
