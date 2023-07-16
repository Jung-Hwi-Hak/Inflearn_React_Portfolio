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
import { useQueryFetchBoard } from "../queries/useQueryFetchBoard";

export const useBoardNew = () => {
  const router = useRouter();

  const [isOpen, toggleIsOpen] = useToggle();
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [buttonState, setButtonState] = useState(false);

  // ! 게시글 등록 api
  const [mutation] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const { register, handleSubmit, formState, watch, setValue } = useForm({
    resolver: yupResolver(boardWriteNewYupSchema),
    defaultValues: {
      writer: "",
      password: "",
      title: "123123",
      contents: "",
      zipcode: "",
      address: "",
      addressDetail: "",
      youtubeUrl: "",
    },
  });

  const { data } = useQueryFetchBoard();
  useEffect(() => {
    console.log("useEffect");
    setValue("writer", data?.fetchBoard.title ?? "");
    setValue("title", data?.fetchBoard.title ?? "");
    setValue("contents", data?.fetchBoard.title ?? "");
  }, [data]);

  // ! 다음 주소 api
  const onCompleteAddressSearch = (data: {
    address: string | undefined;
    zonecode: string | undefined;
  }): void => {
    setValue("address", data.address);
    setValue("zipcode", data.zonecode);
    toggleIsOpen();
  };

  // ! 필수 form 데이터 체크
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

  // ! 등록 함수
  const onClickSubmit = async (data: any): Promise<void> => {
    try {
      const result = await mutation({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
            youtubeUrl: data.youtubeUrl,
            boardAddress: {
              zipcode: data.zipcode,
              address: data.address,
              addressDetail: data.addressDetail,
            },
            images: fileUrls,
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
    onCompleteAddressSearch,
    onClickSubmit,
    onChangeFormItems,
    buttonState,
    setValue,
    fileUrls,
    setFileUrls,
  };
};
