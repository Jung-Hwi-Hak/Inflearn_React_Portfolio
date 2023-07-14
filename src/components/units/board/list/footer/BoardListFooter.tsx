import { useMoveToPage } from "../../../../commons/hooks/customs/useMoveToPage";
import * as S from "./BoardListFooter.styles";
import type { IBoardListFooterProps } from "./BoardListFooter.types";

export default function BoardListFooter(
  props: IBoardListFooterProps
): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Footer>
      {props.children}
      <S.Button onClick={onClickMoveToPage("/boards/new")}>
        <S.PencilIcon src="/images/board/list/write.png" />
        게시물 등록하기
      </S.Button>
    </S.Footer>
  );
}
