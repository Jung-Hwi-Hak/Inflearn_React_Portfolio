import { useRouter } from "next/router";

interface IUseQueryIdChecker {
  id: string;
}

export const useQueryIdChecker = (id: string): IUseQueryIdChecker => {
  const router = useRouter();
  const queryId = router.query[id];
  if (queryId === undefined) return { id: "" };
  if (typeof queryId === "string") return { id: queryId };
  if (typeof queryId === "object") return { id: queryId[0] };
  return { id: "" };
};
