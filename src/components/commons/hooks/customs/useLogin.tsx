import { useRecoilState } from "recoil";
import { useMutationLoginUser } from "../mutations/useMutationLoginUser";
import { accessTokenState, userIDState, userPWState } from "../../../../commons/stores";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginYupSchema } from "../../../units/login/Login.validation";
import { useModal } from "./useModal";

export const useLogin = () => {
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
      warningModal("로그인", "로그인 실패", true);
    }
  };

  return {
    onClickLogin,
    register,
    handleSubmit,
    formState,
  };
};
