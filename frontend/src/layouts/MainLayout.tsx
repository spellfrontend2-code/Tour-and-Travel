import { useEffect, useRef, useState } from "react";
import Navbar from "../components/shared/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "@/components/shared/Footer";
export default function MainLayout() {
  const [navbarCollapse, setNavbarCollapse] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  // responsive handler
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
   const mainRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    mainRef.current?.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [location.pathname]);
 const navbarWidth = isSmallScreen
    ? "0px"
    : navbarCollapse
    ? "80px"
    : "250px";
    const footerRef = useRef<HTMLDivElement>(null);
const [footerHeight, setFooterHeight] = useState(0);

useEffect(() => {
  setFooterHeight(footerRef.current?.offsetHeight ?? 0);
}, []);
  return (
    <div className="min-h-screen relative flex ">
      <div
        className={`min-h-screen transition-all duration-300 bg-white z-50 ${isSmallScreen ? "block" : "grid"}`}
        style={
          !isSmallScreen
            ? {
                gridTemplateColumns: navbarCollapse ? "80px 1fr" : "250px 1fr",
              }
            : undefined
        }
      >
        <Navbar
          navbarCollapse={navbarCollapse}
          setNavbarCollapse={setNavbarCollapse}
          isSmallScreen={isSmallScreen}
        />
      </div>

      {/* Page content */}
      <main ref={mainRef} className=" overflow-y-auto h-screen w-full"   
      //style={{ paddingBottom: footerHeight }}
      >
        <Outlet />
            <div ref={footerRef} className="w-full  bottom-0 right-0 z-40 transition-all duration-300" style={{left:navbarWidth}}>
      <Footer/>
      </div>
      </main>

    </div>
    
    
  );
}
