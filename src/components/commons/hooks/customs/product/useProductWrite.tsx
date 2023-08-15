import { yupResolver } from "@hookform/resolvers/yup";
import {
  type IProductWriteYupSchema,
  productWriteNewYupSchema,
} from "../../../../units/product/write/ProductWrite.validation";
import { useForm } from "react-hook-form";
import type {
  UseFormWatch,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
} from "react-hook-form";
import { useToggle } from "../useToggle";

import { useCallback, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

interface IUseBoardWriteCommons {
  isOpen: boolean;
  toggleIsOpen: () => void;
  register: UseFormRegister<IProductWriteYupSchema>;
  setValue: UseFormSetValue<IProductWriteYupSchema>;
  handleSubmit: UseFormHandleSubmit<IProductWriteYupSchema>;
  formState: FormState<IProductWriteYupSchema>;
  watch: UseFormWatch<IProductWriteYupSchema>;
  fileUrls: string[];
  setFileUrls: Dispatch<SetStateAction<string[]>>;
  files: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
  onChangeContents: (value: string) => void;
  trigger: UseFormTrigger<{
    name: string;
    remarks: string;
    contents: string;
    price: string;
    tags: string | undefined;
    address: string;
    addressDetail: string;
    images: any[] | undefined;
  }>;
}

export const useProductWrite = (): IUseBoardWriteCommons => {
  const [isOpen, toggleIsOpen] = useToggle();
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState<File[]>([]);

  const { register, handleSubmit, formState, watch, setValue, trigger } = useForm({
    resolver: yupResolver(productWriteNewYupSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      remarks: "",
      contents: "",
      price: "",
      address: "",
      addressDetail: "",
    },
  });

  const onChangeContents = useCallback((value: string): void => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    void trigger("contents");
  }, []);

  return {
    isOpen,
    toggleIsOpen,
    register,
    handleSubmit,
    formState,
    watch,
    setValue,
    fileUrls,
    setFileUrls,
    files,
    setFiles,
    onChangeContents,
    trigger,
  };
};
