import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Book,
  BookOpen,
  House,
  Map,
  Mountain,
  Pyramid
} from "lucide-react";
const navItems = [
  { label: "Dashboard", icon: House, path: "/admin" },
  { label: "Destinations", icon: Map, path: "/admin/destinations" },
  { label: "Tours", icon: Mountain, path: "/admin/tours" },
  { label: "Deals", icon: Pyramid, path: "/admin/deals" },
  { label: "Bookings", icon: Book, path: "/admin/bookings" },
  { label: "Blog", icon: BookOpen, path: "/admin/blogs" },
];
function Sidebar(){
return (
    <div className="bg-gray-600 h-full">
        <section className="space-y-1.5 flex flex-col w-full pt-5 text-white">
                    {navItems.map((item) => {
                      // const isActive =
                      //   location.pathname === item.path ||
                      //   (item.path !== "/" && location.pathname.startsWith(item.path));
                      return (
                        <Link
                          key={item.label}
                          to={item.path} 
                        >
                          <Button
                            variant="none"
                            className={`w-full flex items-center justify-start gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 font-semibold group 
                              
                              `}
                            title={item.label}
                          >
                            <item.icon
                              size={20}
                           
                              className={`shrink-0  transition-colors 
                                `}
                            />
        
                            <span
                              className={`whitespace-nowrap  transition-all duration-300`}
                            >
                              {item.label}
                            </span>
                          </Button>
                        </Link>
                      );
                    })}
                  </section>
    </div>
)
}
export default Sidebar