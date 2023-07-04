import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { useRouter } from "next/router";
import { firebaseApp } from "../../../../commons/libraries/firebase";
import { useState, type ChangeEvent, useRef } from "react";
import FirebaseWriterUI from "./FirebaseWriter.presenter";

export default function FirebaseWriterPage(): JSX.Element {
  const writerInputRef = useRef<any>(null);
  const titleInputRef = useRef<any>(null);
  const contentsInputRef = useRef<any>(null);

  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

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
    const firebaseBoard = collection(
      getFirestore(firebaseApp),
      "firebaseBoard"
    );
    await addDoc(firebaseBoard, { writer, title, contents })
      .then(() => {
        alert("게시물 등록 성공");
        void router.push("/firebasePage");
      })
      .catch((err) => {
        alert(err);
      });
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
