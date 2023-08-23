import { memo } from "react";
import * as S from "../../../../commons/emotions/mypage/body.styles";
import type { IPointTransaction } from "../../../../../commons/types/generated/types";
import { getDate } from "../../../../../commons/libraries/utils";
import { useMyPointAllHistory } from "../../../../commons/hooks/customs/mypage/useMyPointAllHistory";
function MyPointAllHistory(): JSX.Element {
  const { data } = useMyPointAllHistory();
  return (
    <>
      <S.HeaderRow>
        <S.HeaderColumnDate>날짜</S.HeaderColumnDate>
        <S.HeaderColumnTitle>내용</S.HeaderColumnTitle>
        <S.HeaderColumnHistory>거래 및 충전 내역</S.HeaderColumnHistory>
        <S.HeaderColumnAmount>잔액</S.HeaderColumnAmount>
      </S.HeaderRow>
      {(data?.fetchPointTransactions ?? new Array(10).fill(1)).map(
        (el: IPointTransaction, index: number) => (
          <S.Row key={el._id ?? index}>
            <S.ColumnDate>{getDate(el?.createdAt)}</S.ColumnDate>
            <S.ColumnTitle status={el?.status === "구매"}>{el.status}</S.ColumnTitle>
            <S.ColumnHistory status={el?.status === "구매"}>
              {el?.status === "구매" ? "" : "+"}
              {`${el?.amount?.toLocaleString("ko-KR")}원`}
            </S.ColumnHistory>
            <S.ColumnAmount>{`${el?.balance?.toLocaleString("ko-KR")}원`}</S.ColumnAmount>
          </S.Row>
        )
      )}
    </>
  );
}

export default memo(MyPointAllHistory);
