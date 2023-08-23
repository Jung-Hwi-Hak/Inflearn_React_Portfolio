import * as yup from "yup";

export const profilePWUpdateYupSchema = yup.object({
  userPw: yup.string().required("현재 비밀번호를 입력해주세요."),
  changeUserPw: yup
    .string()
    .required("비밀번호를 입력해주세요.")
    .min(3, "비밀번호는 최소 3자리 이상이여야 합니다.")
    .max(5, "비밀번호는 최대 5자리입니다."),
  changeUserPwConfirm: yup
    .string()
    .required("비밀번호 확인을 입력해주세요.")
    .oneOf([yup.ref("changeUserPw")], "비밀번호가 일치하지 않습니다."),
});
