import type { UploadImg01UIProps } from "./UploadsImg01.types";
import * as S from "./UploadsImg01.styles";
export default function UploadImg01UI(props: UploadImg01UIProps): JSX.Element {
  return (
    <>
      {props.fileUrl !== "" ? (
        <S.UploadImg
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <S.UploadButton onClick={props.onClickUpload}>+</S.UploadButton>
      )}
      <S.UploadInput
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
