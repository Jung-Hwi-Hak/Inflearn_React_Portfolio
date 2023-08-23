import { useCallback, useEffect } from "react";
import { useMutationCreatePointTransactionOfLoading } from "../mutations/useMutationCreatePointTransactionOfLoading";
import { FETCH_USER_LOGGEDIN } from "../queries/useQueryFetchUserLoggedIn";
import { useMutationCreatePointBuyingAndSelling } from "../mutations/useMutationCreatePointBuyingAndSelling";
import type { IUseditem } from "../../../../commons/types/generated/types";
import { useRecoilState } from "recoil";
import { userIDState, userNameState } from "../../../../commons/stores";
import { FETCH_USED_ITEMS } from "../queries/useQueryFetchUsedItems";
import { FETCH_POINT_TRANSACTIONS } from "../queries/useQueryFetchPointTransactions";
import { useModal } from "./useModal";
import { FETCH_POINT_TRANSACTIONS_SELLING } from "../queries/useQueryFetchPointTransactionsOfSelling";

declare const window: typeof globalThis & {
  IMP: any;
};

interface IBuyData {
  buyData: IUseditem;
}

let IMP: any;

export const usePayment = () => {
  const [pointChargeMutation] = useMutationCreatePointTransactionOfLoading();
  const [pointBuySellMutation] = useMutationCreatePointBuyingAndSelling();
  const [userID] = useRecoilState(userIDState);
  const [userName] = useRecoilState(userNameState);
  //   const {data, refetch} = useQueryFetchUserLoggedIn();
  const { warningModal } = useModal();

  useEffect(() => {
    <script src="https://cdn.iamport.kr/v1/iamport.js"></script>;
    const script = document.createElement("script");
    script.src = "https://cdn.iamport.kr/v1/iamport.js";
    document.head.appendChild(script);
    script.onload = () => {
      IMP = window.IMP;
      IMP.init("imp49910675");
    };
  }, []);

  const onClickPayment = useCallback(
    (buyData: IBuyData) => (): void => {
      IMP.request_pay(
        {
          pg: "kakaopay",
          pay_method: "card",
          // merchant_uid: "ORD20180131-0000011",
          name: buyData.buyData?.name,
          amount: buyData.buyData?.price,
          buyer_email: userID,
          buyer_name: userName,
          // m_redirect_url: "http://localhost:3000/section28/28-01-payment"
        },
        async (rsp: any) => {
          if (rsp.success === true) {
            await pointChargeMutation({
              variables: {
                impUid: rsp.imp_uid,
              },
              refetchQueries: [
                { query: FETCH_USER_LOGGEDIN },
                // { query: FETCH_POINT_TRANSACTIONS },
                // { query: FETCH_POINT_TRANSACTIONS_LOADING },
              ],
              update(cache, { data }) {
                cache.modify({
                  fields: {
                    fetchPointTransactions: (prev) => {
                      return [...prev, data];
                    },
                    fetchPointTransactionsOfLoading: (prev) => {
                      return [...prev, data];
                    },
                  },
                });
              },
            });
          } else {
            warningModal("포인트 충전", "포인트 충전중 오류가 발생했습니다.", true);
            // 결제 실패 시 로직,
          }
        }
      );
    },
    [IMP]
  );

  const onClickBuyPayment = useCallback(
    (buyData: IBuyData, useritemId: string) => (): void => {
      IMP.request_pay(
        {
          pg: "kakaopay",
          pay_method: "card",
          // merchant_uid: "ORD20180131-0000011",
          name: buyData.buyData?.name,
          amount: buyData.buyData?.price,
          buyer_email: userID,
          buyer_name: userName,
          // m_redirect_url: "http://localhost:3000/section28/28-01-payment"
        },
        async (rsp: any) => {
          if (rsp.success === true) {
            await pointBuySellMutation({
              variables: {
                useritemId,
              },
              refetchQueries: [
                { query: FETCH_USER_LOGGEDIN },
                { query: FETCH_USED_ITEMS, variables: { isSoldout: false } },
                { query: FETCH_POINT_TRANSACTIONS },
                { query: FETCH_POINT_TRANSACTIONS_SELLING },
              ],
              update(cache, { data }) {
                cache.modify({
                  fields: {
                    fetchUseditem: (prev) => {
                      return data;
                    },
                  },
                });
              },
            });
          } else {
            warningModal("상품구매", "상품구매중 오류가 발생했습니다.", true);
            // 결제 실패 시 로직,
          }
        }
      );
    },
    [IMP]
  );

  return {
    onClickPayment,
    onClickBuyPayment,
  };
};
