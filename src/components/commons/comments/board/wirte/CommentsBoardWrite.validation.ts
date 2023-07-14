// 검증할 조건 - yup
import * as yup from "yup";

export const yupSchema = yup.object({
  writer: yup.string().required("작성자를 입력해주세요."),
  contents: yup.string().required("본문을 입력해주세요."),
  star: yup.number(),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상이여야 합니다.")
    .max(15, "비밀번호는 최대 15자리입니다.")
    .required("비밀번호를 입력해주세요."),
});
