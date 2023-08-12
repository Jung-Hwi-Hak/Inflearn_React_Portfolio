import { useBoardDetailFooter } from "../../../../commons/hooks/customs/useBoardDetailFooter";
import { useQueryIdChecker } from "../../../../commons/hooks/customs/useQueryIdChecker";
import * as S from "./ProductDetailFooter.styles";
import type { IProductDetailFooterProps } from "./ProductDetailFooter.types";

export default function BoardDetailFooter(props: IProductDetailFooterProps): JSX.Element {
  const { id: boardId } = useQueryIdChecker("boardId");
  const { onClickLike, onClickDeleteBoard } = useBoardDetailFooter();
  return (
    <>
      <S.LikeIconWrapper>
        <S.IWrapper>
          <S.LikeIcon rev={undefined} onClick={onClickLike} />
          <S.LikeCount>{props.data?.fetchUseditem.pickedCount}</S.LikeCount>
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
