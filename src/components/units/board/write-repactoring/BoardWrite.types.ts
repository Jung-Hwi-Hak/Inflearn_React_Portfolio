import type { IQuery } from "../../../../commons/types/generated/types";
export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface ISubmitButtonProps {
  buttonState: boolean;
}
