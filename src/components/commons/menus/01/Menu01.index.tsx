import { Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { memo } from "react";

function Menu01(): JSX.Element {
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: any,
    type?: "group"
  ): any {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem("", "sub1", <MenuOutlined rev={undefined} />, [
      getItem(
        "",
        "g1",
        null,
        [getItem("자유게시판", "1"), getItem("중고마켓", "2"), getItem("마이페이지", "3")],
        "group"
      ),
    ]),
  ];
  return (
    <>
      <Menu
        // onClick={onClick}
        style={{
          width: 150,
          borderRadius: "20px",
          color: "black",
          backgroundColor: "rgba(0,0,0,0.1)",
        }}
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
      />
    </>
  );
}

export default memo(Menu01);

// const { createRoot } = ReactDOM;

// const {  AppstoreOutlined, MailOutlined, SettingOutlined  } = icons;
// const {  Menu  } = antd;
// function getItem(label, key, icon, children, type) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   };
// }
// const items = [
//   getItem('네비게이션', 'sub1', <MailOutlined />, [
//     getItem('', 'g1', null, [getItem('자유게시판', '1'), getItem('중고마켓', '2'),getItem('마이페이지', '3')],'group'),
//   ]),
// ];
// const App = () => {
//   const onClick = (e) => {
//     console.log('click ', e);
//   };
//   return (
//     <Menu
//       onClick={onClick}
//       style={{
//         width: 256,
//       }}
//       defaultSelectedKeys={['1']}
//       defaultOpenKeys={['sub1']}
//       mode="inline"
//       items={items}
//     />
//   );
// };
// const ComponentDemo = App;

// createRoot(mountNode).render(<ComponentDemo />);
