import { useState } from "react";
import { FlightForm, HotelForm} from "./Forms";
 
const tabs = [
  {
    name: "Hotels",
    content: <HotelForm />,
  },
  {
    name: "Flights",
    content: <FlightForm />,
  },
  {
    name: "Rentals",
    content: <div>Rental availability form</div>,
  },
  {
    name: "Packages",
    content: <div>Package availability form</div>,
  },
];
function CheckAvailability() {
    const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <div className="m-5">
      <div className="flex gap-1 box-shadow rounded-t-lg">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`p-2 rounded-[10px_10px_0px_0px] ${activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="">
        {activeTab.content}
      </div>
    </div>
  );
}
export default CheckAvailability;