import type { DocumentData } from "firebase/firestore/lite";
import type { MouseEvent } from "react";

export interface FirebaseListUIProps {
  onClickMoveToBoardNew: () => void;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
  dataBoards: DocumentData[];
  dataBoardsId: string[];
}
