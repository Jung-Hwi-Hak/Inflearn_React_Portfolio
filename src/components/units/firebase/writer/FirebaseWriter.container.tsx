import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore/lite";
import { useRouter } from "next/router";
import { firebaseApp } from "../../../../commons/libraries/firebase";
import { useState, type ChangeEvent, useRef } from "react";
import { v4 as uuid } from "uuid";

import FirebaseWriterUI from "./FirebaseWriter.presenter";
import { getDateHour } from "../../../../commons/libraries/utils";
import type { FirebaseWriterPageProps } from "./FirebaseWriter.types";

export default function FirebaseWriterPage(
  props: FirebaseWriterPageProps
): JSX.Element {
  const writerInputRef = useRef<any>(null);
  const titleInputRef = useRef<any>(null);
  const contentsInputRef = useRef<any>(null);

  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  // ? 게시물 등록 함수
  const onClickSubmit = async (): Promise<void> => {
    console.log(writer === undefined, title === undefined, contents === "");
    if (writer === "") {
      alert("작성자를 입력해주세요.");
      writerInputRef.current.focus();
      return;
    }
    if (title === "") {
      alert("제목을 입력해주세요.");
      titleInputRef.current.focus();
      return;
    }
    if (contents === "") {
      alert("본문을 입력해주세요.");
      contentsInputRef.current.focus();
      return;
    }
    const uuidv4 = uuid();
    const firebaseBoard = collection(
      getFirestore(firebaseApp),
      "firebaseBoard"
    );
    await addDoc(firebaseBoard, {
      uuidv4,
      writer,
      title,
      contents,
      timestamp: getDateHour(),
    })
      .then(() => {
        alert("게시물 등록 성공");
        void router.push("/firebasePage");
      })
      .catch((err) => {
        alert(err);
      });
  };

  const onClickEdit = async (): Promise<void> => {
    console.log(String(router.query.firebaseId));
    const firebaseBoard = getFirestore(firebaseApp);
    const docRef = doc(
      firebaseBoard,
      "firebaseBoad",
      String(router.query.firebaseBoardId)
    );
    await updateDoc(docRef, { writer: "병아리" });
  };

  const onClickCancel = (): void => {
    void router.push("/firebasePage");
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event?.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event?.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>): void => {
    setContents(event?.target.value);
  };

  return (
    <FirebaseWriterUI
      onClickEdit={onClickEdit}
      firebaseEditBoard={props.firebaseEditBoard}
      isEdit={props.isEdit}
      onClickSubmit={onClickSubmit}
      onClickCancel={onClickCancel}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      writerInputRef={writerInputRef}
      titleInputRef={titleInputRef}
      contentsInputRef={contentsInputRef}
    />
  );
}
