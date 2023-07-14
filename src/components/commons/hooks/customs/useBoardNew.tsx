import { yupResolver } from "@hookform/resolvers/yup";
import { boardWriteNewYupSchema } from "../../../units/board/write-repactoring/BoardWrite.validation";
import { useForm } from "react-hook-form";
import { useToggle } from "./useToggle";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "../mutations/useMutationCreateBoard";
import type {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import { boolean } from "yup";

interface IDatas {
  writer: string;
  password: string;
  title: string;
  contents: string;
  //   zipcode: string;
  //   address: string;
  //   addressDetail: "";
  //   youtubeUrl: "";
  //   images: ["", "", ""];
}

export const useBoardNew = () => {
  const router = useRouter();
  const [isOpen, toggleIsOpen] = useToggle();
  const [buttonState, setButtonState] = useState(false);
  const [mutation] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const { register, handleSubmit, formState, watch } = useForm({
    resolver: yupResolver(boardWriteNewYupSchema),
    defaultValues: {
      writer: "",
      password: "",
      title: "",
      contents: "",
      zipcode: "",
      address: "",
      addressDetail: "",
      youtubeUrl: "",
      images: ["", "", ""],
    },
  });

  useEffect(() => {
    console.log(watch);
  }, [watch]);

  //   const onCompleteAddressSearch = (data: IDatas): void => {
  //     setValue("address", data.address);
  //     setValue("zipcode", data.zonecode);
  //     toggleIsOpen();
  //   };
  const onChangeFormItems = () => {
    const checkFormValues = watch([
      "writer",
      "title",
      "contents",
      "password",
    ]).filter((el) => el !== "").length;

    if (checkFormValues === 4) {
      setButtonState(true);
    } else {
      setButtonState(false);
    }
  };

  const onClickSubmit = async (data: IDatas) => {
    try {
      const result = await mutation({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      Modal.success({
        content: "게시글 등록 완료",
        onOk() {
          void router.push(`/boards/${String(result.data?.createBoard._id)}`);
        },
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return {
    isOpen,
    toggleIsOpen,
    register,
    handleSubmit,
    formState,
    watch,
    // onCompleteAddressSearch,
    onClickSubmit,
    onChangeFormItems,
    buttonState,
  };
};
