import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

export function BarChart({ height }: { height?: number }) {
  const chartOptions: ApexOptions = {
    chart: {
      width: "100%",
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
      toolbar: { show: true },
    },
    stroke: { curve: "smooth", show: true, width: 2 },

    series: [
      {
        name: "Pendientes",
        color: "#ffcf24",
        data: [10, 30, 55, 20, 10],
      },

      {
        name: "Completadas",
        data: [12, 4, 60, 12, 8],
      },
    ],
    dataLabels: {
      distributed: true,
    },
    xaxis: {
      type: "category",
      categories: ["Jan", "Feb", "Mar", "Apr", "May"],
    },
  };

  return (
    <div className="w-full overflow-hidden">
      <ReactApexChart
        options={chartOptions}
        series={chartOptions.series}
        type="bar"
        height={height || 180}
        width={"100%"}
      />
    </div>
  );
}
