import { Menu } from "antd";
import { ItemType, MenuItemType } from "antd/es/menu/hooks/useItems";

const Sidebar = ({
  items,
  inlineCollapsed,
}: {
  items?: ItemType<MenuItemType>[];
  inlineCollapsed: boolean;
}) => {
  return (
    <div
      className={`${
        inlineCollapsed ? "w-fit" : "w-[13rem]"
      } bg-dark-800  overflow-y-scroll overflow-x-hidden fixed h-screen transition-all z-50 hidden xl:block `}
    >
      <div
        className={`w-11/12 rounded-md border ${
          inlineCollapsed ? "px-1 ml-1" : "px-4"
        } py-2.5  mt-4 mb-2 flex mx-auto justify-center
       border-slate-500`}
      >
        <h1 className={`${inlineCollapsed ? "text-sm" : "text-xl"} text-white font-medium`}>
          e-taxcore
        </h1>
      </div>
      <div className={`${inlineCollapsed ? "w-full" : "w-11/12"} mx-auto flex`}>
        <Menu
          theme="dark"
          mode="inline"
          inlineCollapsed={inlineCollapsed}
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </div>
    </div>
  );
};

export default Sidebar;
