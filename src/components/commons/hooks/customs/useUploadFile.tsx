import { gql, useMutation } from "@apollo/client";
import { type ChangeEvent, useRef, type RefObject } from "react";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import { checkValidationImage } from "../../../../commons/libraries/validation/checkValidationImage";
import { Modal } from "antd";

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export const useUploadFile = () => {
  const fileRef = useRef<HTMLInputElement>(null);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onClickUpload = (ref: RefObject<HTMLInputElement>) => (): void => {
    console.log(ref);
    ref.current?.click();
  };

  // ! 파일 변경 이벤트 함수
  const onChangeFileUrls = (
    fileUrl: string,
    index: number,
    fileUrls: any,
    setFileUrls: any
  ): void => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const onChangeFile =
    (fileUrls: any, setFileUrls: any, index: number) =>
    async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
      const file = event.target.files?.[0];
      const isValid = checkValidationImage(file);
      if (!isValid) return;

      try {
        const result = await uploadFile({ variables: { file } });
        if (result.data === undefined || result.data === null) return;
        onChangeFileUrls(
          result.data.uploadFile.url,
          index,
          fileUrls,
          setFileUrls
        );
      } catch (error) {
        Modal.error({ content: error });
      }
    };

  return {
    onClickUpload,
    onChangeFile,
    fileRef,
  };
};
