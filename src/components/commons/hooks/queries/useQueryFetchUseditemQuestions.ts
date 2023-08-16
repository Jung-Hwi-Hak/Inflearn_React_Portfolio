import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_USEDITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($page: Int, $useditemId: ID!) {
    fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
      _id
      contents
      user {
        name
        picture
        email
      }
      createdAt
      updatedAt
    }
  }
`;

export const useQueryFetchUseditemQuestions = (useditemId: string) => {
  const result = useQuery<Pick<IQuery, "fetchUseditemQuestions">, IQueryFetchUseditemQuestionsArgs>(
    FETCH_USEDITEM_QUESTIONS,
    {
      variables: {
        useditemId,
      },
    }
  );
  console.log(result, "asdknalskdnlks");
  return result;
};
