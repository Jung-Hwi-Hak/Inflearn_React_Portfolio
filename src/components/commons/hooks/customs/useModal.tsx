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

  const splitedContentFun = (content: string | undefined) => {
    const splitedContent = (
      <div>
        {content?.split("</br>").map((el, index) => (
          <p key={index}>{el}</p>
        ))}
      </div>
    );
    return splitedContent;
  };

  const successModal = (title?: string, content?: string, centered?: boolean, path?: string) => {
    const splitedContent = splitedContentFun(content);
    Modal.success({
      title,
      content: splitedContent,
      centered,
      okText: "확인",
      onOk: () => {
        if (path === undefined) return;
        void router.push(path);
      },
    });
  };
  const warningModal = (title?: string, content?: string, centered?: boolean, path?: string) => {
    const splitedContent = splitedContentFun(content);
    Modal.warning({
      title,
      content: splitedContent,
      centered,
      okText: "확인",
      onOk: () => {
        if (path === undefined) return;
        void router.push(path);
      },
    });
  };

  const confirmModal = (
    onOk: () => Promise<void> | void,
    title?: string,
    content?: string,
    centered?: boolean,
    path?: string
  ) => {
    const splitedContent = splitedContentFun(content);

    Modal.confirm({
      title,
      content: splitedContent,
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
