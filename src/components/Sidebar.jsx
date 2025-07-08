import { Link, useLocation } from "react-router-dom";
import { FaUserTie, FaUsers, FaTasks } from "react-icons/fa";

export default function Sidebar({ role }) {
  const { pathname } = useLocation();

  const links = {
    admin: [
      { to: "/", icon: <FaUserTie />, label: "Dashboard" },
      { to: "/clients", icon: <FaUsers />, label: "Clients (stub)" },
      { to: "/tasks", icon: <FaTasks />, label: "Tasks (stub)" }
    ],
    staff: [{ to: "/staff", icon: <FaTasks />, label: "My Tasks" }],
    client: [{ to: "/client", icon: <FaTasks />, label: "Services" }]
  }[role] ?? [];

  return (
    <aside className="w-56 bg-white shadow-sm">
      <h1 className="text-xl font-bold p-6 border-b">CA Manager</h1>
      <nav className="p-4 space-y-2">
        {links.map(({ to, icon, label }) => (
          <Link
            key={to}
            to={to}
            className={\`flex items-center gap-3 px-3 py-2 rounded 
              \${pathname === to ? "bg-primary text-white" : "hover:bg-gray-100"}\`}
          >
            {icon}
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}