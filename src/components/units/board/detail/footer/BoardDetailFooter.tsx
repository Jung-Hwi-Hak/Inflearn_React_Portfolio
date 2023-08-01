import { useQueryIdChecker } from "../../../../commons/hooks/customs/useQueryIdChecker";
import * as S from "./BoardDetailFooter.styles";
import type { IBoardDetailFooterProps } from "./BoardDetailFooter.types";

export default function BoardDetailFooter(props: IBoardDetailFooterProps): JSX.Element {
  const { id: boardId } = useQueryIdChecker("boardId");
  return (
    <>
      <S.BottomWrapper>
        <S.Button onClick={props.onClickMoveToPage(`/boards`)}>목록으로</S.Button>
        <S.Button onClick={props.onClickMoveToPage(`/boards/${String(boardId)}/edit`)}>
          수정하기
        </S.Button>
        <S.Button>삭제하기</S.Button>
      </S.BottomWrapper>
    </>
  );
}
