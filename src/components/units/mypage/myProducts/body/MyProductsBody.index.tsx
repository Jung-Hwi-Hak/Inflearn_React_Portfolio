import { memo } from "react";
import * as S from "../../../../commons/emotions/commonsListStyle";
import type { IBoardListBodyProps } from "./MyProductsBody.types";
import { getDate } from "../../../../../commons/libraries/utils";
import type { IUseditem } from "../../../../../commons/types/generated/types";
import { useMyProductsBody } from "../../../../commons/hooks/customs/mypage/useMyProductsBody";
function MyPageBody(props: IBoardListBodyProps): JSX.Element {
  const { checkDeleted } = useMyProductsBody();

  return (
    <>
      <S.HeaderRow>
        <S.ColumnId>ID</S.ColumnId>
        <S.ColumnTitle>제목</S.ColumnTitle>
        <S.SoldOut></S.SoldOut>
        {props.isFocus ? (
          <S.ColunmSellerName>판매자</S.ColunmSellerName>
        ) : (
          <S.ColunmSellerName></S.ColunmSellerName>
        )}
        <S.ColunmPrice>판매가격</S.ColunmPrice>
        <S.ColunmDate>날짜</S.ColunmDate>
      </S.HeaderRow>
      {(props.data ?? new Array(10).fill(1)).map((el: IUseditem, index: number) => (
        <S.Row key={el._id ?? index}>
          <S.ColumnId>{String(el._id).slice(-4).toUpperCase()}</S.ColumnId>
          <S.ColumnTitle title={el.name} id={el._id} onClick={checkDeleted(el._id)}>
            {el.name}
          </S.ColumnTitle>
          {el.soldAt ? <S.SoldOut>판매완료</S.SoldOut> : <S.SoldOut></S.SoldOut>}
          {props.isFocus ? (
            <S.ColunmSellerName>{el.seller?.name}</S.ColunmSellerName>
          ) : (
            <S.ColunmSellerName></S.ColunmSellerName>
          )}
          <S.ColunmPrice title={`${String(el.price?.toLocaleString("ko-KR"))}원`}>
            &#x20a9;{el.price?.toLocaleString("ko-KR")}
          </S.ColunmPrice>
          <S.ColunmDate>{getDate(el.createdAt)}</S.ColunmDate>
        </S.Row>
      ))}
    </>
  );
}

export default memo(MyPageBody);
