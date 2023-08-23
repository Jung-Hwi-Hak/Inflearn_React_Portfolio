import { memo } from "react";
import * as S from "../../../../commons/emotions/mypage/body.styles";
import type { IPointTransaction } from "../../../../../commons/types/generated/types";
import { getDate } from "../../../../../commons/libraries/utils";
import { useMyPointChargeHistory } from "../../../../commons/hooks/customs/mypage/useMyPointChargeHistory";
import Paginations01Index from "../../../../commons/paginations/01/Paginations01.index";
function MyPointChargeHistory(): JSX.Element {
  const { data, refetch, countData, startPage, setStartPage, activePage, setActivePage } =
    useMyPointChargeHistory();
  return (
    <>
      <S.HeaderRow>
        <S.HeaderColumnDate>충전일</S.HeaderColumnDate>
        <S.HeaderColumnChargeID>결제 ID</S.HeaderColumnChargeID>
        <S.HeaderColumnHistory>충전내역</S.HeaderColumnHistory>
        <S.HeaderColumnAmount>충전 후 잔액</S.HeaderColumnAmount>
      </S.HeaderRow>
      {(data?.fetchPointTransactionsOfLoading ?? new Array(10).fill(1)).map(
        (el: IPointTransaction, index: number) => (
          <S.Row key={el._id ?? index}>
            <S.ColumnDate>{getDate(el.createdAt)}</S.ColumnDate>
            <S.ColumnChargeID>{el.impUid}</S.ColumnChargeID>
            <S.ColumnHistory status={el.status === "구매"}>
              {el.status === "구매" ? "" : "+"}
              {`${el.amount?.toLocaleString("ko-KR")}원`}
            </S.ColumnHistory>
            <S.ColumnAmount>{`${el.balance?.toLocaleString("ko-KR")}원`}</S.ColumnAmount>
          </S.Row>
        )
      )}
      <S.PaginationWrapper>
        <Paginations01Index
          refetch={refetch}
          dataCount={countData?.fetchPointTransactionsCountOfLoading ?? 0}
          startPage={startPage}
          setStartPage={setStartPage}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </S.PaginationWrapper>
    </>
  );
}

export default memo(MyPointChargeHistory);
