import InfiniteScroll from "react-infinite-scroller";
import CommentsProductView from "../../../src/components/commons/comments/product/view/CommentsBoardView.index";
import CommonetsProductWrite from "../../../src/components/commons/comments/product/wirte/CommentsBoardWrite.index";
import { useQueryIdChecker } from "../../../src/components/commons/hooks/customs/useQueryIdChecker";
import ProductDetailIndex from "../../../src/components/units/product/detail/ProductDetail.index";
import { useQueryFetchUseditemQuestions } from "../../../src/components/commons/hooks/queries/useQueryFetchUseditemQuestions";

export default function BoardDetailPage(): JSX.Element {
  const { id } = useQueryIdChecker("productId");
  const { data, fetchMore } = useQueryFetchUseditemQuestions(id);

  const onLoadMore = () => {
    if (!data) return;

    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestions)
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  return (
    <>
      <ProductDetailIndex />
      <CommonetsProductWrite>
        <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
          {data?.fetchUseditemQuestions.map((el) => (
            <CommentsProductView key={el._id} el={el} />
          )) ?? <></>}
        </InfiniteScroll>
      </CommonetsProductWrite>
    </>
  );
}

// export default memo(BoardDetailPage);
