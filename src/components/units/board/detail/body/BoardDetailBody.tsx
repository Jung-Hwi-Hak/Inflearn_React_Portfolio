import { useBoardLike } from "../../../../commons/hooks/customs/useBoardLike";
import { useQueryIdChecker } from "../../../../commons/hooks/customs/useQueryIdChecker";
import * as S from "./BoardDetailBody.styles";
import type { IBoardDetailBodyProps } from "./BoardDetailBody.types";
import { v4 as uuidv4 } from "uuid";

export default function BoardDetailBody(props: IBoardDetailBodyProps): JSX.Element {
  const { id: boardId } = useQueryIdChecker("boardId");
  const { onClickLike, onClickDisLike } = useBoardLike({
    boardId,
  });

  return (
    <>
      <S.Body>
        <S.Title>{props.data?.fetchBoard?.title}</S.Title>
        <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
        {props.data?.fetchBoard.youtubeUrl !== "" && (
          <S.YoutubeWrapper>
            <S.Youtube
              url={props.data?.fetchBoard.youtubeUrl ?? ""}
              width={"486px"}
              height={"240px"}
            />
          </S.YoutubeWrapper>
        )}
        <S.UploadImageWrapper>
          {props.data?.fetchBoard?.images
            ?.filter((el) => el)
            .map((el) => (
              <S.UploadImage key={uuidv4()} src={`https://storage.googleapis.com/${el}`} />
            ))}
        </S.UploadImageWrapper>
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
      </S.Body>
    </>
  );
}
