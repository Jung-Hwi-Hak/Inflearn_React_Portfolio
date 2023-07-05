import UploadImg01UI from "./UploadsImg01.presenter";
import { useRef } from "react";
import type { ChangeEvent } from "react";
import type { UploadImg01Props } from "./UploadsImg01.types";
import { checkValidationImage } from "../../../../commons/libraries/validation/checkValidationImage";
import { Modal } from "antd";
import { UPLOAD_FILE } from "./UploadsImg01.queries";
import { useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
export default function UploadsImg(props: UploadImg01Props): JSX.Element {
  const fileRef = useRef<HTMLInputElement>(null);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onClickUpload = (): void => {
    fileRef.current?.click();
  };

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0];
    const isValid = checkValidationImage(file);

    if (!isValid) return;

    try {
      const result = await uploadFile({ variables: { file } });
      if (result.data === undefined || result.data === null) return;
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error) {
      Modal.error({ content: error });
    }
  };

  return (
    <UploadImg01UI
      onChangeFile={onChangeFile}
      onClickUpload={onClickUpload}
      fileUrl={props.fileUrl}
      fileRef={fileRef}
    />
  );
}
