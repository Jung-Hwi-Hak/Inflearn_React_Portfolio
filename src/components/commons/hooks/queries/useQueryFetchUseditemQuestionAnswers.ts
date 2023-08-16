import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_USEDITEM_QUESTION_ANSWERS = gql`
  query fetchUseditemQuestionAnswers($useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(useditemQuestionId: $useditemQuestionId) {
      _id
      contents
      user {
        _id
        email
        name
        picture
      }
      createdAt
      updatedAt
    }
  }
`;

export const useQueryFetchUseditemQuestionAnswers = (useditemQuestionId: string) => {
  const result = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USEDITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId,
    },
  });
  return result;
};
