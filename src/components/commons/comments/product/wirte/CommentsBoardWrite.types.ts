import type { IUseditemQuestion } from "../../../../../commons/types/generated/types";

export interface ICommentsProductWriteProps {
  isEdit?: boolean;
  onToggleEdit?: () => void;
  el?: IUseditemQuestion;
  children?: JSX.Element;
}
