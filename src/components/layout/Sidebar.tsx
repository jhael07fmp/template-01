import { Menu } from "antd";

import { ItemType, MenuItemType } from "antd/es/menu/hooks/useItems";

const Sidebar = ({ items }: { items?: ItemType<MenuItemType>[] }) => {
  return (
    <div className="w-[13rem] bg-dark-800  overflow-y-scroll fixed h-screen ">
      <div className="w-11/12 rounded-md border px-4 py-2.5 mx-auto mt-4 mb-2 flex justify-center border-slate-500">
        <h1 className="text-xl text-white font-medium">e-taxcore</h1>
      </div>
      <div className="w-11/12 mx-auto flex">
        <Menu
          theme="dark"
          mode="inline"
          inlineCollapsed={false}
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </div>
    </div>
  );
};

export default Sidebar;
