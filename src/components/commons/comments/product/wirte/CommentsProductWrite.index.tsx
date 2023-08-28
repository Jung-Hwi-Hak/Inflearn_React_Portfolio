import { memo } from "react";
import { useProductComment } from "../../../hooks/customs/product/useProductComment";
import { useQueryIdChecker } from "../../../hooks/customs/useQueryIdChecker";
import * as S from "./CommentsProductWrite.styles";
import type { ICommentsProductWriteProps } from "./CommentsProductWrite.types";
import { useCheckLogin } from "../../../hooks/customs/useCheckLogin";

function CommentsProductWrite(props: ICommentsProductWriteProps): JSX.Element {
  const { id: productId } = useQueryIdChecker("productId");
  const { onClickWrite, onClickUpdate, register, watch, handleSubmit } = useProductComment({
    productId,
    productCommentId: props.el?._id,
    onToggleEdit: props.onToggleEdit,
    el: props.el,
  });
  const { onClickCheckLogin } = useCheckLogin();

  return (
    <S.Wrapper>
      {props.isEdit !== true && (
        <S.CommentTitleWrapper>
          <S.PencilIcon src="/images/boardComment/write/pencil.png" />
          <S.CommentTitle>문의하기</S.CommentTitle>
        </S.CommentTitleWrapper>
      )}
      <S.ContentWrapper>
        <S.Contents
          maxLength={100}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          {...register("contents")}
        />
        <S.BottomWrapper>
          <S.ContentsLength>{watch("contents")?.length}/100</S.ContentsLength>
          <S.ButtonFlex>
            <S.Button
              onClick={handleSubmit(
                props.isEdit === true
                  ? onClickCheckLogin(onClickUpdate)
                  : onClickCheckLogin(onClickWrite)
              )}
            >
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
export default memo(CommentsProductWrite);
