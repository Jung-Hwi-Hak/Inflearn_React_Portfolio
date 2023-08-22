import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_USEDITEMS_COUNT_IPICKED = gql`
  query fetchUseditemsCountIPicked {
    fetchUseditemsCountIPicked
  }
`;

export const useQueryFetchUseditemsCountIPicked = () => {
  const result = useQuery<Pick<IQuery, "fetchUseditemsCountIPicked">>(
    FETCH_USEDITEMS_COUNT_IPICKED
  );

  return result;
};
