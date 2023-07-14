import * as yup from "yup";

export const boardWriteNewYupSchema = yup.object({
  writer: yup.string().required("작성자를 입력해주세요."),
  title: yup.string().required("제목을 입력해주세요."),
  contents: yup.string().required("본문을 입력해주세요."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상이여야 합니다.")
    .max(15, "비밀번호는 최대 15자리입니다.")
    .required("비밀번호를 입력해주세요."),
  youtubeUrl: yup.string(),
  zipcode: yup.string(),
  address: yup.string(),
  addressDetail: yup.string(),
  images: yup.array(),
});
