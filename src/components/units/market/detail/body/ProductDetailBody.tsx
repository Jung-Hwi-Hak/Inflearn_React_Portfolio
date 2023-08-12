import * as S from "./ProductDetailBody.styles";
import type { IProductDetailBodyProps } from "./ProductDetailBody.types";
import DOMPurify from "dompurify";
import { v4 as uuidv4 } from "uuid";

export default function BoardDetailBody(props: IProductDetailBodyProps): JSX.Element {
  return (
    <>
      <S.Body>
        <S.Title>{props.data?.fetchUseditem?.remarks}</S.Title>
        {typeof window !== "undefined" ? (
          <S.Contents
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(props.data?.fetchUseditem?.contents ?? ""),
            }}
          ></S.Contents>
        ) : (
          <S.Contents></S.Contents>
        )}
        <S.UploadImageWrapper>
          {props.data?.fetchUseditem?.images
            ?.filter((el) => el)
            .map((el) => (
              <S.UploadImage key={uuidv4()} src={`https://storage.googleapis.com/${el}`} />
            ))}
        </S.UploadImageWrapper>
      </S.Body>
    </>
  );
}
