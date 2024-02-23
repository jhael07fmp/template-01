import {
  FiBox,
  FiCreditCard,
  FiEdit,
  FiFolder,
  FiGrid,
  FiHome,
  FiShoppingCart,
  FiTrendingUp,
  FiUnderline,
  FiUsers,
} from "react-icons/fi";
import { FiDollarSign } from "react-icons/fi";
import { MdOutlineInventory } from "react-icons/md";
import { LiaCashRegisterSolid } from "react-icons/lia";
import { GiSquare } from "react-icons/gi";
import { LuSquareEqual } from "react-icons/lu";
import { MdCreditScore } from "react-icons/md";
import { LuClipboardList } from "react-icons/lu";
import { MdOutlineQueryStats } from "react-icons/md";
import { ItemType, MenuItemType } from "antd/es/menu/hooks/useItems";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { ReactNode } from "react";
import { useContextProvider } from "../../context/ContextProvider";

const LayoutComponent = ({ children }: { children: ReactNode }) => {
  const { isSideBarOpen } = useContextProvider();
  return (
    <div className="h-screen bg-slate-100 fixed w-full overflow-y-scroll">
      <Sidebar inlineCollapsed={isSideBarOpen} items={menuItems as ItemType<MenuItemType>[]} />
      <div className="w-full h-screen">
        <Navbar />
        <div
          className={`w-full ${
            isSideBarOpen ? "xl:pl-[3.5rem] 18pg:pl-[3rem]" : "xl:pl-[6rem] 18pg:pl-[5.6rem]"
          } transition-all duration-700 justify-center flex`}
        >
          <div className={`flex justify-center w-full 4xl:mx-auto`}>
            <div
              className={`flex mx-auto  w-full xl:w-11/12 4xl:w-full max-h-[90vh] mt-2 max-w-7xl ${
                isSideBarOpen ? "pl-0 " : "pl-20"
              }`}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutComponent;

const menuItems = [
  { key: "1", label: "Dashboard", icon: <FiHome /> },
  {
    type: "group",
    label: "Logistica",
    children: [
      {
        key: "3",
        label: "Almacen",
        icon: <FiBox />,
      },
      {
        key: "4",
        label: "Categoria",
        icon: <FiGrid />,
      },
      {
        key: "5",
        label: "Unidad de Medida",
        icon: <FiUnderline />,
      },
      {
        key: "6",
        label: "Compras",
        icon: <FiShoppingCart />,
      },
      {
        key: "7",
        label: "Articulos",
        icon: <FiFolder />,
      },
      {
        key: "8",
        label: "Stock/Precios",
        icon: <FiDollarSign />,
      },
      {
        key: "9",
        label: "Transf. de stock",
        icon: <FiFolder />,
      },
      {
        key: "10",
        label: "Registro Inventario",
        icon: <MdOutlineInventory />,
      },
    ],
  },
  {
    type: "group",
    label: "Gestion de Ventas",

    children: [
      {
        key: "11",
        label: "Caja",
        icon: <LiaCashRegisterSolid />,
      },
      {
        key: "12",
        label: "POS",
        icon: <GiSquare />,
      },
      {
        key: "13",
        label: "Realizar Venta",
        icon: <FiCreditCard />,
      },
      {
        key: "14",
        label: "Comprobantes",
        icon: <LuSquareEqual />,
      },
      {
        key: "15",
        label: "Resumen de Caja",
        icon: <LuClipboardList />,
      },
      {
        key: "16",
        label: "Créditos Pendientes",
        icon: <MdCreditScore />,
      },
      {
        type: "group",
        label: "Contabilidad",
        children: [
          {
            key: "17",
            label: "Kardex por articulo",
            icon: <FiTrendingUp />,
          },
          {
            key: "18",
            label: "Reportes",
            icon: <MdOutlineQueryStats />,
          },
        ],
      },
      {
        type: "group",
        label: "Administración",
        children: [
          {
            key: "19",
            label: "Administración",
            icon: <FiUsers />,
          },
          {
            key: "20",
            label: "Planilla Personal",
            icon: <FiEdit />,
          },
        ],
      },
    ],
  },
];
