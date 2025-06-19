import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

// Pages
import Dashboard from "../pages/Dashboard";
import Sales from "../pages/Sales";
import Purchases from "../pages/Purchases";
import Inventory from "../pages/Inventory";
import Expenses from "../pages/Expenses";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="sales" element={<Sales />} />
        <Route path="purchases" element={<Purchases />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
