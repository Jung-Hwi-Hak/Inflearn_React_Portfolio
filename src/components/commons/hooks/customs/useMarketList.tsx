import { useCallback, useState } from "react";
import { useQueryFetchUsedItems } from "../queries/useQueryFetchUsedItems";

export const useProductList = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isSold, setIsSold] = useState(false);
  const { data, refetch, fetchMore } = useQueryFetchUsedItems(isSold);
  const onChangeIsSold = useCallback(() => {
    setIsSold((prev) => !prev);
  }, []);

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
    onChangeIsSold,
    searchKeyword,
    setSearchKeyword,
  };
};
