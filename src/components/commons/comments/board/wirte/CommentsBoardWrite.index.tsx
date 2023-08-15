import type { IBoardComment } from "../../../../../commons/types/generated/types";
import { useBoardComment } from "../../../hooks/customs/board/useBoardComment";
import { useQueryIdChecker } from "../../../hooks/customs/useQueryIdChecker";
import * as S from "./CommentsBoardWrite.styles";

interface ICommentsBoardWriteProps {
  isEdit?: boolean;
  onToggleEdit?: () => void;
  el?: IBoardComment;
  children?: JSX.Element;
}

export default function CommonetsBoardWrite(props: ICommentsBoardWriteProps): JSX.Element {
  const { id: boardId } = useQueryIdChecker("boardId");
  const { onClickWrite, onClickUpdate, onChangeStar, register, watch, handleSubmit, starRef } =
    useBoardComment({
      boardId,
      boardCommentId: props.el?._id,
      onToggleEdit: props.onToggleEdit,
      el: props.el,
    });

  return (
    <S.Wrapper>
      {props.isEdit !== true && (
        <>
          <S.PencilIcon src="/images/boardComment/write/pencil.png" />
          <span>댓글</span>
        </>
      )}
      <S.InputWrapper>
        <S.Input placeholder="작성자" {...register("writer")} readOnly={props.isEdit} />
        <S.Input type="password" placeholder="비밀번호" {...register("password")} />
        <S.Star className="asdasd" ref={starRef} onChange={onChangeStar} value={watch("star")} />
      </S.InputWrapper>
      <S.ContentWrapper>
        <S.Contents
          maxLength={100}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          {...register("contents")}
        />
        <S.BottomWrapper>
          <S.ContentsLength>{watch("contents")?.length}/100</S.ContentsLength>
          <S.ButtonFlex>
            <S.Button onClick={handleSubmit(props.isEdit === true ? onClickUpdate : onClickWrite)}>
              {props.isEdit === true ? "수정하기" : "등록하기"}
            </S.Button>
            {props.isEdit === true ? <S.Button onClick={props.onToggleEdit}>취소</S.Button> : <></>}
          </S.ButtonFlex>
        </S.BottomWrapper>
      </S.ContentWrapper>
      {props.children}
    </S.Wrapper>
  );
}
