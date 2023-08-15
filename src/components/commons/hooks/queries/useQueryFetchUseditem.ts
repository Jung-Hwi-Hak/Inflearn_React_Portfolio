import { gql, useQuery } from "@apollo/client";
import type { IQuery, IQueryFetchUseditemArgs } from "../../../../commons/types/generated/types";
const DefaultInfo = gql`
  fragment defaultInfo on Useditem {
    _id
    name
    remarks
    contents
    price
    tags
    images
    pickedCount
    createdAt
  }
`;

// const FETCH_USED_ITEM = gql`
//   query fetchUseditem($useditemId: ID!) {
//     fetchUseditem(useditemId: $useditemId) {
//       ...defaultInfo
//     }
//   }
//   ${DefaultInfo}
// `;

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

export const useQueryFetchUsedItem = (useditemId: string) => {
  const result = useQuery<Pick<IQuery, "fetchUseditem">, IQueryFetchUseditemArgs>(
    FETCH_USED_DETAIL_ITEM,
    {
      variables: {
        useditemId,
      },
    }
  );
  return result;
};
