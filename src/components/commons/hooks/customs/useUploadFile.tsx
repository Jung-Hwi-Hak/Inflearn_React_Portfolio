import { type ChangeEvent, useRef, type RefObject } from "react";
import { checkValidationImage } from "../../../../commons/libraries/validation/checkValidationImage";

export const useUploadFile = () => {
  const fileRef = useRef<HTMLInputElement>(null);

  const onClickUpload = (ref: RefObject<HTMLInputElement>) => (): void => {
    ref.current?.click();
  };

  const onChangeFile =
    (fileUrls: any, setFileUrls: any, index: number, files: any, setFiles: any) =>
    (event: ChangeEvent<HTMLInputElement>): void => {
      const file = event.target.files?.[0];
      const isValid = checkValidationImage(file);
      if (!isValid || file === undefined) return;

      try {
        const result = URL.createObjectURL(file);

        const tempFiles = [...files];
        tempFiles[index] = file;
        setFiles(tempFiles);

        const tempUrls = [...fileUrls];
        tempUrls[index] = result;
        setFileUrls(tempUrls);
        console.log("완료");
      } catch (error) {
        console.log("에러?");
      }
    };

  return {
    onClickUpload,
    onChangeFile,
    fileRef,
  };
};
