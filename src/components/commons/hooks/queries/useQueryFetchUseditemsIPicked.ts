import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_USEDITEMS_IPICKED = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      _id
      name
      remarks
      contents
      price
      createdAt
      soldAt
      seller {
        name
      }
    }
  }
`;
export const useQueryFetchUseditemsIPicked = () => {
  const result = useQuery<Pick<IQuery, "fetchUseditemsIPicked">, IQueryFetchUseditemsIPickedArgs>(
    FETCH_USEDITEMS_IPICKED,
    { variables: { search: "" } }
  );

  return result;
};
