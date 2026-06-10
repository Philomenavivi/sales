"use client";

import WalletIcon from "@mui/icons-material/Wallet";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import WatchIcon from "@mui/icons-material/Watch";
import { title } from "process";
import { BarChart } from "@mui/x-charts";

const stats = [
    {
        icon: <WalletIcon fontSize="large" className="bg-blue-200 p-2 rounded-full" />,
        name: "Wallet",
        price: "$310",
        brand: "New",
        total: "$74.5",
    },
    {
        icon: <ShoppingBagIcon fontSize="large" className="bg-red-200 p-2 rounded-full" />,
        name: "Bag",
        price: "$342",
        brand: "New",
        total: "$2.56",
    },
    {
        icon: <WatchIcon fontSize="large" className="bg-gray-200 p-2 rounded-full" />,
        name: "Samsung Watch",
        price: "$456",
        brand: "New",
        total: "$5.2",
    },
    {
        name: "Maxi Dress",
        price: "$210",
        brand: "New",
        total: "$1.5m",
    },
];

export default function Product() {
    return (
        <div className="grid grid-cols-2  bg-gray-400 gap-8 p-4">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="border  rounded-sm p-4 shadow-lg flex flex-col gap-4"
                >
                    {stat.icon && stat.icon}
                    <p className="font-bold text-2xl">{stat.name}</p>
                    <p>{stat.price}</p>
                    <p>{stat.brand}</p>
                    <p>{stat.total}</p>
                </div>
            ))}
            <div>
                <h1> Total profit review </h1>
                <BarChart
                    series={[
                        {
                            label: "Profit",
                            data: [120, 190, 70, 140],
                        },
                    ]}

                    xAxis={[
                        {
                            scaleType: "band",
                            data: ["Q1", "Q2", "Q3", "Q4"],
                        },
                    ]}
                    height={400}
                    width={400}
                />

            </div>
        </div>
    );
}