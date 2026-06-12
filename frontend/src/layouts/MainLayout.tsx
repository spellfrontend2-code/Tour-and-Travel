import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"

export default function MainLayout() {
  return (
    <div className="grid grid-cols-[250px_1fr] h-screen">
      <aside className="bg-gray-100 h-screen">
        <Navbar />
      </aside>

      <main className="overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}