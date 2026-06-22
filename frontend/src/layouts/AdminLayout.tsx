import Sidebar from "@/components/Admin/Sidebar";
import { Outlet } from "react-router-dom";

export default function AdminLayout(){
return (
    <div className="min-h-screen relative flex">
        <aside className="w-[250px]">
            <Sidebar/>
        </aside>
        <main className="p-15">
            <Outlet/>
        </main>
    </div>
)
}
