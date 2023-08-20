import { useAuth } from "../../src/components/commons/hooks/customs/useAuth";
import { useQueryFetchUseditemsIPicked } from "../../src/components/commons/hooks/queries/useQueryFetchUseditemsIPicked";

function MyPage(): JSX.Element {
  const { data } = useQueryFetchUseditemsIPicked();
  console.log(data);
  return <></>;
}
export default useAuth(MyPage);
