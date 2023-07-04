import type { ChangeEvent, MutableRefObject } from "react";

export interface FirebaseWriterUIProps {
  onClickSubmit: () => Promise<void>;
  onClickCancel: () => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  writerInputRef: MutableRefObject<any>;
  titleInputRef: MutableRefObject<any>;
  contentsInputRef: MutableRefObject<any>;
}
