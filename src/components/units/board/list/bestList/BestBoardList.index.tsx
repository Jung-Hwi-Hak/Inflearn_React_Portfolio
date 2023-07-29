import { memo } from "react";
import { getDate } from "../../../../../commons/libraries/utils";
import type { IBoard } from "../../../../../commons/types/generated/types";
import { useQueryFetchBestBoard } from "../../../../commons/hooks/queries/useQueryFetchBestBoard";
import * as S from "./BestBoardList.styles";
import { useQueryFetchBoardsOfTheBest } from "../../../../commons/hooks/queries/useQueryFetchBoardsOfTheBest";
import { useMoveToPage } from "../../../../commons/hooks/customs/useMoveToPage";

function BestBoardList(): JSX.Element {
  const { data: bestBoardData } = useQueryFetchBoardsOfTheBest();
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.BestBoardsSection>
      <h1>베스트 게시글</h1>
      <S.BestBoardsArticle>
        {(bestBoardData?.fetchBoardsOfTheBest ?? Array(4).fill(1)).map((el: IBoard, index) => {
          const result = useQueryFetchBestBoard(el._id);
          return (
            <S.BestBoardCard key={el._id ?? index} onClick={onClickMoveToPage(`/boards/${el._id}`)}>
              <S.BestBoardImage
                src={`https://storage.googleapis.com/${(result.data?.fetchBoard.images ?? "")[0]}`}
                alt="베스트 게시글 이미지"
              />
              <S.BestBoardInfoWrapper>
                <S.BestBoardInfoTitle>{result.data?.fetchBoard.title}</S.BestBoardInfoTitle>
                <S.InfoSubWrapper>
                  <S.InfoSubLeftWrapper>
                    <S.WriterWrapper>
                      <S.WriterIcon />
                      <S.Writer>{result.data?.fetchBoard.writer}</S.Writer>
                      <S.Date>Date: {getDate(result.data?.fetchBoard.createdAt)}</S.Date>
                    </S.WriterWrapper>
                  </S.InfoSubLeftWrapper>
                  <S.InfoSubRightWrapper>
                    <S.LikeIcon />
                    <S.LikeCount>{result.data?.fetchBoard.likeCount}</S.LikeCount>
                  </S.InfoSubRightWrapper>
                </S.InfoSubWrapper>
              </S.BestBoardInfoWrapper>
            </S.BestBoardCard>
          );
        })}
      </S.BestBoardsArticle>
    </S.BestBoardsSection>
  );
}

export default memo(BestBoardList);
