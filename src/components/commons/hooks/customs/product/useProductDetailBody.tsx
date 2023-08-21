import { useCallback, useState } from "react";
import { useMutationToggleUseditemPick } from "../../mutations/useMutationToggleUseditemsPick";
import { useQueryIdChecker } from "../useQueryIdChecker";
import { useModal } from "../useModal";

// const FETCH_USEDITEMS_COUNT_PICKED = gql`
//   query {
//     fetchUseditemsIPicked {
//       _id
//       name
//     }
//   }
// `;

export const useProductDetailBody = () => {
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
      });
    } catch (error) {
      warningModal("로그인", "로그인후 이용이 가능합니다.", true);
    }
  }, [useditemId]);

  const handleAfterChange = useCallback((event: number) => {
    setFocusImg(event + 1);
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: handleAfterChange,
  };
  return {
    focusImg,
    settings,
    onClickPick,
  };
};
