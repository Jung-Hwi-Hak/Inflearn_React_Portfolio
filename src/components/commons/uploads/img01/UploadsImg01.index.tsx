import { useUploadFile } from "../../hooks/customs/useUploadFile";
import * as S from "./UploadsImg01.styles";
export default function UploadsImg(props: any): JSX.Element {
  const { onClickUpload, onChangeFile, fileRef } = useUploadFile();

  return (
    <>
      {props.fileUrl !== "" ? (
        <S.UploadImg
          onClick={onClickUpload(fileRef)}
          src={`https://storage.googleapis.com/${String(props.fileUrl)}`}
        />
      ) : (
        <S.UploadButton onClick={onClickUpload(fileRef)}>+</S.UploadButton>
      )}
      <S.UploadInput
        type="file"
        ref={fileRef}
        onChange={onChangeFile(props.fileUrls, props.setFileUrls, props.index)}
      />
    </>
  );
}
