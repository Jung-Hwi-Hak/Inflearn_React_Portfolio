import { useCallback } from "react";
import { useQueryIdChecker } from "../useQueryIdChecker";
import { useModal } from "../useModal";
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
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchUseditemsISold: (prev, { readField }) => {
              const deletedId = data?.deleteUseditem;
              const filteredPrev = prev.filter((el: any) => readField("_id", el) !== deletedId);
              return [...filteredPrev];
            },
            fetchUseditemsCountISold: (prev) => {
              if (prev < 2) return 1;
              return prev - 1;
            },
            fetchUseditem: () => null,
          },
        });
      },
    });

    successModal("게시글 삭제", "게시글 삭제 성공", true, "/products");
  }, [useditemId]);

  const onClickDeleteProduct = useCallback(async () => {
    try {
      confirmModal(deleteProductOnOk, "게시글 삭제", "게시글을 삭제하시겠습니까?", true, undefined);
    } catch (error) {
      warningModal("게시글 삭제", "게시글 삭제 오류", true, "/products");
    }
  }, [deleteProductOnOk]);

  return {
    onClickDeleteProduct,
  };
};
