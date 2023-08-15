import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";

const CREATE_USEDITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
    }
  }
`;

export const useMutationCreateUseditem = () => {
  const mutation = useMutation<Pick<IMutation, "createUseditem">, IMutationCreateUseditemArgs>(
    CREATE_USEDITEM
  );

  return mutation;
};
