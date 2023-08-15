import { memo } from "react";
import { useUploadFile } from "../../hooks/customs/useUploadFile";
import * as S from "./UploadsImg01.styles";
function UploadsImg(props: any): JSX.Element {
  const { onClickUpload, onChangeFile, fileRef, onCancelFile } = useUploadFile();

  return (
    <>
      {props.fileUrl !== "" ? (
        <S.UploadImgWrapper>
          <S.UploadCancel
            onClick={onCancelFile(
              props.fileUrls,
              props.setFileUrls,
              props.index,
              props.files,
              props.setFiles
            )}
          >
            x
          </S.UploadCancel>
          <S.UploadImg onClick={onClickUpload(fileRef)} src={`${String(props.fileUrl)}`} />
        </S.UploadImgWrapper>
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
