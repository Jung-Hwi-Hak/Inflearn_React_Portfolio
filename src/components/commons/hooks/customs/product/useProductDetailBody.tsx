import { useCallback, useMemo, useState } from "react";
import { useMutationToggleUseditemPick } from "../../mutations/useMutationToggleUseditemsPick";
import { useQueryIdChecker } from "../useQueryIdChecker";
import { useModal } from "../useModal";
import { FETCH_USEDITEMS_IPICKED } from "../../queries/useQueryFetchUseditemsIPicked";
import { FETCH_USEDITEMS_COUNT_IPICKED } from "../../queries/useQueryFetchUseditemsCountIPicked";

interface IUseProductDetailBodyReturns {
  focusImg: number;
  settings: {
    dots: boolean;
    arrows: boolean;
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    afterChange: (event: number) => void;
  };
  onClickPick: () => Promise<void>;
}

export const useProductDetailBody = (): IUseProductDetailBodyReturns => {
  const [focusImg, setFocusImg] = useState(1);
  const { id: useditemId } = useQueryIdChecker("productId");
  const [pickMutation] = useMutationToggleUseditemPick();
  const { warningModal } = useModal();
  const onClickPick = useCallback(async () => {
    try {
      await pickMutation({
        variables: { useditemId },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditem: () => {
                return data?.toggleUseditemPick;
              },
            },
          });
        },
        refetchQueries: [
          { query: FETCH_USEDITEMS_IPICKED, variables: { search: "" } },
          { query: FETCH_USEDITEMS_COUNT_IPICKED },
        ],
      });
    } catch (error) {
      if (error instanceof Error) warningModal("상품목록 찜 오류", error.message, true);
    }
  }, [useditemId]);

  const handleAfterChange = useCallback((event: number) => {
    setFocusImg(event + 1);
  }, []);

  const settings = useMemo(
    () => ({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: handleAfterChange,
    }),
    [handleAfterChange]
  );
  return {
    focusImg,
    settings,
    onClickPick,
  };
};
