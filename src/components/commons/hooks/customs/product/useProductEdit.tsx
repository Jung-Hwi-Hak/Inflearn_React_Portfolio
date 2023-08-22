import { useCallback } from "react";
import { useMutationUploadFile } from "../../mutations/useMutationUploadFile";
import { useQueryIdChecker } from "../useQueryIdChecker";
import { Modal } from "antd";
import type { IProductWriteYupSchema } from "../../../../units/product/write/ProductWrite.validation";
import type { UseFormWatch, UseFormSetValue } from "react-hook-form";
import { useModal } from "../useModal";
import { useMutationUpdateUseditem } from "../../mutations/useMutationUpdateUseditem";
import type {
  IUpdateUseditemInput,
  IUseditemAddressInput,
} from "../../../../../commons/types/generated/types";
import { FETCH_USED_DETAIL_ITEM } from "../../queries/useQueryFetchUseditem";
interface IUseBoardEditArgs {
  setValue: UseFormSetValue<IProductWriteYupSchema>;
  files: File[];
  watch: UseFormWatch<IProductWriteYupSchema>;
}

export const useBoardEdit = (args: IUseBoardEditArgs) => {
  const { id: useditemId } = useQueryIdChecker("productId");
  const [mutationUpdateProduct] = useMutationUpdateUseditem();
  const [uploadFileMutation] = useMutationUploadFile();
  const { successModal } = useModal();

  const onClickUpdateSubmit = useCallback(
    async (data: any) => {
      try {
        const updateUseditemInput: IUpdateUseditemInput = {};
        if (data.contents) updateUseditemInput.contents = data.contents;
        if (data.name) updateUseditemInput.name = data.name;
        if (data.price) updateUseditemInput.price = Number(data.price);
        if (data.tags) updateUseditemInput.tags = data.tags;
        if (data.remarks) updateUseditemInput.remarks = data.remarks;
        if (args.files.length > 0) {
          const promiseReulst = await Promise.all(
            args.files.map(async (el) => await uploadFileMutation({ variables: { file: el } }))
          );
          const resultFilesUrl = promiseReulst.map((el) => el.data?.uploadFile.url ?? "");

          if (resultFilesUrl) updateUseditemInput.images = resultFilesUrl;
        }
        const useditemAddress: IUseditemAddressInput = {};
        if (data.address) useditemAddress.address = data.address;
        if (data.addressDetail) useditemAddress.addressDetail = data.addressDetail;
        if (data.lat) useditemAddress.lat = parseFloat(data.lat);
        if (data.lng) useditemAddress.lng = parseFloat(data.lng);
        if (useditemAddress) updateUseditemInput.useditemAddress = useditemAddress;

        const result = await mutationUpdateProduct({
          variables: {
            useditemId,
            updateUseditemInput,
          },

          refetchQueries: [{ query: FETCH_USED_DETAIL_ITEM, variables: { useditemId } }],
        });
        successModal(
          "게시글 수정",
          "게시글 수정 완료",
          true,
          `/products/${String(result.data?.updateUseditem._id)}`
        );
      } catch (error) {
        if (error instanceof Error) Modal.warning({ content: error.message });
      }
    },
    [args.files]
  );

  return {
    onClickUpdateSubmit,
  };
};
