import { FiMinimize } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";
import { PiMoonLight } from "react-icons/pi";
import { CiMoneyBill } from "react-icons/ci";
import { RiMenu2Line } from "react-icons/ri";
import { useContextProvider } from "../../context/ContextProvider";

const Navbar = () => {
  const { setIsSideBarOpen, isSideBarOpen } = useContextProvider();

  return (
    <div
      className={`${
        isSideBarOpen ? "xl:pl-[6.5rem]" : " xl:pl-[14.8rem]"
      } bg-white p-5 border-b shadow-sm flex justify-between transition-all duration-200
    items-center text-slate-600 w-[100%]`}
    >
      <button
        className="w-10  outline-none active:text-blue-500"
        onClick={() => {
          setIsSideBarOpen((prev) => !prev);
        }}
      >
        <RiMenu2Line className="text-xl" />
      </button>
      <div className="flex items-center gap-x-6 w-fit ">
        <button>
          <CiMoneyBill className="text-2xl " />
        </button>

        <PiMoonLight className="text-xl" />
        <FiMinimize className="text-lg" />
        <p className=" text-slate-500">ANDRE</p>
        <CiSettings className="text-2xl" />
      </div>
    </div>
  );
};

export default Navbar;
