import { useEffect } from "react";
import { useMutationCreatePointTransactionOfLoading } from "../mutations/useMutationCreatePointTransactionOfLoading";
import { useApolloClient } from "@apollo/client";
import { FETCH_USER_LOGGEDIN } from "../queries/useQueryFetchUserLoggedIn";

declare const window: typeof globalThis & {
  IMP: any;
};

export const usePayment = () => {
  const [mutation] = useMutationCreatePointTransactionOfLoading();
  //   const {data, refetch} = useQueryFetchUserLoggedIn();
  const client = useApolloClient();

  useEffect(() => {
    <script src="https://cdn.iamport.kr/v1/iamport.js"></script>;
    const script = document.createElement("script");
    script.src = "https://cdn.iamport.kr/v1/iamport.js";
    document.head.appendChild(script);
  }, []);

  const onClickPayment = (): void => {
    const IMP = window.IMP;
    IMP.init("imp49910675");
    IMP.request_pay(
      {
        // param
        pg: "kakaopay",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "노르웨이 회전 의자",
        amount: 100,
        buyer_email: "woojo",
        buyer_name: "우주밤",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        // 모바일에서는 결제시 다른 페이지로 이동되기 때문에 결제 후 이동될 url을 적어줘야함
        // m_redirect_url: "http://localhost:3000/section28/28-01-payment"
      },
      async (rsp: any) => {
        if (rsp.success === true) {
          console.log(rsp);
          await mutation({
            variables: {
              impUid: rsp.imp_uid,
            },
            refetchQueries: [{ query: FETCH_USER_LOGGEDIN }],
          });

          await client.refetchQueries({});
        } else {
          console.log(rsp);
          // 결제 실패 시 로직,
        }
      }
    );
  };

  return {
    onClickPayment,
  };
};
