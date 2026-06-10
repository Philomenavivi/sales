"use client";

import Link from "next/link";
import InfoIcon from "@mui/icons-material/Info";
import NewsIcon from "@mui/icons-material/Feed";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import PagesIcon from "@mui/icons-material/Pages";
import MessageIcon from "@mui/icons-material/Message";
import InboxIcon from "@mui/icons-material/Inbox";
import ReceiptIcon from "@mui/icons-material/Receipt";
import TableChartIcon from "@mui/icons-material/TableChart";
import HomeIcon from "@mui/icons-material/Home";


const links = [
  { name: "Home", href: "/", icon: <HomeIcon /> },
  { name: "Info", href: "/info", icon: <InfoIcon /> },
  { name: "News", href: "/news", icon: <NewsIcon/>},
  { name: "Teams", href: "/teams", icon: "👥" },
  { name: "Product", href: "/product", icon: "📦" },
  { name: "Calendar", href: "/calendar", icon: <CalendarMonthIcon /> },
  { name: "Profile", href: "/profile", icon: <AccountCircleIcon /> },
  { name: "Query", href: "/query", icon: <SearchIcon /> },
  { name: "Forms", href: "/forms", icon: <DescriptionIcon /> },
  { name: "Pages", href: "/pages", icon: <PagesIcon /> },
  { name: "Table", href: "/table", icon: <TableChartIcon /> },
  { name: "Messages", href: "/messages", icon: <MessageIcon /> },
  { name: "Inbox", href: "/inbox", icon: <InboxIcon /> },
  { name: "Invoice", href: "/invoice", icon: <ReceiptIcon /> },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <nav className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center gap-3 p-2 rounded hover:bg-gray-700"
          >
            {link.icon}
            <span>{link.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}