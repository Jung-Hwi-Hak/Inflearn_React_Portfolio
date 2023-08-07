import { Modal } from "antd";
import { useRouter } from "next/router";

interface IUseModalReturn {
  successModal: (title?: string, content?: string, centered?: boolean, path?: string) => void;
  warningModal: (title?: string, content?: string, centered?: boolean, path?: string) => void;
  confirmModal: (
    onOk: () => Promise<void>,
    title?: string,
    content?: string,
    centered?: boolean,
    path?: string
  ) => void;
}

export const useModal = (): IUseModalReturn => {
  const router = useRouter();
  const successModal = (title?: string, content?: string, centered?: boolean, path?: string) => {
    Modal.success({
      title,
      content,
      centered,
      okText: "확인",
      onOk: () => {
        if (path === undefined) return;
        void router.push(path);
      },
    });
  };
  const warningModal = (title?: string, content?: string, centered?: boolean, path?: string) => {
    Modal.warning({
      title,
      content,
      centered,
      okText: "확인",
      onOk: () => {
        if (path === undefined) return;
        void router.push(path);
      },
    });
  };

  const confirmModal = (
    onOk: () => Promise<void>,
    title?: string,
    content?: string,
    centered?: boolean,
    path?: string
  ) => {
    Modal.confirm({
      title,
      content,
      centered,
      onOk,
      onCancel() {
        return false;
      },
    });
  };

  return {
    successModal,
    warningModal,
    confirmModal,
  };
};
