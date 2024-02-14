import { ReactNode } from "react";
import { BarChart } from "../components/charts/Bar";
import LayoutComponent from "../components/layout/LayoutComponent";

const Home = () => {
  return (
    <LayoutComponent>
      <div className="flex gap-x-4 w-full h-full">
        <div className="w-7/12  py-4 flex flex-col gap-y-5 h-[87vh] ">
          <div className=" min-h-[8rem]">
            <AdsCard />
          </div>
          <CustomerCard />
          <PurchasingCard />
        </div>
        <div className="w-full  py-4 ">
          <div className="flex w-full gap-x-2">
            <div className="min-h-[8rem] bg-white rounded-md border shadow-md w-full"></div>
            <div className="min-h-[8rem] bg-white rounded-md border shadow-md w-full"></div>
          </div>
        </div>
        <div className="w-7/12 py-4 flex flex-col gap-y-5 h-[87vh]">
          <CustomerCard />
          <ComprobantesStatus />
        </div>
      </div>
    </LayoutComponent>
  );
};

export default Home;

const CardHeader = ({ title, icon }: { title: string; icon: ReactNode }) => (
  <div className="flex justify-between items-center p-1 pb-1.5 border-b">
    <h2 className="font-semibold text-sm text-slate-950">{title} </h2>
    <div className="h-8 w-8 flex justify-center items-center font-medium rounded-md bg-slate-100  ">
      {icon}
    </div>
  </div>
);

const CustomerCard = () => (
  <div className="w-full border rounded-md shadow-md p-2 pb-0 bg-white">
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
  <div className="w-full border  rounded-md shadow-sm p-2 pb-0 bg-white">
    <CardHeader title="! Gráfico De Compras" icon={"$"} />
    <div className=" flex flex-col gap-y-1 overflow-hidden">
      <BarChart />
    </div>
  </div>
);

const ComprobantesStatus = () => {
  return (
    <div className="w-full border  rounded-md shadow-sm p-2 pb-0 bg-white">
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
  <div className="w-full rounded-md border shadow-md h-full overflow-hidden relative ">
    <div className="w-full h-full bg-blue-900 "></div>
    <img
      className="h-full w-full absolute z-10 top-0 opacity-30"
      src="https://c4.wallpaperflare.com/wallpaper/547/574/576/firewatch-landscape-forest-minimalistic-wallpaper-thumb.jpg"
    />
    <div className="z-20 w-full flex justify-between absolute top-0 pt-4 px-2 ">
      <div className="mt-1 ml-2 w-9/12 pr-1">
        <h2 className="font-medium text-white">¿Más información?</h2>
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
