import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";

export const UPDATE_BOARD = gql`
  mutation updateBoard($boardId: ID!, $password: String, $updateBoardInput: UpdateBoardInput!) {
    updateBoard(boardId: $boardId, password: $password, updateBoardInput: $updateBoardInput) {
      _id
      contents
      title
      youtubeUrl
      images
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export const useMutationUpdateBoard = () => {
  const mutation = useMutation<Pick<IMutation, "updateBoard">, IMutationUpdateBoardArgs>(
    UPDATE_BOARD
  );

  return mutation;
};
