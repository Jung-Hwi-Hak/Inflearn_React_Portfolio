export interface IAnswerProductWriteProps {
  contents?: string;
  isEdit?: boolean;
  onToggleAnswer?: () => void;
  onToggleEdit?: () => void;
  useditemQuestionId?: string;
  useditemQuestionAnswerId?: string;
  children?: JSX.Element;
}
