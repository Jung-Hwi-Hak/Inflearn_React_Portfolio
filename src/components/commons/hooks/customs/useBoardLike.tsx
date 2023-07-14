import { useMutationDisLikeBoard } from "../mutations/useMutationDisLikeBoard";
import { useMutationLikeBoard } from "../mutations/useMutationLikeBoard";
import { FETCH_BOARD } from "../queries/useQueryFetchBoard";

interface IUseBoardLikeArgs {
  boardId: string;
}

interface IUseBoardLikeReturn {
  onClickLike: () => void;
  onClickDisLike: () => void;
}

export const useBoardLike = (args: IUseBoardLikeArgs): IUseBoardLikeReturn => {
  const [likeBoard] = useMutationLikeBoard();
  const [disLikeBoard] = useMutationDisLikeBoard();

  const onClickLike = async () => {
    await likeBoard({
      variables: { boardId: args.boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: args.boardId },
        },
      ],
    });
  };

  const onClickDisLike = async () => {
    await disLikeBoard({
      variables: { boardId: args.boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: args.boardId },
        },
      ],
    });
  };

  return {
    onClickDisLike,
    onClickLike,
  };
};
