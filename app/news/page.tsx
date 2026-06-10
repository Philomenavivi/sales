"use client";

import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";

export default function News() {
  return (
    <div className="bg-gray-500 p-8 text-center">
      <h1 className="text-2xl font-bold mb-4">
        Welcome to our everyday news concerning our ecommerce dashboard
      </h1>

      <button className="rounded-full bg-blue-500 text-black px-6 py-3 mb-6">
        New Order
      </button>

      <div className="flex justify-center mb-8">
        <LineChart
          xAxis={[
            {
              data: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              scaleType: "point",
            },
          ]}
          series={[
            {
              data: [
                3000, 4000, 7000, 9000, 2200, 1000,
                900, 5000, 6000, 8000, 11000, 32000,
              ],
            },
          ]}
          height={300}
          width={600}
        />
      </div>

      <div className="flex justify-center">
        <BarChart
          xAxis={[
            {
              data: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              scaleType: "band",
            },
          ]}
          series={[
            {
              data: [
                9000, 7000, 2000, 4000, 3000, 700,
                1000, 5000, 600, 2500, 4500, 8000,
              ],
            },
          ]}
          height={300}
          width={600}
        />
      </div>
    </div>
  );
}