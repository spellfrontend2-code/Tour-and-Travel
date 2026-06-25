import Sidebar from "@/components/Admin/Table/AdminShared/Sidebar";
import { Outlet } from "react-router-dom";

export default function AdminLayout(){
return (
    <div className="min-h-screen w-full relative flex">
        <aside className="w-[250px]">
            <Sidebar/>
        </aside>
        <main className="w-full">
            <Outlet/>
        </main>
    </div>
)
}
