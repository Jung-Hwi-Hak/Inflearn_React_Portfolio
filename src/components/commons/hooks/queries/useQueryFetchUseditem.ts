import { gql, useQuery } from "@apollo/client";
import type { IQuery, IQueryFetchUseditemArgs } from "../../../../commons/types/generated/types";
const DefaultInfo = gql`
  fragment defaultInfo on Useditem {
    _id
    name
    remarks
    contents
    price
    images
    pickedCount
    createdAt
  }
`;

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      ...defaultInfo
    }
  }
  ${DefaultInfo}
`;

const FETCH_USED_DETAIL_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      ...defaultInfo
      useditemAddress {
        address
        zipcode
        addressDetail
      }
    }
  }
  ${DefaultInfo}
`;

export const useQueryFetchUsedItem = (useditemId: string, isDetail: boolean) => {
  const GQL = isDetail ? FETCH_USED_DETAIL_ITEM : FETCH_USED_ITEM;
  const result = useQuery<Pick<IQuery, "fetchUseditem">, IQueryFetchUseditemArgs>(GQL, {
    variables: {
      useditemId,
    },
  });
  console.log(result, "ASNLKASDN");
  return result;
};
