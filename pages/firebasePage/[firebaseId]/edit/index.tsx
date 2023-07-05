import { useRouter } from "next/router";
import FirebaseWriterPage from "../../../../src/components/units/firebase/writer/FirebaseWriter.container";
import { useState, useEffect } from "react";
import {
  type DocumentData,
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore/lite";
import { firebaseApp } from "../../../../src/commons/libraries/firebase";

export default function FirebaseEdit(): JSX.Element {
  const router = useRouter();
  const [firebaseEditBoard, setFirebaseEditBoard] = useState<DocumentData>();

  useEffect(() => {
    const fetchFirebaseEditBoard = async (): Promise<void> => {
      const db = getFirestore(firebaseApp);
      const docRef = doc(db, "firebaseBoard", String(router.query.firebaseId));

      const docSnap = await getDoc(docRef);
      setFirebaseEditBoard(docSnap.data());
    };
    void fetchFirebaseEditBoard();
  }, []);

  return (
    <FirebaseWriterPage isEdit={true} firebaseEditBoard={firebaseEditBoard} />
  );
}
