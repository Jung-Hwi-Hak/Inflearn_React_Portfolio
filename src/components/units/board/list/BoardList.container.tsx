import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useRouter } from "next/router";
import { useState, type MouseEvent, type ChangeEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

export default function BoardList(): JSX.Element {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  // ? 게시글 조회 API
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  // ? 게시글 총 갯수 조회 API
  const { data: boardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const onClickMoveToBoardNew = (): void => {
    void router.push("/boards/new");
  };

  const onClickMoveToBoardDetail = (
    event: MouseEvent<HTMLDivElement>
  ): void => {
    if (event.target instanceof HTMLDivElement) {
      void router.push(`/boards/${event.target.id}`);
    }
  };

  const onChangeKeyword = (event: ChangeEvent<HTMLInputElement>): void => {
    setKeyword(event.target.value);
  };

  return (
    <BoardListUI
      data={data}
      refetch={refetch}
      refetchBoardsCount={refetchBoardsCount}
      count={boardsCount?.fetchBoardsCount}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onChangeKeyword={onChangeKeyword}
      keyword={keyword}
    />
  );
}
