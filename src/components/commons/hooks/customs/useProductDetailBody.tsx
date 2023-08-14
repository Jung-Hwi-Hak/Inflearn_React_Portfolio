import { useCallback, useState } from "react";
import { useMutationToggleUseditemPick } from "../mutations/useMutationToggleUseditemsPick";
import { useQueryIdChecker } from "./useQueryIdChecker";

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
  const onClickPick = async () => {
    const result = await pickMutation({
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
    console.log(result);
  };

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
