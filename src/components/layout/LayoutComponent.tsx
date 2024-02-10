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
import { RiMenu2Line } from "react-icons/ri";
import Sidebar from "./Sidebar";

const LayoutComponent = () => {
  return (
    <div className="min-h-screen bg-slate-100 fixed ">
      <Sidebar items={menuItems as ItemType<MenuItemType>[]} />
      <div className="ml-[15.2rem] w-screen h-screen ">
        <div className="bg-slate-50 w-full p-5 border-b shadow-sm flex justify-between items-center">
          <RiMenu2Line className="text-xl" />
          <div></div>
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
