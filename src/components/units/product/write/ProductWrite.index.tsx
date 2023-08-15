import type { IProductWriteProps } from "./ProductWrite.types";
import * as S from "./ProductWrite.styles";
import { v4 as uuidv4 } from "uuid";
import UploadsImg from "../../../commons/uploads/img01/UploadsImg01.index";
import { useProductWrite } from "../../../commons/hooks/customs/product/useProductWrite";
import { useBoardNew } from "../../../commons/hooks/customs/product/useProductNew";
import { useBoardEdit } from "../../../commons/hooks/customs/product/useProductEdit";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import KakaoMap from "../../../commons/kakaomap/kakaomap.index";
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});
export default function ProductWrite(props: IProductWriteProps): JSX.Element {
  const productWriteCommonHooks = useProductWrite();
  const productWriteHooks: any = props.isEdit
    ? useBoardEdit({
        setValue: productWriteCommonHooks.setValue,
        files: productWriteCommonHooks.files,
        watch: productWriteCommonHooks.watch,
      })
    : useBoardNew({
        files: productWriteCommonHooks.files,
      });

  const {
    formState: { errors, isValid },
  } = productWriteCommonHooks;

  return (
    <>
      <S.Wrapper>
        <S.Title>{props.isEdit ? "상품 수정" : "상품 등록"}</S.Title>
        <S.InputWrapper>
          <S.Label>상품명</S.Label>
          <S.Subject
            type="text"
            placeholder="상품명을 작성해주세요."
            {...productWriteCommonHooks.register("name")}
          />
          <S.Error>{errors.name?.message}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>한줄요약</S.Label>
          <S.Subject
            type="text"
            placeholder="한줄요약을 작성해주세요."
            {...productWriteCommonHooks.register("remarks")}
          />
          <S.Error>{errors.remarks?.message}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>상품설명</S.Label>
          <ReactQuill
            onChange={productWriteCommonHooks.onChangeContents}
            style={{ height: "300px", marginBottom: "20px" }}
          />

          <S.Error>{errors.contents?.message}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>판매 가격</S.Label>
          <S.Subject
            type="number"
            placeholder="판매가격을 작성해주세요."
            {...productWriteCommonHooks.register("price")}
          />
          <S.Error>{errors.price?.message}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>태그입력</S.Label>
          <S.Subject
            type="text"
            placeholder="태그를 작성해주세요."
            {...productWriteCommonHooks.register("tags")}
          />
          <S.Error>{errors.tags?.message}</S.Error>
        </S.InputWrapper>
        <KakaoMap
          register={productWriteCommonHooks.register}
          setValue={productWriteCommonHooks.setValue}
          trigger={productWriteCommonHooks.trigger}
          errors={errors}
        />
        <S.ImageWrapper>
          <S.Label>사진첨부</S.Label>
          <S.UploadImgWrapper>
            {productWriteCommonHooks.fileUrls.map((el, index) => (
              <UploadsImg
                key={uuidv4()}
                index={index}
                files={productWriteCommonHooks.files}
                setFiles={productWriteCommonHooks.setFiles}
                fileUrls={productWriteCommonHooks.fileUrls}
                fileUrl={el}
                setFileUrls={productWriteCommonHooks.setFileUrls}
              />
            ))}
          </S.UploadImgWrapper>
        </S.ImageWrapper>
        <S.ButtonWrapper>
          <S.SubmitButton
            buttonState={isValid}
            onClick={productWriteCommonHooks.handleSubmit(
              props.isEdit
                ? productWriteHooks.onClickUpdateSubmit
                : productWriteHooks.onClickCreateSubmit
            )}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
}
