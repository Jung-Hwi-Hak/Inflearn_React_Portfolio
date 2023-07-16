import type { RefObject, ChangeEvent } from "react";

export interface UploadImg01Props {
  index: number;
  fileUrl: string;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  register: any;
  watch: any;
}

export interface UploadImg01UIProps {
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: string;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}
