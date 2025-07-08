import { Routes, Route, Navigate } from "react-router-dom";
import Admin from "./pages/Admin";
import Staff from "./pages/Staff";
import Client from "./pages/Client";

export default function App() {
  return (
    <Routes>
      <Route path="/"       element={<Admin />} />
      <Route path="/staff"  element={<Staff />} />
      <Route path="/client" element={<Client />} />
      <Route path="*"       element={<Navigate to="/" />} />
    </Routes>
  );
}