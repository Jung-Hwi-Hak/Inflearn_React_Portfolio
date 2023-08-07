import * as S from "./BoardDetailBody.styles";
import type { IBoardDetailBodyProps } from "./BoardDetailBody.types";
import { v4 as uuidv4 } from "uuid";

export default function BoardDetailBody(props: IBoardDetailBodyProps): JSX.Element {
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
      </S.Body>
    </>
  );
}
