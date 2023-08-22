import { memo } from "react";
import * as S from "../../../board/list/body/BoardListBody.styles";
import type { IBoardListBodyProps } from "./MyProductsBody.types";
import { getDate } from "../../../../../commons/libraries/utils";
import type { IUseditem } from "../../../../../commons/types/generated/types";
import { useMyProductsBody } from "../../../../commons/hooks/customs/mypage/useMyProductsBody";
function MyPageBody(props: IBoardListBodyProps): JSX.Element {
  const { checkDeleted } = useMyProductsBody();
  return (
    <>
      <S.TableTop />
      <S.HeaderRow>
        <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        {props.isFocus ? <S.ColumnBasic>판매자</S.ColumnBasic> : ""}
        <S.ColumnHeaderBasic>판매가격</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
      </S.HeaderRow>
      {(props.iSoldData ?? new Array(10).fill(1)).map((el: IUseditem, index: number) => (
        <S.Row key={el._id ?? index}>
          <S.ColumnBasic>{String(el._id).slice(-4).toUpperCase()}</S.ColumnBasic>
          <S.ColumnTitle id={el._id} onClick={checkDeleted(el._id)}>
            {el.name}
          </S.ColumnTitle>

          {props.isFocus ? <S.ColumnBasic>{el.seller?.name}</S.ColumnBasic> : ""}
          <S.ColumnBasic>&#x20a9;{el.price?.toLocaleString("ko-KR")}</S.ColumnBasic>
          <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
        </S.Row>
      ))}
      <S.TableBottom />
    </>
  );
}

export default memo(MyPageBody);
