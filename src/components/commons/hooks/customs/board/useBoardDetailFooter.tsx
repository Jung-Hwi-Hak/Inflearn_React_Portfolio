import { useCallback } from "react";
import { useMutationDeleteBoard } from "../../mutations/useMutationDeleteBoard";
import { useMutationDisLikeBoard } from "../../mutations/useMutationDisLikeBoard";
import { useMutationLikeBoard } from "../../mutations/useMutationLikeBoard";
import { FETCH_BOARD } from "../../queries/useQueryFetchBoard";
import { useQueryIdChecker } from "../useQueryIdChecker";
import { useModal } from "../useModal";
import { useRouter } from "next/router";
import { FETCH_BOARDS } from "../../queries/useQueryFetchBoards";

interface IUseBoardLikeReturn {
  onClickLike: () => void;
  onClickDisLike: () => void;
  onClickDeleteBoard: () => Promise<void>;
}

export const useBoardDetailFooter = (): IUseBoardLikeReturn => {
  const router = useRouter();
  const { id: boardId } = useQueryIdChecker("boardId");
  const [likeBoard] = useMutationLikeBoard();
  const [disLikeBoard] = useMutationDisLikeBoard();
  const { confirmModal, warningModal } = useModal();
  const [mutationDeleteBoard] = useMutationDeleteBoard();
  const deleteBoardOnOk = useCallback(async () => {
    await mutationDeleteBoard({
      variables: {
        boardId,
      },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
    void router.push("/boards");
  }, [boardId]);

  const onClickDeleteBoard = useCallback(async () => {
    try {
      confirmModal(deleteBoardOnOk, "게시글 삭제", "게시글을 삭제하시겠습니까?", true, undefined);
    } catch (error) {
      warningModal("게시글 삭제", "게시글 삭제 오류", true, "/boards");
    }
  }, [deleteBoardOnOk]);

  const onClickLike = useCallback(async () => {
    await likeBoard({
      variables: { boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId },
        },
      ],
    });
  }, [boardId]);

  const onClickDisLike = useCallback(async () => {
    await disLikeBoard({
      variables: { boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId },
        },
      ],
    });
  }, [boardId]);

  return {
    onClickDisLike,
    onClickLike,
    onClickDeleteBoard,
  };
};
