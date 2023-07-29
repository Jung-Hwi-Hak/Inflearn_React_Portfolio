import * as yup from "yup";

export const SignupYupSchema = yup.object({
  userId: yup
    .string()
    .required("아이디를 입력해주세요.")
    .min(3, "아이디는 최소 3자리 이상이여야 합니다.")
    .max(5, "아이디는 최대 5자리입니다."),
  userPw: yup
    .string()
    .required("비밀번호를 입력해주세요.")
    .min(3, "비밀번호는 최소 3자리 이상이여야 합니다.")
    .max(5, "비밀번호는 최대 5자리입니다."),
  userName: yup
    .string()
    .required("닉네임을 입력해주세요.")
    .min(3, "닉네임은 최소 3자리 이상이여야 합니다.")
    .max(5, "닉네임은 최대 5자리입니다."),
});
