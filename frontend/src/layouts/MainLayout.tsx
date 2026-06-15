import { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  const [navbarCollapse, setNavbarCollapse] = useState(false);

  return (
    <div
      className={`grid h-screen transition-all duration-300`}
      style={{
        gridTemplateColumns: navbarCollapse ? "80px 1fr" : "250px 1fr",
      }}
    >
      <aside className="bg-gray-100 h-screen z-10">
        <Navbar navbarCollapse={navbarCollapse} setNavbarCollapse={setNavbarCollapse} />
      </aside>

      <main className="overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}