import { useRecoilState } from "recoil";
import { useMutationLoginUser } from "../mutations/useMutationLoginUser";
import { accessTokenState, userIDState, userPWState } from "../../../../commons/stores";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginYupSchema } from "../../../units/login/Login.validation";
import { useModal } from "./useModal";

import type { UseFormRegister, UseFormHandleSubmit, FormState } from "react-hook-form";

interface IReturns {
  onClickLogin: (data: any) => Promise<void>;
  register: UseFormRegister<{
    userId: string;
    userPw: string;
  }>;
  handleSubmit: UseFormHandleSubmit<
    {
      userId: string;
      userPw: string;
    },
    undefined
  >;
  formState: FormState<{
    userId: string;
    userPw: string;
  }>;
}
export const useLogin = (): IReturns => {
  const [mutation] = useMutationLoginUser();

  const [, setUserId] = useRecoilState(userIDState);
  const [, setUserPw] = useRecoilState(userPWState);
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const { successModal, warningModal } = useModal();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(LoginYupSchema),
    defaultValues: {
      userId: "",
      userPw: "",
    },
  });

  const onClickLogin = async (data: any): Promise<void> => {
    try {
      const result = await mutation({
        variables: { email: data.userId, password: data.userPw },
      });
      setAccessToken(result.data?.loginUser.accessToken ?? "");
      setUserId(data.userId);
      setUserPw(data.userPw);
      successModal("로그인", "로그인 성공", true, "/boards");
    } catch (error) {
      warningModal("로그인 오류", "로그인 실패", true);
    }
  };

  return {
    onClickLogin,
    register,
    handleSubmit,
    formState,
  };
};
