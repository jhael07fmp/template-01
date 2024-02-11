import { FiMinimize } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";
import { PiMoonLight } from "react-icons/pi";
import { CiMoneyBill } from "react-icons/ci";
import { RiMenu2Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="ml-[15rem] bg-slate-50 p-5 border-b shadow-sm flex justify-between items-center text-slate-600">
      <RiMenu2Line className="text-xl" />
      <div className="flex items-center gap-x-6 w-fit ">
        <CiMoneyBill className="text-2xl " />
        <PiMoonLight className="text-xl" />
        <FiMinimize className="text-lg" />
        <p className=" text-slate-500">ANDRE</p>
        <CiSettings className="text-2xl" />
      </div>
    </div>
  );
};

export default Navbar;
