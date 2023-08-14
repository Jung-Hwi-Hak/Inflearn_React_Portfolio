import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationToggleUseditemPickArgs,
} from "../../../../commons/types/generated/types";

const MUTATION_TOGGLE_USEDITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;
export const useMutationToggleUseditemPick = () => {
  const mutation = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(MUTATION_TOGGLE_USEDITEM_PICK);
  return mutation;
};
