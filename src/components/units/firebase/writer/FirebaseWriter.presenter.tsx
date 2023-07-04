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
          ref={props.writerInputRef}
          id="writer_input"
          onChange={props.onChangeWriter}
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
        />
      </S.FelxInputWrapper>
      <S.FelxInputWrapper>
        <S.FlexInputLabel htmlFor="contents_input">
          <S.ContentsIcon />
          <S.InputTypeSpan>본문:</S.InputTypeSpan>
        </S.FlexInputLabel>
        <S.FlexInput id="contents_input" onChange={props.onChangeContents} />
      </S.FelxInputWrapper>
      <S.ButtonWrapper>
        <S.SubmitButton onClick={props.onClickSubmit} type="primary">
          게시물 등록
        </S.SubmitButton>
        <S.CancelButton onClick={props.onClickCancel} type="primary" danger>
          취소
        </S.CancelButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
