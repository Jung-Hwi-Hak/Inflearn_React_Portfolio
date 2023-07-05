import {
  collection,
  getDocs,
  getFirestore,
  type DocumentData,
  orderBy,
  query,
} from "firebase/firestore/lite";
import FirebaseListUI from "./FirebaseList.presenter";
import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { firebaseApp } from "../../../../commons/libraries/firebase";
import { useRouter } from "next/router";

export default function FirebaseListPage(): JSX.Element {
  const [dataBoards, setDataBoards] = useState<DocumentData[]>([]);
  const [dataBoardsId, setDataBoardsId] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchFirebaseBoard = async (): Promise<void> => {
      const firebaseBoard = collection(
        getFirestore(firebaseApp),
        "firebaseBoard"
      );
      const result = await getDocs(
        // qeury - orderBy 를 이용해 게시글 생성 날짜 내림차순으로 정렬
        query(firebaseBoard, orderBy("timestamp", "desc"))
      );
      const firebaseBoards = result.docs.map((el) => el.data());
      const firebaseBoardsId = result.docs.map((el) => el.id);

      setDataBoards(firebaseBoards);
      setDataBoardsId(firebaseBoardsId);
    };

    void fetchFirebaseBoard();
  }, []);

  const onClickMoveToBoardNew = (): void => {
    void router.push("/firebasePage/new");
  };

  const onClickMoveToBoardDetail = (
    event: MouseEvent<HTMLDivElement>
  ): void => {
    void router.push(`/firebasePage/${event.currentTarget.id}`);
  };

  return (
    <FirebaseListUI
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      dataBoards={dataBoards}
      dataBoardsId={dataBoardsId}
    />
  );
}
