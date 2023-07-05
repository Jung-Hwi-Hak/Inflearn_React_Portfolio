import type { DocumentData } from "firebase/firestore/lite";
import { doc, getDoc, getFirestore } from "firebase/firestore/lite";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { firebaseApp } from "../../../../commons/libraries/firebase";
import FirebaseDetailUI from "./FirebaseDetail.presenter";

export default function FirebaseDetailPage(): JSX.Element {
  const router = useRouter();
  const [detailBoard, setDetailBoard] = useState<DocumentData>();

  useEffect(() => {
    const fetchFirebaseDetailBoard = async (): Promise<void> => {
      const db = getFirestore(firebaseApp);
      const docRef = doc(
        db,
        "firebaseBoard",
        router.asPath.split("/").reverse()[0]
      );

      const docSnap = await getDoc(docRef);
      setDetailBoard(docSnap.data());
    };
    void fetchFirebaseDetailBoard();
  }, []);

  const onClickMoveToFirebaseList = (): void => {
    void router.push("/firebasePage");
  };

  const onClickEditPage = (): void => {
    if (typeof router.query.firebaseId !== "string") return;
    console.log(router.query.firebaseId);
    void router.push(`/firebasePage/${router.query.firebaseId}/edit`);
  };

  return (
    <FirebaseDetailUI
      onClickEditPage={onClickEditPage}
      onClickMoveToFirebaseList={onClickMoveToFirebaseList}
      detailBoard={detailBoard}
    />
  );
}
