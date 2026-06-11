import { useState } from "react";
import { FlightForm, HotelForm } from "./Forms";
import hero from "../assets/herosection/herosection.jfif";
import { Car, Hotel, Package, Plane } from "lucide-react";
const tabs = [
  {
    name: "Hotels",
    content: <HotelForm />,
    icon:<Hotel/>
  },
  {
    name: "Flights",
    content: <FlightForm />,
    icon:<Plane/>
  },
  {
    name: "Rentals",
    content: <div>Rental availability form</div>,
    icon:<Car/>
  },
  {
    name: "Packages",
    content: <div>Package availability form</div>,
    icon:<Package/>
  },
];
function CheckAvailability() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <div className="m-5 relative">
        <img
          src={hero}
          alt="Hero"
          className="w-full rounded-lg mb-6 shadow-md h-[600px]"
        />
        <div className="absolute top-0 left-0 h-full w-full opacity-[50%] rounded-lg bg-gray-500">
          <span className="bg-[rgb(var(--primary-rgb)/0.3)] p-1 rounded-lg text-[var(--primary-color)]">Discover the world</span>
        </div>
      <div className="absolute rounded left-1/2 bottom-0 translate-x-[-50%] translate-y-[50%] w-[90%] z-10 ">
        <div className="flex rounded-t-lg bg-white text-sm font-medium text-gray-600 ">
          {tabs.map((tab,index) => (
            <button
              key={tab.name}
              className={`p-2 flex items-center gap-2 ${index===0 ? "rounded-[10px_0px_0px_0px]":""} ${activeTab === tab ? "text-[var(--primary-color)] bg-[rgb(var(--primary-rgb)_/_0.1)]  border-b-[3px] border-[var(--primary-color)]" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))} 
        </div>
        <div className="bg-white border border-gray-300 w-full h-full rounded-b-lg">{activeTab.content}</div>
      </div>
    </div>
  );
}
export default CheckAvailability;
