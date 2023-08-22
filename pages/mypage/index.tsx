import { useAuth } from "../../src/components/commons/hooks/customs/useAuth";
import MyPageIndex from "../../src/components/units/mypage/MyPage.index";
function MyPage(): JSX.Element {
  return <MyPageIndex />;
}
export default useAuth(MyPage);
