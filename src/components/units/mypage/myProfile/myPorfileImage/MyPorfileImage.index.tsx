import { memo } from "react";
import * as S from "./MyPorfileImage.styles";
import { useMyPorfileImage } from "../../../../commons/hooks/customs/mypage/useMyPorfileImage";

function MyPorfileImage(): JSX.Element {
  const {
    userData,
    userImgUrls,
    handleImgError,
    onClickImg,
    userImgRef,
    onChangeImage,
    onClickUploadImg,
    userImgFile,
    onCancelFile,
  } = useMyPorfileImage();

  return (
    <S.Wrapper>
      <S.ImgWrapper>
        <S.Img
          src={
            !userImgUrls
              ? `https://storage.googleapis.com/${String(userData?.fetchUserLoggedIn?.picture)}`
              : userImgUrls
          }
          alt="계정 이미지"
          onError={handleImgError}
          onClick={onClickImg(userImgRef)}
        />
        {!userImgUrls ? (
          <S.ImgSettingButton src="./images/setting_icon.svg" onClick={onClickImg(userImgRef)} />
        ) : (
          <S.ImgCancelButton src="./images/cancel.svg" onClick={onCancelFile} />
        )}
      </S.ImgWrapper>
      <S.ImgInput type="file" ref={userImgRef} onChange={onChangeImage} />
      <S.ImgUpdateButton onClick={onClickUploadImg} isChange={userImgFile !== undefined}>
        클릭하면 업데이트
      </S.ImgUpdateButton>
    </S.Wrapper>
  );
}

export default memo(MyPorfileImage);
