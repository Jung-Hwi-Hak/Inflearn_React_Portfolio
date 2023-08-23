import { yupResolver } from "@hookform/resolvers/yup";
import { profilePWUpdateYupSchema } from "../../../../units/mypage/myProfile/myProfilePW/MyProfilePW.validation";
import { useMutationResetUserPassword } from "../../mutations/useMutationResetUserPassword";
import { useModal } from "../useModal";
import { useForm } from "react-hook-form";
import { useCallback } from "react";
import { Modal } from "antd";
import { useMutationLogoutUser } from "../../mutations/useMutationLogoutUser";

export const useMyProfilePW = () => {
  const { warningModal, confirmModal } = useModal();
  const [resetPWMutation] = useMutationResetUserPassword();
  const [logoutMutation] = useMutationLogoutUser();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(profilePWUpdateYupSchema),
    mode: "onChange",
    defaultValues: {
      userPw: "",
      changeUserPw: "",
      changeUserPwConfirm: "",
    },
  });

  const onClickSubmit = useCallback(async (data) => {
    confirmModal(
      async () => {
        try {
          await resetPWMutation({
            variables: { password: data.changeUserPw },
          });
          Modal.success({
            title: "비밀번호 변경",
            content: "비밀번호 변경이 성공했습니다.",
            okText: "확인",
            onOk: async () => {
              await logoutMutation();
              location.reload();
            },
            centered: true,
          });
        } catch (error) {
          warningModal("비밀번호 변경", "비밀번호 변경이 실패했습니다.", true);
        }
      },
      "비밀번호 변경",
      "비밀번호 변경을 하시겠습니까? </br>변경하게 되면 자동 로그아웃됩니다.",
      true
    );
  }, []);

  return {
    register,
    formState,
    handleSubmit,
    onClickSubmit,
  };
};
