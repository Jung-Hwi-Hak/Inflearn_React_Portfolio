import { useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import { useMutationToggleUseditemPick } from "../../mutations/useMutationToggleUseditemsPick";
import { useModal } from "../useModal";
import { FETCH_USEDITEMS_IPICKED } from "../../queries/useQueryFetchUseditemsIPicked";
import { FETCH_USEDITEMS_COUNT_IPICKED } from "../../queries/useQueryFetchUseditemsCountIPicked";
import { FETCH_USED_DETAIL_ITEM } from "../../queries/useQueryFetchUseditem";
import { useCallback } from "react";

export const useMyProductsBody = () => {
  const client = useApolloClient();
  const router = useRouter();

  const [pickMutation] = useMutationToggleUseditemPick();
  const { warningModal } = useModal();
  const iPickedDelete = useCallback(
    (useditemId: string) => async () => {
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
      } catch (error) {}
    },
    []
  );
  const checkDeleted = useCallback(
    (useditemId: string) => async () => {
      try {
        const check = await client.query({
          query: FETCH_USED_DETAIL_ITEM,
          variables: { useditemId },
        });
        if (check.data.fetchUseditem !== null) {
          void router.push(`/products/${useditemId}`);
        } else {
          await iPickedDelete(useditemId)();
          warningModal("게시글", "삭제된 게시글입니다.");
        }
      } catch (error) {
        await iPickedDelete(useditemId)();
        warningModal("게시글", "삭제된 게시글입니다.");
      }
    },
    []
  );

  return {
    checkDeleted,
  };
};
