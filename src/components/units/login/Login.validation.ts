import * as yup from "yup";

export const LoginYupSchema = yup.object({
  userId: yup.string().required("아이디를 입력해주세요."),
  userPw: yup.string().required("비밀번호를 입력해주세요."),
});
