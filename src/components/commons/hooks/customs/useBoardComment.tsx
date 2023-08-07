import type { ChangeEvent, RefObject } from "react";
import { useRef, useState } from "react";
import { useMutationCreateBoardComment } from "../mutations/useMutationCreateBoardComment";
import { FETCH_BOARD_COMMENTS } from "../queries/useQueryFetchBoardComments";
import { useMutationUpdateBoardComment } from "../mutations/useMutationUpdateBoardComment";
import { useMutationDeleteBoardComment } from "../mutations/useMutationDeleteBoardComment";
import { Modal } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import { yupSchema } from "../../comments/board/wirte/CommentsBoardWrite.validation";
import type { IBoardComment } from "../../../../commons/types/generated/types";
import { useForm } from "react-hook-form";
import type { UseFormWatch, UseFormRegister, UseFormHandleSubmit } from "react-hook-form";
interface IUpdateBoardCommentInput {
  contents?: string;
  rating?: number;
}

interface IUseBoardCommentArgs {
  boardId: string;
  boardCommentId?: string;
  onToggleEdit?: () => void;
  el?: IBoardComment | undefined;
}

interface IUseBoardCommentReturn {
  onClickWrite: (data: any) => Promise<void>;
  onClickUpdate: (data: any) => Promise<void>;
  onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickDelete: () => Promise<void>;
  onChangeStar: (value: number) => void;
  register: UseFormRegister<{
    writer: string;
    contents: string;
    star: number | undefined;
    password: string;
  }>;
  handleSubmit: UseFormHandleSubmit<
    {
      writer: string;
      contents: string;
      star: number | undefined;
      password: string;
    },
    undefined
  >;
  watch: UseFormWatch<{
    writer: string;
    contents: string;
    star: number | undefined;
    password: string;
  }>;
  starRef: RefObject<HTMLInputElement>;
}

export const useBoardComment = (args: IUseBoardCommentArgs): IUseBoardCommentReturn => {
  const [myPassword, setMyPassword] = useState("");
  const [createBoardComment] = useMutationCreateBoardComment();
  const [updateBoardComment] = useMutationUpdateBoardComment();
  const [deleteBoardComment] = useMutationDeleteBoardComment();
  const starRef = useRef<HTMLInputElement>(null);
  const { register, handleSubmit, watch, reset, setValue } = useForm({
    resolver: yupResolver(yupSchema),
    mode: "onChange",
    defaultValues: {
      writer: args.el?.writer ?? "",
      password: "",
      contents: args.el?.contents ?? "",
      star: 0,
    },
  });

  const onChangeStar = (value: number) => {
    setValue("star", value);
  };

  const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event?.target.value);
  };

  const onClickDelete = async () => {
    if (!args.boardCommentId) return;
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: args.boardCommentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: args.boardId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickUpdate = async (data: any) => {
    if (!data.contents) {
      alert("내용이 수정되지 않았습니다.");
      return;
    }
    if (!data.password) {
      alert("비밀번호가 입력되지 않았습니다.");
      return;
    }

    try {
      const updateBoardCommentInput: IUpdateBoardCommentInput = {};
      if (data.contents) updateBoardCommentInput.contents = data.contents;
      if (data.star) updateBoardCommentInput.rating = data.star;
      if (!args.boardCommentId) return;

      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password: data.password,
          boardCommentId: args.boardCommentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: args.boardId },
          },
        ],
      });
      if (args.onToggleEdit) args.onToggleEdit();
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickWrite = async (data: any) => {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: data.writer,
            password: data.password,
            contents: data.contents,
            rating: data.star,
          },
          boardId: args.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: args.boardId },
          },
        ],
      });
      reset();
      // console.log(starRef.current?.count);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return {
    onClickWrite,
    onClickUpdate,
    onChangeDeletePassword,
    onClickDelete,
    onChangeStar,
    register,
    handleSubmit,
    watch,
    starRef,
  };
};
