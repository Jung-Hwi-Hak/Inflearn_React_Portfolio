import type { IQuery } from "../../../../commons/types/generated/types";
import type { MouseEvent, ChangeEvent } from "react";

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickOpenDeleteModal: (event: MouseEvent<HTMLImageElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  toggleDeleteModal: () => void;
  isOpenDeleteModal: boolean;
}
