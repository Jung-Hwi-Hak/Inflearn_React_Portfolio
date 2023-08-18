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
import type { IQuery } from "../../../../../commons/types/generated/types";

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
    lat: string | undefined;
    lng: string | undefined;
    images: any[] | undefined;
  }>;
}

interface IUseProductWriteArgs {
  data: Pick<IQuery, "fetchUseditem"> | undefined;
}

export const useProductWrite = (args: IUseProductWriteArgs): IUseBoardWriteCommons => {
  const [isOpen, toggleIsOpen] = useToggle();
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState<File[]>([]);

  const { register, handleSubmit, formState, watch, setValue, trigger } = useForm({
    resolver: yupResolver(productWriteNewYupSchema),
    mode: "onChange",
    defaultValues: {
      name: args.data?.fetchUseditem.name ?? "",
      remarks: args.data?.fetchUseditem.remarks ?? "",
      contents: args.data?.fetchUseditem.contents ?? "",
      tags: args.data?.fetchUseditem.tags?.join("") ?? "",
      price: String(args.data?.fetchUseditem.price) ?? "",
      address: args.data?.fetchUseditem.useditemAddress?.address ?? "",
      addressDetail: args.data?.fetchUseditem.useditemAddress?.addressDetail ?? "",
      lat: String(args.data?.fetchUseditem.useditemAddress?.lat) ?? "",
      lng: String(args.data?.fetchUseditem.useditemAddress?.lng) ?? "",
      images: args.data?.fetchUseditem.images ?? ["", "", ""],
    },
  });

  // useEffect(() => {
  //   if (args.data?.fetchUseditem.images === null || args.data?.fetchUseditem.images === undefined)
  //     return;
  //   const tempImages = args.data?.fetchUseditem.images.map(
  //     (el, index) => `https://storage.googleapis.com/${String(el)}`
  //   );
  //   tempImages.forEach((url, index) => {
  //     fileUrls[index] = url ?? "asdasd";
  //   });
  //   setFileUrls([...fileUrls]);
  // }, []);
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
