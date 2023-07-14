import type { IBoardWriteUIProps } from "./BoardWrite.types";
import * as S from "./BoardWrite.styles";
// import { v4 as uuidv4 } from "uuid";
// import UploadsImg from "../../../commons/uploads/img01/UploadsImg01.container";
// import { useState } from "react";
import { useBoardNew } from "../../../commons/hooks/customs/useBoardNew";
export default function BoardWriteRepetoring(
  props: IBoardWriteUIProps
): JSX.Element {
  // const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const {
    formState,
    handleSubmit,
    // isOpen,
    onClickSubmit,
    // onCompleteAddressSearch,
    register,
    onChangeFormItems,
    buttonState,
    // toggleIsOpen,
    // watch,
  } = useBoardNew();

  return (
    <>
      {/* {isOpen && (
        <S.AddressModal open={true} onOk={toggleIsOpen} onCancel={toggleIsOpen}>
          <S.AddressSearchInput onComplete={onCompleteAddressSearch} />
        </S.AddressModal>
      )} */}
      <S.Wrapper>
        <S.Title>{props.isEdit ? "게시글 수정" : "게시글 등록"}</S.Title>
        <S.WriterWrapper>
          <S.InputWrapper>
            <S.Label>작성자</S.Label>
            <S.Writer
              placeholder="이름을 적어주세요."
              {...register("writer", {
                onChange: onChangeFormItems,
              })}
            />
            <S.Error>{formState.errors.writer?.message}</S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>비밀번호</S.Label>
            <S.Password
              type="password"
              placeholder="비밀번호를 작성해주세요."
              {...register("password", { onChange: onChangeFormItems })}
            />
            <S.Error>{formState.errors.password?.message}</S.Error>
          </S.InputWrapper>
        </S.WriterWrapper>
        <S.InputWrapper>
          <S.Label>제목</S.Label>
          <S.Subject
            placeholder="제목을 작성해주세요."
            {...register("title", { onChange: onChangeFormItems })}
          />
          <S.Error>{formState.errors.title?.message}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>내용</S.Label>
          <S.Contents
            placeholder="내용을 작성해주세요."
            {...register("contents", { onChange: onChangeFormItems })}
          />
          <S.Error>{formState.errors.contents?.message}</S.Error>
        </S.InputWrapper>
        {/* <S.InputWrapper>
          <S.Label>주소</S.Label>
          <S.ZipcodeWrapper>
            <S.Zipcode
              placeholder="07250"
              readOnly
              value={
                props.zipcode !== ""
                  ? watch("zipcode")
                  : props.data?.fetchBoard.boardAddress?.zipcode ?? ""
              }
            />
            <S.SearchButton onClick={toggleIsOpen}>
              우편번호 검색
            </S.SearchButton>
          </S.ZipcodeWrapper>
          <S.Address
            readOnly
            value={
              props.address !== ""
                ? watch("address")
                : props.data?.fetchBoard.boardAddress?.address ?? ""
            }
          />
          <S.Address {...register("addressDetail")} />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>유튜브</S.Label>
          <S.Youtube
            placeholder="링크를 복사해주세요."
            {...register("youtubeUrl")}
          />
        </S.InputWrapper>
        <S.ImageWrapper>
          <S.Label>사진첨부</S.Label>
          <S.UploadImgWrapper>
            {fileUrls.map((el, index) => (
              <UploadsImg
                key={uuidv4()}
                index={index}
                fileUrl={el}
                onChangeFileUrls={props.onChangeFileUrls}
              />
            ))}
          </S.UploadImgWrapper>
        </S.ImageWrapper> */}
        <S.ButtonWrapper>
          <S.SubmitButton
            buttonState={buttonState}
            onClick={
              // props.isEdit ? props.onClickUpdate : handleSubmit(onClickSubmit)
              handleSubmit(onClickSubmit)
            }
            // isActive={props.isEdit ? true : props.isActive}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
}
