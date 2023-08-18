import { gql, useQuery } from "@apollo/client";
import type { QueryResult } from "@apollo/client";
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

const Seller = gql`
  fragment seller on User {
    _id
    email
    name
    picture
  }
`;

const UseditemAddress = gql`
  fragment useditemAddress on UseditemAddress {
    address
    addressDetail
    lat
    lng
  }
`;

export const FETCH_USED_DETAIL_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      ...defaultInfo
      useditemAddress {
        ...useditemAddress
      }
      seller {
        ...seller
      }
    }
  }
  ${DefaultInfo}
  ${Seller}
  ${UseditemAddress}
`;

export const useQueryFetchUsedItem = (
  useditemId: string
): QueryResult<Pick<IQuery, "fetchUseditem">, IQueryFetchUseditemArgs> => {
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
