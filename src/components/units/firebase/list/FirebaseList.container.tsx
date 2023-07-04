import {
  collection,
  getDocs,
  getFirestore,
  type DocumentData,
} from "firebase/firestore/lite";
import FirebaseListUI from "./FirebaseList.presenter";
import { useEffect, useState } from "react";
import { firebaseApp } from "../../../../commons/libraries/firebase";
import { useRouter } from "next/router";

export default function FirebaseListPage(): JSX.Element {
  const [dataBoards, setDataBoards] = useState<DocumentData[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchFirebaseBoard = async (): Promise<void> => {
      const firebaseBoard = collection(
        getFirestore(firebaseApp),
        "firebaseBoard"
      );
      const result = await getDocs(firebaseBoard);
      const firebaseBoards = result.docs.map((el) => el.data());
      setDataBoards(firebaseBoards);
    };

    void fetchFirebaseBoard();
  }, []);

  const onClickMoveToBoardNew = (): void => {
    void router.push("/firebasePage/new");
  };

  return (
    <FirebaseListUI
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      dataBoards={dataBoards}
    />
  );
}
