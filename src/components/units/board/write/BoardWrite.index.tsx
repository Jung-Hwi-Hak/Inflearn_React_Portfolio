import type { IBoardWriteProps } from "./BoardWrite.types";
import * as S from "./BoardWrite.styles";
import { v4 as uuidv4 } from "uuid";
import UploadsImg from "../../../commons/uploads/img01/UploadsImg01.index";
import { useBoardWrite } from "../../../commons/hooks/customs/board/useBoardWrite";
import { useBoardNew } from "../../../commons/hooks/customs/board/useBoardNew";
import { useBoardEdit } from "../../../commons/hooks/customs/board/useBoardEdit";
export default function BoardWriteRepetoring(props: IBoardWriteProps): JSX.Element {
  const boardWriteCommonHooks = useBoardWrite();
  const boardWriteHooks: any = props.isEdit
    ? useBoardEdit({
        setValue: boardWriteCommonHooks.setValue,
        files: boardWriteCommonHooks.files,
        watch: boardWriteCommonHooks.watch,
      })
    : useBoardNew({
        files: boardWriteCommonHooks.files,
      });

  const {
    formState: { errors, isValid },
  } = boardWriteCommonHooks;
  return (
    <>
      {boardWriteCommonHooks.isOpen && (
        <S.AddressModal
          open={true}
          onOk={boardWriteCommonHooks.toggleIsOpen}
          onCancel={boardWriteCommonHooks.toggleIsOpen}
        >
          <S.AddressSearchInput onComplete={boardWriteCommonHooks.onCompleteAddressSearch} />
        </S.AddressModal>
      )}
      <S.Wrapper>
        <S.Title>{props.isEdit ? "게시글 수정" : "게시글 등록"}</S.Title>
        <S.WriterWrapper>
          <S.InputWrapper>
            <S.Label>작성자</S.Label>
            <S.Writer
              placeholder="이름을 적어주세요."
              {...boardWriteCommonHooks.register("writer")}
              defaultValue={boardWriteCommonHooks.watch("writer")}
              readOnly={props.isEdit}
            />
            <S.Error>{errors.writer?.message}</S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>비밀번호</S.Label>
            <S.Password
              type="password"
              placeholder="비밀번호를 작성해주세요."
              {...boardWriteCommonHooks.register("password")}
            />
            <S.Error>{errors.password?.message}</S.Error>
          </S.InputWrapper>
        </S.WriterWrapper>
        <S.InputWrapper>
          <S.Label>제목</S.Label>
          <S.Subject
            type="text"
            placeholder="제목을 작성해주세요."
            {...boardWriteCommonHooks.register("title")}
          />
          <S.Error>{errors.title?.message}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>내용</S.Label>
          <S.Contents
            placeholder="내용을 작성해주세요."
            defaultValue={props.data?.fetchBoard.contents}
            {...boardWriteCommonHooks.register("contents")}
          />
          <S.Error>{errors.contents?.message}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>주소</S.Label>
          <S.ZipcodeWrapper>
            <S.Zipcode
              placeholder="07250"
              readOnly
              defaultValue={props.data?.fetchBoard.boardAddress?.zipcode ?? ""}
              {...boardWriteCommonHooks.register("zipcode")}
            />
            <S.SearchButton onClick={boardWriteCommonHooks.toggleIsOpen}>
              우편번호 검색
            </S.SearchButton>
          </S.ZipcodeWrapper>
          <S.Address
            readOnly
            {...boardWriteCommonHooks.register("address")}
            defaultValue={props.data?.fetchBoard.boardAddress?.address ?? ""}
          />
          <S.Address
            {...boardWriteCommonHooks.register("addressDetail")}
            defaultValue={props.data?.fetchBoard.boardAddress?.addressDetail ?? ""}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>유튜브</S.Label>
          <S.Youtube
            placeholder="링크를 복사해주세요."
            {...boardWriteCommonHooks.register("youtubeUrl")}
          />
        </S.InputWrapper>
        <S.ImageWrapper>
          <S.Label>사진첨부</S.Label>
          <S.UploadImgWrapper>
            {boardWriteCommonHooks.fileUrls.map((el, index) => (
              <UploadsImg
                key={uuidv4()}
                index={index}
                files={boardWriteCommonHooks.files}
                setFiles={boardWriteCommonHooks.setFiles}
                fileUrls={boardWriteCommonHooks.fileUrls}
                fileUrl={el}
                setFileUrls={boardWriteCommonHooks.setFileUrls}
              />
            ))}
          </S.UploadImgWrapper>
        </S.ImageWrapper>
        <S.ButtonWrapper>
          <S.SubmitButton
            buttonState={isValid}
            onClick={boardWriteCommonHooks.handleSubmit(
              props.isEdit
                ? boardWriteHooks.onClickUpdateSubmit
                : boardWriteHooks.onClickCreateSubmit
            )}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
}
