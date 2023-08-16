import type { IUseditemQuestionAnswer } from "../../../../../commons/types/generated/types";

export interface IAnswerProductViewProps {
  answersData: IUseditemQuestionAnswer;
  onToggleAnswer?: () => void;
  useditemQuestionId: string;
  children?: JSX.Element;
}
