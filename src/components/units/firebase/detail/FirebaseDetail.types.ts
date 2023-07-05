import type { DocumentData } from "firebase/firestore/lite";

export interface FirebaseDetailUIProps {
  onClickEditPage: () => void;
  onClickMoveToFirebaseList: () => void;
  detailBoard?: DocumentData;
}
