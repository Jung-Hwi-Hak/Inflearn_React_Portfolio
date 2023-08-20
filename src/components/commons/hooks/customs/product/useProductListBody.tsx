import * as _ from "lodash";
import { FETCH_USED_DETAIL_ITEM } from "../../queries/useQueryFetchUseditem";
import { useApolloClient } from "@apollo/client";
import type { MouseEvent } from "react";

export const useProductListBody = () => {
  const client = useApolloClient();
  const prefetchProductDebounce = _.debounce(async (useditemId: string): Promise<void> => {
    await client.query({
      query: FETCH_USED_DETAIL_ITEM,
      variables: { useditemId },
    });
  }, 2000);
  const onMouseOver = (event: MouseEvent<HTMLDivElement>) => {
    void prefetchProductDebounce(event.currentTarget.id);
  };

  return { onMouseOver };
};
