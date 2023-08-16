// 검증할 조건 - yup
import * as yup from "yup";

export const yupSchema = yup.object({
  contents: yup.string().required("본문을 입력해주세요."),
});
