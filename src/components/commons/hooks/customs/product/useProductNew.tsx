import { useMutationUploadFile } from "../../mutations/useMutationUploadFile";

import { useCallback } from "react";
import { useModal } from "../useModal";
import { useMutationCreateUseditem } from "../../mutations/useMutationCreateUseditem";
interface IUseBoardEditArgs {
  files: File[];
}

interface IReturns {
  onClickCreateSubmit: (data: any) => Promise<void>;
}

export const useBoardNew = (args: IUseBoardEditArgs): IReturns => {
  const [mutationCreateProduct] = useMutationCreateUseditem();
  const [uploadFileMutation] = useMutationUploadFile();
  const { successModal, warningModal } = useModal();

  const onClickCreateSubmit = useCallback(
    async (data: any): Promise<void> => {
      try {
        const tags = data.tags
          .split("#")
          .filter((tag: string) => tag !== "")
          .map((tag: string) => `#${tag}`);

        // const files = args.files.filter((el) => typeof el === "object");
        const filteredArray = args.files.filter((item) => item !== undefined && item !== null);
        const results = await Promise.all(
          filteredArray.map(async (el) => await uploadFileMutation({ variables: { file: el } }))
        );
        const resultFilesUrl = results.map((el) => el.data?.uploadFile.url ?? "");

        const result = await mutationCreateProduct({
          variables: {
            createUseditemInput: {
              name: data.name,
              remarks: data.remarks,
              contents: data.contents,
              price: Number(data.price),
              tags,
              useditemAddress: {
                address: data.address,
                addressDetail: data.addressDetail,
                lat: parseFloat(data.lat),
                lng: parseFloat(data.lng),
              },
              images: resultFilesUrl,
            },
          },
          update(cache, { data }) {
            cache.modify({
              fields: {
                fetchUseditems: (prev) => {
                  return [data?.createUseditem, ...prev];
                },
                fetchUseditemsISold: (prev) => {
                  return [data?.createUseditem, ...prev];
                },
                fetchUseditemsCountISold: (prev) => {
                  return Number(prev) + 1;
                },
              },
            });
          },
        });
        successModal(
          "상품 등록",
          "상품 등록 완료",
          true,
          `/products/${String(result.data?.createUseditem._id)}`
        );
      } catch (error) {
        if (error instanceof Error) warningModal("상품 등록", "상품 등록 실패", true, undefined);
      }
    },
    [args.files]
  );

  return {
    onClickCreateSubmit,
  };
};
