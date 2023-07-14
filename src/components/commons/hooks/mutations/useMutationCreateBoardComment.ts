import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../commons/types/generated/types";

const CREATE_BOARD_COMMENT = gql`
  mutation createBoardComment(
    $boardId: ID!
    $createBoardCommentInput: CreateBoardCommentInput!
  ) {
    createBoardComment(
      boardId: $boardId
      createBoardCommentInput: $createBoardCommentInput
    ) {
      _id
    }
  }
`;

export const useMutationCreateBoardComment = () => {
  const mutation = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  return mutation;
};
