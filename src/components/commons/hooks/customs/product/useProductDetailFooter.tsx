import { useCallback } from "react";
import { useQueryIdChecker } from "../useQueryIdChecker";
import { useModal } from "../useModal";
import { FETCH_BOARDS } from "../../queries/useQueryFetchBoards";
import { useMutationDeleteUseditem } from "../../mutations/useMutationDeleteUseditem";

interface IUseProductReturn {
  onClickDeleteProduct: () => Promise<void>;
}

export const useProductDetailFooter = (): IUseProductReturn => {
  const { id: useditemId } = useQueryIdChecker("productId");
  const { confirmModal, warningModal, successModal } = useModal();
  const [mutationDeleteUseditem] = useMutationDeleteUseditem();
  const deleteProductOnOk = useCallback(async () => {
    await mutationDeleteUseditem({
      variables: {
        useditemId,
      },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });

    successModal("게시글 삭제", "게시글 삭제 성공", true, "/products");
  }, [useditemId]);

  const onClickDeleteProduct = useCallback(async () => {
    try {
      confirmModal(deleteProductOnOk, "게시글 삭제", "게시글을 삭제하시겠습니까?", true, undefined);
    } catch (error) {
      warningModal("게시글 삭제", "게시글 삭제 오류", true, "/boards");
    }
  }, [deleteProductOnOk]);

  return {
    onClickDeleteProduct,
  };
};
