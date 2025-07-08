import Sidebar from "./Sidebar";

export default function Layout({ children, role }) {
  return (
    <div className="min-h-screen flex">
      <Sidebar role={role} />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}