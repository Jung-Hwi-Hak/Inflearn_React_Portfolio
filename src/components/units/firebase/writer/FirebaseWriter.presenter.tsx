import type { FirebaseWriterUIProps } from "./FirebaseWriter.types";
import * as S from "./FirebaseWriter.styles";

export default function FirebaseWriterUI(
  props: FirebaseWriterUIProps
): JSX.Element {
  return (
    <S.Wrapper>
      <S.FelxInputWrapper>
        <S.FlexInputLabel htmlFor="writer_input">
          <S.WriterIcon />
          <S.InputTypeSpan>작성자:</S.InputTypeSpan>
        </S.FlexInputLabel>
        <S.FlexInput
          type="text"
          ref={props.writerInputRef}
          id="writer_input"
          onChange={props.onChangeWriter}
          defaultValue={props.isEdit ? props.firebaseEditBoard?.writer : ""}
        />
      </S.FelxInputWrapper>
      <S.FelxInputWrapper>
        <S.FlexInputLabel htmlFor={"title_input"}>
          <S.TitleIcon />
          <S.InputTypeSpan>제목:</S.InputTypeSpan>
        </S.FlexInputLabel>
        <S.FlexInput
          ref={props.titleInputRef}
          id="title_input"
          onChange={props.onChangeTitle}
          defaultValue={props.isEdit ? props.firebaseEditBoard?.title : ""}
        />
      </S.FelxInputWrapper>
      <S.FelxInputWrapper>
        <S.FlexInputLabel htmlFor="contents_input">
          <S.ContentsIcon />
          <S.InputTypeSpan>본문:</S.InputTypeSpan>
        </S.FlexInputLabel>
        <S.FlexInput
          ref={props.contentsInputRef}
          id="contents_input"
          onChange={props.onChangeContents}
          defaultValue={props.isEdit ? props.firebaseEditBoard?.contents : ""}
        />
      </S.FelxInputWrapper>
      <S.ButtonWrapper>
        <S.SubmitButton
          onClick={props.isEdit ? props.onClickEdit : props.onClickSubmit}
          type="primary"
        >
          {props.isEdit ? "게시물 수정" : "게시물 등록"}
        </S.SubmitButton>
        <S.CancelButton onClick={props.onClickCancel} type="primary" danger>
          취소
        </S.CancelButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
