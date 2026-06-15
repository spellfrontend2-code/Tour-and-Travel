import { useEffect, useRef, useState } from "react";
import { FlightForm, HotelForm, PackageForm, RentalForm } from "./Forms";
import hero from "../assets/herosection/herosection.jfif";
import { Car, ChevronDown, Hotel, Package, Plane, Astroid} from "lucide-react";
const tabs = [
  {
    name: "Hotels",
    content: <HotelForm />,
    icon: <Hotel />,
  },
  {
    name: "Flights",
    content: <FlightForm />,
    icon: <Plane />,
  },
  {
    name: "Rentals",
    content: <RentalForm />,
    icon: <Car />,
  },
  {
    name: "Packages",
    content: <PackageForm />,
    icon: <Package />,
  },
];
function CheckAvailability() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [isSticky, setIsSticky] = useState(false);
  const [showTabContent,setShowTabContent]=useState(true)
  const heroRef=useRef(null);
  useEffect(() =>{
    const observer=new IntersectionObserver(([entry])=>{
      setIsSticky(!entry.isIntersecting);
    },{
      threshold:0.1,
    })
    if(heroRef.current){
      observer.observe(heroRef.current);
    }
    return () => {
    observer.disconnect();
    }
  },[])

useEffect(() => {
!isSticky && setShowTabContent(true)}, [isSticky]);

const containerRef=useRef(null);
  return (
    <div className="m-5 relative " ref={containerRef}>
      <div ref={heroRef}>
      <img
        src={hero}
        alt="Hero"
        className="w-full rounded-lg mb-6 shadow-md h-[600px]"
      />
      <div className="absolute top-0 left-0 h-full w-full opacity-[70%] rounded-lg bg-gray-500"></div>
      <div className="flex flex-col h-1/2 items-center justify-around font-serif absolute text-white top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] ">
        <span className="flex items-center gap-2 font-medium text-xl bg-[rgb(var(--primary-rgb)/0.3)] p-1 rounded-lg text-[var(--primary-color)]">
          <Astroid size={15} className="fill-[var(--primary-color)]"/>Discover the world
        </span>
        <p className="text-5xl text-center font-bold ">
          Journey Beyond
          <span className="text-[var(--primary-color)]"> The Horizon</span>
        </p>
        <p className="text-center">
          Plan your next adventure with us. Discover breathtaking destinations
          and unforgettable experiences. Book your dream vacation today!
        </p>
      </div>
      </div>
  <div
  className={`rounded z-10 ${
    isSticky
      ? "fixed top-0 "
      : "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[90%]"
  }`}
style={
  isSticky && containerRef.current
    ? {
        left: containerRef.current.getBoundingClientRect().left +
              containerRef.current.getBoundingClientRect().width / 4,
        width: containerRef.current.getBoundingClientRect().width / 2,
      }
    : {}
}
>
        <div className={`flex  rounded-t-lg border border-gray-300 border-b-0 bg-white text-sm font-medium text-gray-600 `}>
          {tabs.map((tab, index) => (
            <button
              key={tab.name}
              className={`p-2  flex items-center gap-2 ${index === 0 ? "rounded-[10px_0px_0px_0px]" : ""}  ${activeTab === tab ? "text-[var(--primary-color)] bg-[rgb(var(--primary-rgb)_/_0.1)]  border-b-[3px] border-[var(--primary-color)]" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
         {isSticky && <div onClick={()=>setShowTabContent(!showTabContent)} className="flex items-center"><ChevronDown size={15}       className={`transition-transform duration-300 ${
        !showTabContent ? "rotate-180" : ""
      }`}/></div>}
        </div>
        <div className={`bg-white border border-gray-300 w-full h-full rounded-b-lg ${showTabContent ? "block" : "hidden"}`}>
          {activeTab.content}
        </div>
      </div>
    </div>
  );
}
export default CheckAvailability;
