import { useRef, useState } from "react";
import { FlightForm, HotelForm, PackageForm, RentalForm } from "./Forms";
import hero from "../assets/herosection/herosection.jfif";

import { Car, Hotel, Package, Plane, Sparkles } from "lucide-react";

import { Button } from "./ui/button";
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
  const heroRef = useRef(null);
  // useEffect(() =>{
  // const observer=new IntersectionObserver(([entry])=>{
  // setIsSticky(!entry.isIntersecting);
  // },{
  // threshold:0.1,
  // })
  // if(heroRef.current){
  // observer.observe(heroRef.current);
  // }
  // return () => {
  // observer.disconnect();
  // }
  // },[])
  // useEffect(() => {
  // !isSticky && setShowTabContent(true)}, [isSticky]);
  // useEffect(() => {

  // const updatePosition = () => {
  // if (containerRef.current) {
  // const rect = containerRef.current.getBoundingClientRect();
  // containerRef.current.style.setProperty("--sticky-left", `${rect.left + rect.width / 4}px`);
  // containerRef.current.style.setProperty("--sticky-width", `${rect.width / 2}px`);
  // }
  // };
  // updatePosition();
  // window.addEventListener("resize", updatePosition);
  // return () => window.removeEventListener("resize", updatePosition);
  // }, [])
  // const containerRef=useRef(null);
  return (
    <div className="relative mb-32 lg:mb-40 w-full">
      <div
        ref={heroRef}
        className="relative w-full h-[450px] lg:h-[600px]"
      >
        <img
          src={hero}
          alt="Hero"
          className="w-full h-full object-cover rounded-none"
        />

        <div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"
        />

        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-white px-4 font-sans text-center pb-24"
        >
          <Button
            variant="transparentButton"
            className="w-[180px] sm:w-[200px] md:w-[250px] lg:w-[250px]"
          >
            <span
              className="flex items-center gap-2 font-medium sm:text-sm md:text-lg lg:text-xl p-1 rounded-lg "
            >
              <Sparkles size={15} className="text-yellow-300" />
              Discover the world
            </span>
          </Button>

          <h1
            className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight drop-shadow-2xl"
          >
            Journey Beyond <br />
            <span className="text-[var(--primary-color)]">The Horizon</span>
          </h1>
          <p
            className="text-lg sm:text-xl max-w-2xl font-medium text-gray-200 drop-shadow-md"
          >
            Plan your next adventure with us. Discover breathtaking destinations
            and unforgettable experiences.
          </p>
        </div>
      </div>

      <div
        className="z-10 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[70%] sm:w-[80%] md:w-[85%] lg:w-[90%] bg-white rounded-lg"
      >
        <div
          className={`flex justify-between items-center overflow-x-auto rounded-t-lg border-b-0 text-sm font-medium text-gray-400 `}
        >
          {tabs.map((tab, index) => (
            <button
              key={tab.name}
              className={`p-2 cursor-pointer w-full border-b-[3px] flex justify-center gap-2 ${index === 0 ? "rounded-[10px_0px_0px_0px]" : ""} ${activeTab === tab ? "text-[var(--primary-color)] bg-white border-[var(--primary-color)] hover:text-[var(--primary-color)] hover:border-b-[3px] hover:border-[var(--primary-color)]" : "bg-gray-200 border-gray-200 hover:text-black/60 hover:border-b-[3px] hover:border-black/60 hover:bg-white/50"} `}
              onClick={() => setActiveTab(tab)}
            >
              <div className="flex items-center gap-2">
                {tab.icon}
                <p className="hidden sm:block">{tab.name}</p>
              </div>
            </button>
          ))}
        </div>

        <div
          className={`bg-white border border-gray-300 w-full h-full rounded-b-lg `}
        >
          {activeTab.content}
        </div>
      </div>
    </div>
  );
}
export default CheckAvailability;
