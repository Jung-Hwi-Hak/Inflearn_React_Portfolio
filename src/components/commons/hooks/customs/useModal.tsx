import { Modal } from "antd";
import { useRouter } from "next/router";

export const useModal = () => {
  const router = useRouter();

  const successModal = (content: string, centered: boolean, path?: string) => {
    Modal.success({
      content,
      centered,
      okText: "확인",
      onOk: () => {
        if (path !== undefined) {
          void router.push(path);
        }
      },
    });
  };
  const warningModal = (content: string, centered: boolean) => {
    Modal.warning({
      content,
      centered,
      okText: "확인",
    });
  };

  return {
    successModal,
    warningModal,
  };
};
