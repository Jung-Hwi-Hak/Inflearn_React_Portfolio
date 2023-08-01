import { Tooltip } from "antd";
import { getDate } from "../../../../../commons/libraries/utils";
import * as S from "./BoardDetailHeader.styles";
import type { IBoardDetailHeaderProps } from "./BoardDetailHeader.types";

export default function BoardDetailHeader(props: IBoardDetailHeaderProps): JSX.Element {
  return (
    <>
      <S.Header>
        <S.AvatarWrapper>
          <S.Avatar src="/images/avatar.png" />
          <S.Info>
            <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
            <S.CreatedAt>{getDate(props.data?.fetchBoard?.createdAt)}</S.CreatedAt>
          </S.Info>
        </S.AvatarWrapper>
        <S.IconWrapper>
          <S.LinkIcon src="/images/board/detail/link.png" />
          <Tooltip
            placement="topRight"
            title={`${props.data?.fetchBoard.boardAddress?.address ?? ""}
            ${props.data?.fetchBoard.boardAddress?.addressDetail ?? ""}`}
          >
            <S.LocationIcon src="/images/board/detail/location.png" />
          </Tooltip>
        </S.IconWrapper>
      </S.Header>
    </>
  );
}
