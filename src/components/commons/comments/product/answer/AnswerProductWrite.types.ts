export interface IAnswerProductWriteProps {
  isEdit?: boolean;
  onToggleAnswer?: () => void;
  onToggleEdit?: () => void;
  useditemQuestionId?: string;
  useditemQuestionAnswerId?: string;
  children?: JSX.Element;
}
