import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../../commons/types/generated/types";

const FETCH_USEDITEMS_IPICKED = gql`
  query fetchUseditemsIPicked($search: String) {
    fetchUseditemsIPicked(search: $search) {
      _id
      name
      remarks
      contents
      price
      seller {
        _id
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
