import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchUseditemsISoldArgs,
} from "../../../../commons/types/generated/types";

const FETCH_USEDITEMS_ISOLD = gql`
  query fetchUseditemsISold($search: String, $page: Int) {
    fetchUseditemsISold(search: $search, page: $page) {
      _id
      name
      remarks
      contents
      price
      tags
      soldAt
      createdAt
    }
  }
`;

export const useQueryFetchUseditemsISold = () => {
  const result = useQuery<Pick<IQuery, "fetchUseditemsISold">, IQueryFetchUseditemsISoldArgs>(
    FETCH_USEDITEMS_ISOLD
  );
  return result;
};
