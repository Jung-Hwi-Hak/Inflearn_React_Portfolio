// import InfiniteScroll from "react-infinite-scroller";
// import CommentsBoardView from "../../../src/components/commons/comments/board/view/CommentsBoardView.index";
// import CommonetsBoardWrite from "../../../src/components/commons/comments/board/wirte/CommentsBoardWrite.index";
// import { useQueryIdChecker } from "../../../src/components/commons/hooks/customs/useQueryIdChecker";
// import { useQueryFetchBoardComments } from "../../../src/components/commons/hooks/queries/useQueryFetchBoardComments";
import ProductDetailIndex from "../../../src/components/units/market/detail/ProductDetail.index";

export default function BoardDetailPage(): JSX.Element {
  // const { id } = useQueryIdChecker("boardId");
  // const { data, fetchMore } = useQueryFetchBoardComments({ boardId: id });

  // const onLoadMore = () => {
  //   if (!data) return;

  //   void fetchMore({
  //     variables: {
  //       page: Math.ceil(data?.fetchBoardComments.length / 10) + 1,
  //     },
  //     updateQuery: (prev, { fetchMoreResult }) => {
  //       if (!fetchMoreResult?.fetchBoardComments)
  //         return { fetchBoardComments: [...prev.fetchBoardComments] };
  //       return {
  //         fetchBoardComments: [...prev.fetchBoardComments, ...fetchMoreResult.fetchBoardComments],
  //       };
  //     },
  //   });
  // };

  return (
    <>
      <ProductDetailIndex />
      {/* <CommonetsBoardWrite>
        <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
          {data?.fetchBoardComments.map((el) => <CommentsBoardView key={el._id} el={el} />) ?? (
            <></>
          )}
        </InfiniteScroll>
      </CommonetsBoardWrite> */}
    </>
  );
}

// export default memo(BoardDetailPage);
