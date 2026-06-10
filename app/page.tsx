"use client";

import VisibilityIcon from "@mui/icons-material/Visibility";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import CategoryIcon from "@mui/icons-material/Category";

import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { Typography } from "@mui/material";

const stats = [
  {
    icon: (
      <VisibilityIcon className="text-blue-600 bg-blue-100 p-3 rounded-full text-5xl" />
    ),
    title: "Total Views",
    value: "1.2M",
    percentage: "+0.43%",
    rate: "up",
  },
  {
    icon: (
      <ShoppingCartIcon className="text-yellow-600 bg-yellow-100 p-3 rounded-full text-5xl" />
    ),
    title: "Total Profits",
    value: "$45.2K",
    percentage: "+4.35%",
    rate: "up",
  },
  {
    icon: (
      <PersonIcon className="text-green-600 bg-green-100 p-3 rounded-full text-5xl" />
    ),
    title: "Total Users",
    value: "3.456K",
    percentage: "+0.95%",
    rate: "up",
  },
  {
    icon: (
      <CategoryIcon className="text-purple-600 bg-purple-100 p-3 rounded-full text-5xl" />
    ),
    title: "Total Products",
    value: "1.234K",
    percentage: "-0.12%",
    rate: "down",
  },
];

export default function Page() {
  return (
    <div className="bg-gray-400 min-h-screen p-6">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-4 hover:shadow-lg transition"
          >
            {stat.icon}

            <div>
              <p className="text-sm text-gray-500">{stat.title}</p>

              <h2 className="text-2xl font-bold text-gray-800">
                {stat.value}
              </h2>

              <span
                className={`text-sm font-medium ${
                  stat.rate === "up"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {stat.percentage}
              </span>
            </div>
          </div>
        ))}
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    
        <div className="bg-white rounded-2xl shadow-md p-6">
          <Typography variant="h6" className="font-semibold">
            Sales Overview
          </Typography>

          <div className="flex justify-between items-center mt-4 mb-6">
            <div>
              <h2 className="text-3xl font-bold">$45,200</h2>
              <p className="text-gray-500 text-sm">
                12.04.2022 - 12.05.2022
              </p>
            </div>

            <div className="flex gap-4">
              <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm">
                Day
              </button>

              <button className="px-3 py-1 bg-gray-100 rounded-lg text-sm">
                Week
              </button>

              <button className="px-3 py-1 bg-gray-100 rounded-lg text-sm">
                Month
              </button>
            </div>
          </div>

          <LineChart
            xAxis={[
              {
                scaleType: "point",
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
              },
            ]}
            series={[
              {
                label: "Sales",
                data: [20, 40, 35, 60, 50, 80, 75, 90, 85, 110, 120, 140],
              },
            ]}
            height={300}
          />
        </div>

    
        <div className="bg-white rounded-2xl shadow-md p-6">
          <Typography variant="h6" className="font-semibold mb-4">
            Performance This Week
          </Typography>

          <div className="flex justify-center gap-6 mb-6">
            <span className="text-green-600 font-medium">Sales</span>
            <span className="text-blue-600 font-medium">Revenue</span>
          </div>

          <BarChart
            xAxis={[
              {
                scaleType: "band",
                data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              },
            ]}
            series={[
              {
                data: [20, 35, 45, 60, 80, 95, 110],
                label: "Sales",
              },
            ]}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}