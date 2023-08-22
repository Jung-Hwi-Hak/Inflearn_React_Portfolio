import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../../commons/types/generated/types";

const FETCH_USEDITEMS_COUNT_ISOLD = gql`
  query fetchUseditemsCountISold {
    fetchUseditemsCountISold
  }
`;

export const useQueryFetchUseditemsCountISold = () => {
  const result = useQuery<Pick<IQuery, "fetchUseditemsCountISold">>(FETCH_USEDITEMS_COUNT_ISOLD);
  return result;
};
