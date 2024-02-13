import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { ItemType, MenuItemType } from "antd/es/menu/hooks/useItems";

const Navbar = ({ items }: { items?: ItemType<MenuItemType>[] }) => {
  return (
    <Header className="bg-white border-b w-full">
      <div className="demo-logo">
        <p>FMP</p>
      </div>
      <Menu
        theme="light"
        mode="horizontal"
        className="border-none w-fit"
        defaultSelectedKeys={["1"]}
        items={items}
        style={{ flex: 1 }}
      />
    </Header>
  );
};

export default Navbar;
