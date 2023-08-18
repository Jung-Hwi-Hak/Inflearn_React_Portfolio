import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../../commons/types/generated/types";

const FETCH_USED_ITEMS_BEST = gql`
  query {
    fetchUseditemsOfTheBest {
      _id
      name
      remarks
      images
      createdAt
      pickedCount
      seller {
        name
      }
    }
  }
`;

export const useQueryFetchUseditemsOfTheBest = () => {
  const result = useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(FETCH_USED_ITEMS_BEST);
  return result;
};
