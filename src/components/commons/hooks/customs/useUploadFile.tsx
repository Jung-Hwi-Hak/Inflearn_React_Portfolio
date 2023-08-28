import { type ChangeEvent, useRef, type RefObject, useCallback } from "react";
import { checkValidationImage } from "../../../../commons/libraries/validation/checkValidationImage";
interface IReturns {
  onClickUpload: (ref: RefObject<HTMLInputElement>) => () => void;

  onChangeFile: (
    fileUrls: any,
    setFileUrls: any,
    index: number,
    files: any,
    setFiles: any
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  fileRef: RefObject<HTMLInputElement>;

  onCancelFile: (
    fileUrls: any,
    setFileUrls: any,
    index: number,
    files: any,
    setFiles: any
  ) => () => void;
}

export const useUploadFile = (): IReturns => {
  const fileRef = useRef<HTMLInputElement>(null);

  const onClickUpload = useCallback(
    (ref: RefObject<HTMLInputElement>) => (): void => {
      ref.current?.click();
    },
    []
  );

  const onChangeFile = useCallback(
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
        } catch (error) {}
      },
    []
  );

  const onCancelFile = useCallback(
    (fileUrls: any, setFileUrls: any, index: number, files: any, setFiles: any) => () => {
      const tempFiles = [...files];
      tempFiles[index] = "";
      setFiles(tempFiles);

      const tempUrls = [...fileUrls];
      tempUrls[index] = "";
      setFileUrls(tempUrls);
    },
    []
  );

  return {
    onClickUpload,
    onChangeFile,
    fileRef,
    onCancelFile,
  };
};
