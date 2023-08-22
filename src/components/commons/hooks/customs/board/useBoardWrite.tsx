import { yupResolver } from "@hookform/resolvers/yup";
import {
  type IBoardWriteYupSchema,
  boardWriteNewYupSchema,
} from "../../../../units/board/write/BoardWrite.validation";
import { useForm } from "react-hook-form";
import type {
  UseFormWatch,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { useToggle } from "../useToggle";

import { useCallback, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

interface IUseBoardWriteCommons {
  isOpen: boolean;
  toggleIsOpen: () => void;
  register: UseFormRegister<IBoardWriteYupSchema>;
  setValue: UseFormSetValue<IBoardWriteYupSchema>;
  handleSubmit: UseFormHandleSubmit<IBoardWriteYupSchema>;
  formState: FormState<IBoardWriteYupSchema>;
  watch: UseFormWatch<IBoardWriteYupSchema>;
  fileUrls: string[];
  setFileUrls: Dispatch<SetStateAction<string[]>>;
  files: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
  onCompleteAddressSearch: (data: {
    address: string | undefined;
    zonecode: string | undefined;
  }) => void;
}

export const useBoardWrite = (): IUseBoardWriteCommons => {
  const [isOpen, toggleIsOpen] = useToggle();
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState<File[]>([]);

  const { register, handleSubmit, formState, watch, setValue } = useForm({
    resolver: yupResolver(boardWriteNewYupSchema),
    mode: "onChange",
    defaultValues: {
      writer: "",
      password: "",
      title: "",
      contents: "",
      zipcode: "",
      address: "",
      addressDetail: "",
      youtubeUrl: "",
    },
  });

  const onCompleteAddressSearch = useCallback(
    (data: { address: string | undefined; zonecode: string | undefined }): void => {
      setValue("address", data.address);
      setValue("zipcode", data.zonecode);
      toggleIsOpen();
    },
    [setValue, toggleIsOpen]
  );

  return {
    isOpen,
    toggleIsOpen,
    register,
    handleSubmit,
    formState,
    watch,
    onCompleteAddressSearch,
    setValue,
    fileUrls,
    setFileUrls,
    files,
    setFiles,
  };
};
