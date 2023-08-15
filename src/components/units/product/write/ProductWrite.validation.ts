import * as yup from "yup";

export interface IProductWriteYupSchema {
  name: string;
  remarks: string;
  contents: string;
  price: string;
  tags: string | undefined;
  address: string;
  addressDetail: string;
  images: any[] | undefined;
}

export const productWriteNewYupSchema = yup.object({
  name: yup.string().required("상품명을 입력해주세요."),
  remarks: yup.string().required("한줄요약을 입력해주세요."),
  contents: yup.string().required("본문을 입력해주세요."),
  price: yup.string().required("판매가격을 입력해주세요."),
  tags: yup
    .string()
    .matches(/^(#.*)+$/, "올바른 형식이 아닙니다. 각 단어는 '#'로 시작해야합니다.")
    .test("no-space-after-tag", "태그 뒤에 공백을 넣을 수 없습니다.", (value) => {
      if (value === undefined) return;
      const parts = value.split("#");
      if (parts.length > 1) {
        const lastPart = parts[parts.length - 1];
        return !lastPart.includes(" ");
      }
      return true;
    }),
  address: yup.string().required("거래장소를 정해주세요."),
  addressDetail: yup.string().required("거래장소의 상세주소를 입력해주세요."),
  images: yup.array(),
});
