import {
  ArrowRight,
  Clock,
  Heart,
  MapPin,
  Mountain,
} from "lucide-react";
import pic from "../assets/destinations/1.jfif";
import { Button } from "./ui/button";
import {  useNavigate } from "react-router-dom";
const Packages = [
  {
    id:1,
    name: "Everest Base Camp Trek",
    location: "Solukhumbu, Nepal",
    packages: [
      {
        name: "Standard",
        price: 1299,
        currency: "$",
      },
      {
        name: "Standard Plus",
        price: 1599,
        currency: "$",
      },
      {
        name: "Deluxe",
        price: 1999,
        currency: "$",
      },
    ],
    days: 14,
    image: pic,
    maximumAltitude: "5,364m",
    groupMembers: "4-12",
    description: "Experience the iconic trek to Everest Base Exence the iconic trek to Everest Base Camp. Experience the iconic trek to Everest Base Camp. Experience the iconic trek to Everest Base Camp.",
  },
    {
    id:1,
    name: "Everest Base Camp Trek",
    location: "Solukhumbu, Nepal",
    packages: [
      {
        name: "Standard",
        price: 1299,
        currency: "$",
      },
      {
        name: "Standard Plus",
        price: 1599,
        currency: "$",
      },
      {
        name: "Deluxe",
        price: 1999,
        currency: "$",
      },
    ],
    days: 14,
    image: pic,
    maximumAltitude: "5,364m",
    groupMembers: "4-12",
    description: "Experience the iconic trek to Everest Base Exence the iconic trek to Everest Base Camp. Experience the iconic trek to Everest Base Camp. Experience the iconic trek to Everest Base Camp.",
  },
    {
    id:1,
    name: "Everest Base Camp Trek",
    location: "Solukhumbu, Nepal",
    packages: [
      {
        name: "Standard",
        price: 1299,
        currency: "$",
      },
      {
        name: "Standard Plus",
        price: 1599,
        currency: "$",
      },
      {
        name: "Deluxe",
        price: 1999,
        currency: "$",
      },
    ],
    days: 14,
    image: pic,
    maximumAltitude: "5,364m",
    groupMembers: "4-12",
    description: "Experience the iconic trek to Everest Base Exence the iconic trek to Everest Base Camp. Experience the iconic trek to Everest Base Camp. Experience the iconic trek to Everest Base Camp.",
  },
    {
    id:1,
    name: "Everest Base Camp Trek",
    location: "Solukhumbu, Nepal",
    packages: [
      {
        name: "Standard",
        price: 1299,
        currency: "$",
      },
      {
        name: "Standard Plus",
        price: 1599,
        currency: "$",
      },
      {
        name: "Deluxe",
        price: 1999,
        currency: "$",
      },
    ],
    days: 14,
    image: pic,
    maximumAltitude: "5,364m",
    groupMembers: "4-12",
    description: "Experience the iconic trek to Everest Base Exence the iconic trek to Everest Base Camp. Experience the iconic trek to Everest Base Camp. Experience the iconic trek to Everest Base Camp.",
  },
];
export function PackageCard() {
  const navigate=useNavigate();
  return (
    <div className=" m-10">
      <p className="text-[var(--primary-color)] text-sm font-medium">Popular Packages</p>
      <p className="text-3xl font-bold">Tour & Trek Packages</p>

      <div className="flex w-full flex-wrap">
        {Packages.map((pkg, index) => (
          <div key={index} className="flex flex-col rounded-lg m-10 cursor-pointer text-sm w-[350px] h-[500px] border-2 hover:shadow-lg">
          <div className="relative h-1/2 overflow-hidden bg-red-400 rounded-t-lg">
            <img src={pkg.image} className="h-full w-full  transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg" />
 <Heart size={18} className="absolute top-2 right-2 text-red-600 hover:fill-red-600"/>
 </div>        
   
            <div className="h-2/3 flex flex-col items-left justify-around p-2">
                           <p className="flex text-sm font-medium items-center gap-2 text-[var(--primary-color)]">
                <MapPin size={15} />
                {pkg.location}
              </p>
              <p className="font-bold">{pkg.name}</p>
              <div className="flex justify-between gap-1 ">
                {pkg.packages.map((p, i) => (
                  <div key={i} className="flex flex-col text-center justify-between rounded-lg p-2 bg-gray-100 border-2 border-gray-200 w-[120px]">
                    <p className="font-medium text-gray-500">{p.name}</p>
                    <p className="font-bold">
                    {p.currency}
                    {p.price}</p>
                  </div>
                ))}
              </div>

              <div className="flex text-gray-400 justify-between border-t-1 border-b-1">
                <p className="flex items-center gap-2">
                  <Clock size={15} />
                  {pkg.days}days
                </p>
                <p className="flex items-center gap-2">
                  <Mountain size={15} />
                  Max. Altitude:{pkg.maximumAltitude}
                </p>
              </div>
              <p className="overflow-hidden text-gray-400 line-clamp-2">{pkg.description}</p>
              <Button variant="default" onClick={()=>navigate(`/packages/${pkg.id}`)}>
                View details
                <ArrowRight />
              </Button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
