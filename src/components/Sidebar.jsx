
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  const menuItems = [
    { label: "Dashboard", to: "/admin/dashboard" },
    { label: "Clients", to: "/admin/clients" },
    { label: "Tasks", to: "/admin/tasks" },
    { label: "Staff", to: "/admin/staff" },
  ];

  return (
    <aside className="w-64 bg-white h-screen shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">Admin Panel</h2>
      <nav className="flex flex-col gap-2">
        {menuItems.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            className={`flex items-center gap-3 px-3 py-2 rounded 
              ${pathname === to ? "bg-primary text-white" : "hover:bg-gray-100"}`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
