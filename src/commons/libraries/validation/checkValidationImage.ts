import { Modal } from "antd";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5mb

export const checkValidationImage = (file?: File): boolean => {
  if (file === undefined) {
    Modal.error({ content: "파일이 없습니다" });
    return false;
  }

  if (file.size > MAX_FILE_SIZE) {
    Modal.error({ content: "파일 크기가 큽니다. ( 최대 사이즈: 5MB)" });
    return false;
  }

  if (!file.type.includes("png") && !file.type.includes("jpeg")) {
    Modal.error({ content: "파일 확장자가 올바르지 않습니다. ( PNG, JPEG )" });
    return false;
  }

  return true;
};
