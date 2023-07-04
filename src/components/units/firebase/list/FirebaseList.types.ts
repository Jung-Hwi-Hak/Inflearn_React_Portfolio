import type { DocumentData } from "firebase/firestore/lite";

export interface FirebaseListUIProps {
  onClickMoveToBoardNew: () => void;
  dataBoards: DocumentData[];
}
