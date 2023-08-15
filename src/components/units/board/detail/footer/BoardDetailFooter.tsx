import { useBoardDetailFooter } from "../../../../commons/hooks/customs/board/useBoardDetailFooter";
import { useQueryIdChecker } from "../../../../commons/hooks/customs/useQueryIdChecker";
import * as S from "./BoardDetailFooter.styles";
import type { IBoardDetailFooterProps } from "./BoardDetailFooter.types";

export default function BoardDetailFooter(props: IBoardDetailFooterProps): JSX.Element {
  const { id: boardId } = useQueryIdChecker("boardId");
  const { onClickLike, onClickDisLike, onClickDeleteBoard } = useBoardDetailFooter();
  return (
    <>
      <S.LikeIconWrapper>
        <S.IWrapper>
          <S.LikeIcon rev={undefined} onClick={onClickLike} />
          <S.LikeCount>{props.data?.fetchBoard.likeCount}</S.LikeCount>
        </S.IWrapper>
        <S.IWrapper>
          <S.DisLikeIcon rev={undefined} onClick={onClickDisLike} />
          <S.DisLikeCount>{props.data?.fetchBoard.dislikeCount}</S.DisLikeCount>
        </S.IWrapper>
      </S.LikeIconWrapper>
      <S.BottomWrapper>
        <S.Button onClick={props.onClickMoveToPage(`/boards`)}>목록으로</S.Button>
        <S.Button onClick={props.onClickMoveToPage(`/boards/${String(boardId)}/edit`)}>
          수정하기
        </S.Button>
        <S.Button onClick={onClickDeleteBoard}>삭제하기</S.Button>
      </S.BottomWrapper>
    </>
  );
}
