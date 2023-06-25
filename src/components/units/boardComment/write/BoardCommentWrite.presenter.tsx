import type { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";
import * as S from "./BoardCommentWrite.styles";

export default function BoardCommentWriteUI(
  props: IBoardCommentWriteUIProps
): JSX.Element {
  return (
    <S.Wrapper>
      {props.isEdit !== true && (
        <>
          <S.PencilIcon src="/images/boardComment/write/pencil.png" />
          <span>댓글</span>
        </>
      )}
      <S.InputWrapper>
        <S.Input
          placeholder="작성자"
          onChange={props.onChangeWriter}
          value={props.writer !== "" ? props.writer : props.el?.writer ?? ""}
          readOnly={props.isEdit}
        />
        <S.Input
          type="password"
          placeholder="비밀번호"
          value={props.password}
          onChange={props.onChangePassword}
        />
        <S.Star onChange={props.setStar} />
      </S.InputWrapper>
      <S.ContentWrapper>
        <S.Contents
          maxLength={100}
          onChange={props.onChangeContents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          value={
            props.contents !== "" ? props.contents : props.el?.contents ?? ""
          }
        />
        <S.BottomWrapper>
          <S.ContentsLength>{props.contents.length}/100</S.ContentsLength>
          <S.ButtonFlex>
            <S.Button
              onClick={
                props.isEdit === true ? props.onClickUpdate : props.onClickWrite
              }
            >
              {props.isEdit === true ? "수정하기" : "등록하기"}
            </S.Button>
            {props.isEdit === true ? (
              <S.Button onClick={props.onClickCancel}>취소</S.Button>
            ) : (
              <></>
            )}
          </S.ButtonFlex>
        </S.BottomWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  );
}
