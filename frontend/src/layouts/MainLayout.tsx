import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  const [navbarCollapse, setNavbarCollapse] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // responsive handler
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize(); // important initial run

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen relative flex ">
        <div
        className={`min-h-screen transition-all duration-300 bg-white z-50 ${
          isSmallScreen ? "block" : "grid"
        }`}
        style={
          !isSmallScreen
            ? {
                gridTemplateColumns: navbarCollapse
                  ? "80px 1fr"
                  : "250px 1fr",
              }
            : undefined
        }
      ><Navbar
        navbarCollapse={navbarCollapse}
        setNavbarCollapse={setNavbarCollapse}
        isSmallScreen={isSmallScreen}
      /></div>

      {/* MAIN LAYOUT */}
   
       

        {/* Page content */}
        <main className="overflow-y-auto h-screen mx-5">
          <Outlet />
        </main>
      </div>
   
  );
}