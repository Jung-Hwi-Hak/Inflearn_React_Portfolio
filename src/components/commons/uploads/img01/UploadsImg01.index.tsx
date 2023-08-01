import { memo } from "react";
import { useUploadFile } from "../../hooks/customs/useUploadFile";
import * as S from "./UploadsImg01.styles";
function UploadsImg(props: any): JSX.Element {
  const { onClickUpload, onChangeFile, fileRef } = useUploadFile();
  console.log("UploadsImg 업로드이미지페이지");
  return (
    <>
      {props.fileUrl !== "" ? (
        <S.UploadImg onClick={onClickUpload(fileRef)} src={`${String(props.fileUrl)}`} />
      ) : (
        <S.UploadButton onClick={onClickUpload(fileRef)}>+</S.UploadButton>
      )}
      <S.UploadInput
        type="file"
        ref={fileRef}
        onChange={onChangeFile(
          props.fileUrls,
          props.setFileUrls,
          props.index,
          props.files,
          props.setFiles
        )}
      />
    </>
  );
}
export default memo(UploadsImg);
