import { useCallback, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { useQueryFetchUsedItems } from "../../queries/useQueryFetchUsedItems";
import type {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../../commons/types/generated/types";
import type { ApolloQueryResult } from "@apollo/client";
import { useRecoilState } from "recoil";
import { productIsSoldState } from "../../../../../commons/stores";

interface IUseProductListReturn {
  data: Pick<IQuery, "fetchUseditems"> | undefined;
  refetch: (
    variables?: Partial<IQueryFetchUseditemsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
  onLoadMore: () => void;
  searchKeyword: string;
  setSearchKeyword: Dispatch<SetStateAction<string>>;
}

export const useProductList = (): IUseProductListReturn => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isSold] = useRecoilState(productIsSoldState);
  const { data, refetch, fetchMore } = useQueryFetchUsedItems(isSold);

  const onLoadMore = useCallback(() => {
    if (data === undefined) return;
    void fetchMore({
      variables: { page: Math.ceil(data.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult?.fetchUseditems === undefined)
          return { fetchUseditems: [...prev.fetchUseditems] };

        return {
          fetchUseditems: [...prev.fetchUseditems, ...fetchMoreResult.fetchUseditems],
        };
      },
    });
  }, [data]);

  return {
    data,
    refetch,
    onLoadMore,
    searchKeyword,
    setSearchKeyword,
  };
};
