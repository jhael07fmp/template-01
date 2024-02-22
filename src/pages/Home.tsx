import { ReactNode } from "react";
import { BarChart } from "../components/charts/Bar";
import LayoutComponent from "../components/layout/LayoutComponent";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { GrLineChart } from "react-icons/gr";
import { FiArrowRight } from "react-icons/fi";
import { ICard } from "../interface/common";
import { Link } from "react-router-dom";
import { useContextProvider } from "../context/ContextProvider";

const Home = () => {
  const { isSideBarOpen } = useContextProvider();

  return (
    <LayoutComponent>
      <div className="grid xl:flex xl:flex-col xl:flex-wrap gap-x-2 w-full max-h-[90vh] max-w-7xl mx-auto ">
        <div className="w-full 18pg:w-80 xl:w-64 pb-4 flex flex-col gap-y-5 xl:h-[87vh] transition-all ">
          <div className="grid sm:flex xl:hidden w-11/12 mx-auto gap-y-4 xl:w-full gap-x-2 ">
            <InfoCard navigateTo="/" label="Total de Facturas" value={10000} color="#112640" />
            <InfoCard navigateTo="/" label="Monto Total Emitido" value={0} color="#5113c4" />
          </div>
          <div className="min-h-[8rem] hidden xl:block">
            <AdsCard />
          </div>
          <CustomerCard />
          <div>
            <PurchasingCard />
          </div>
        </div>
        <div
          className={`w-full gap-y-5 flex flex-col transition-all duration-500  pb-4 ${
            isSideBarOpen ? "xl:w-[39rem]" : "xl:w-[32rem]"
          }`}
        >
          <div className="hidden xl:flex w-11/12 mx-auto gap-y-4 xl:w-full gap-x-2 ">
            <InfoCard navigateTo="/" label="Total de Facturas" value={10000} color="#112640" />
            <InfoCard navigateTo="/" label="Monto Total Emitido" value={0} color="#5113c4" />
          </div>
          <div
            className="w-11/12 mx-auto lg:w-full p-2 rounded-md bg-white border 
          shadow-md h-fit transition-all duration-500"
          >
            <h2 className="ml-4 mt-2 font-medium">Facturas</h2>
            <BarChart height={300} />
          </div>
        </div>
        <div className="w-full pb-4 flex flex-col gap-y-5 xl:h-[87vh] xl:w-[16.5rem] 18pg:w-72">
          <CustomerCard />
          <ComprobantesStatus />
        </div>
      </div>
    </LayoutComponent>
  );
};

export default Home;

const InfoCard = (props: ICard) => {
  const { label, value, navigateTo, color } = props;

  const representAmount = (value: number) => {
    if (value >= 1_100_000) return value.toString().substring(0, 3) + "M";
    if (value >= 1_000_000) return value.toString()[0] + "M";
    if (value >= 100000) return value.toString().substring(0, 3) + "k";
    if (value >= 10_000) return value.toString().substring(0, 2) + "k";
    if (value >= 1000) return value.toString()[0] + "k";
    return value;
  };

  return (
    <div
      className="min-h-[7rem] bg-white rounded-md border shadow-md w-full flex px-4 
pt-4 "
    >
      <div className="justify-between  items-start w-full">
        <div className="flex items-center gap-x-4">
          <div
            className="w-9 h-9 rounded-full flex justify-center items-center"
            style={{ backgroundColor: color }}
          >
            <LiaFileInvoiceDollarSolid className="text-white text-xl" />
          </div>
          <div>
            <h3 className="text-[0.7rem] font-semibold text-slate-400">{label}</h3>
            <h1 className="font-medium text-gray-700 text-xl">
              {typeof value === "number" ? representAmount(value) : null}
            </h1>
          </div>
        </div>
        <Link
          to={navigateTo}
          className="text-xs mt-2 ml-0 font-medium hover:bg-slate-100 p-1.5 rounded-md text-slate-700 flex gap-x-1.5 items-center w-fit"
        >
          Ver más
          <FiArrowRight className="mt-1 text-[0.7rem]" />
        </Link>
      </div>

      <GrLineChart className="text-3xl mt-3 mr-2" style={{ color }} />
    </div>
  );
};

const CardHeader = ({ title, icon }: { title: string; icon: ReactNode }) => (
  <div className="flex justify-between items-center p-1 pb-1.5 border-b">
    <h2 className="font-semibold text-sm text-slate-950">{title} </h2>
    <div className="h-8 w-8 flex justify-center items-center font-medium rounded-md bg-slate-100  ">
      {icon}
    </div>
  </div>
);

const CustomerCard = () => (
  <div className="lg:w-full w-11/12 border rounded-md shadow-md p-2 pb-0 bg-white  mx-auto ">
    <CardHeader title="! Clientes Potenciales" icon={"!"} />
    <div className="h-52 flex flex-col overflow-hidden">
      <CustomerInfo />
      <CustomerInfo />
      <CustomerInfo />
      <CustomerInfo />
    </div>
  </div>
);
const PurchasingCard = () => (
  <div className="w-11/12 mx-auto lg:w-full border grid  rounded-md shadow-sm p-2  bg-white">
    <CardHeader title="! Gráfico De Compras" icon={"$"} />
    <div className=" flex flex-col gap-y-1 overflow-hidden">
      <BarChart />
    </div>
  </div>
);

const ComprobantesStatus = () => {
  return (
    <div className="w-11/12 mx-auto lg:w-full border  rounded-md shadow-sm p-2 pb-0 bg-white lg:max-w-md">
      <CardHeader title="! Estado de Comprobantes" icon={"!"} />
      <div className=" flex flex-col gap-y-1 overflow-hidden">
        <div className="   border-b-4 mb-4 border-green-500 p-1">
          <h1 className="font-medium">11</h1>
        </div>
        <ComprobantesItems amount={11} name="Sunat Aceptados" color="#2eb93e" />
        <ComprobantesItems amount={0} name="Emitidos" color="#5113c4" />
        <ComprobantesItems amount={0} name="Firmados" color="#13a7e7" />
        <ComprobantesItems amount={0} name="Anulados" color="#e7cb13" />
        <ComprobantesItems amount={0} name="Fisicos" color="" />
      </div>
    </div>
  );
};

const ComprobantesItems = ({
  name,
  amount,
  color,
}: {
  name: string;
  amount: number;
  color: string;
}) => (
  <div className="flex justify-between p-2">
    <div className="flex gap-x-2 text-xs font-medium text-slate-600 items-center">
      <div className=" rounded-full h-2 w-2" style={{ backgroundColor: color }}></div> {name}
    </div>
    <p className="text-xs font-medium text-slate-600">{amount} Comprobantes</p>
  </div>
);

const CustomerInfo = () => (
  <div className="flex justify-between px-0.5 items-center gap-x-2">
    <div className="flex gap-x-2 mt-4 ">
      <div className="rounded-full w-10 h-10 bg-blue-100"></div>
      <div className="flex flex-col gap-y-1 place-items-start  justify-start">
        <h2 className="text-[0.6rem] font-medium">UNION DE NEGOCIOS CORPOR...</h2>
        <h2 className="text-[.5rem] text-slate-500">AVE. JAVIER PRADO ESTE NINO G...</h2>
      </div>
    </div>

    <h2 className="text-xs font-medium text-gray-950">s/10549.00</h2>
  </div>
);

const AdsCard = () => (
  <div className="w-full rounded-md border shadow-md h-full overflow-hidden relative max-w-sm mx-auto ">
    <div className="w-full h-full bg-blue-900 "></div>
    <img
      className="h-full w-full absolute z-10 top-0 opacity-30"
      src="https://c4.wallpaperflare.com/wallpaper/547/574/576/firewatch-landscape-forest-minimalistic-wallpaper-thumb.jpg"
    />
    <div className="z-20 w-full flex justify-between absolute top-0 pt-4 px-2 ">
      <div className="mt-1 ml-2 w-9/12 xl:w-8/12 pr-1">
        <h2 className="font-medium text-white xl:text-sm">¿Más información?</h2>
        <h3 className="text-[0.68rem] mt-1 text-white">
          Sistema de Facturación Electrónica y gestión de tu empresa.
        </h3>
        <button className="mt-0 2xl:mt-2 text-white underline">Comprar</button>
      </div>
      <div className="w-14 h-14 mr-2 mt-2 rounded-full border-4 border-white z-20 flex justify-center items-center">
        <p className="text-white">100%</p>
      </div>
    </div>
  </div>
);
