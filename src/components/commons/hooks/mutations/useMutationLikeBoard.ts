import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationLikeBoardArgs,
} from "../../../../commons/types/generated/types";

export const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useMutationLikeBoard = () => {
  const mutation = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  return mutation;
};
