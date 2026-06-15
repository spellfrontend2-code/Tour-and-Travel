import { ArrowRight, Clock, Heart, MapPin, Mountain } from "lucide-react";
import pic from "../assets/destinations/1.jfif";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
const Packages = [
  {
    id: 1,
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
    description:
      "Experience the iconic trek to Everest Base Exence the iconic trek to Everest Base Camp. Experience the iconic trek to Everest Base Camp. Experience the iconic trek to Everest Base Camp.",
  },
  {
    id: 1,
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
    description:
      "Experience the iconic trek to Everest Base Exence the iconic trek to Everest Base Camp. Experience the iconic trek to Everest Base Camp. Experience the iconic trek to Everest Base Camp.",
  },
  {
    id: 1,
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
    description:
      "Experience the iconic trek to Everest Base Exence the iconic trek to Everest Base Camp. Experience the iconic trek to Everest Base Camp. Experience the iconic trek to Everest Base Camp.",
  },
  {
    id: 1,
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
    description:
      "Experience the iconic trek to Everest Base Exence the iconic trek to Everest Base Camp. Experience the iconic trek to Everest Base Camp. Experience the iconic trek to Everest Base Camp.",
  },
];
export function PackageCard() {
  const navigate = useNavigate();
  return (
    <div className=" m-10">
      <p className="text-[var(--primary-color)] text-sm font-medium">
        Popular Packages
      </p>
      <p className="text-3xl font-bold">Tour & Trek Packages</p>

      <div className="flex w-full flex-wrap">
        {Packages.map((pkg, index) => (
          <div
            key={index}
            className="flex flex-col rounded-lg m-10 cursor-pointer text-sm w-[350px] h-[400px] border-2 hover:shadow-lg"
          >
            <div className="relative h-1/2 overflow-hidden rounded-t-lg">
              <img
                src={pkg.image}
                className="h-full w-full  transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              />

              <div className="absolute top-2 right-2 bg-gray-300 p-1 rounded-xl ">
                <Heart
                  size={18}
                  className=" text-gray-500 hover:fill-red-600 hover:text-red-600"
                />
              </div>
            </div>
            <div className="h-2/3 flex flex-col justify-between">
              <div className="flex flex-col justify-between">
                {/* Packages    */}
                <div className="flex justify-between gap-1 m-1 ">
                  {pkg.packages.map((p, i) => (
                    <div
                      key={i}
                      className="flex flex-col text-center justify-between rounded-lg p-2 bg-white border-2 border-gray-200 w-[120px] hover:border-[rgb(var(--primary-rgb)/0.3)] "
                    >
                      <p className="text-xs font-bold text-gray-500">
                        {p.name}
                      </p>
                      <p className="font-bold hover:text-[var(--primary-color)]">
                        {p.currency}
                        {p.price}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="h-2/3  flex flex-col items-left justify-between p-2">
                  {/* Location */}
                  <div>
                    <div><p className="flex text-sm font-medium items-center gap-2 text-[var(--primary-color)]">
                      <MapPin size={15} />
                      {pkg.location}
                    </p>
                    <p className="font-bold">{pkg.name}</p></div>
                  </div>
                  {/* Time */}
                  <div className="flex text-gray-400 justify-between border-y-1 border-gray-100 p-1">
                    <p className="flex items-center gap-2">
                      <Clock size={15} />
                      {pkg.days}days
                    </p>
                    <p className="flex items-center gap-2">
                      <Mountain size={15} />
                      Max. Altitude:{pkg.maximumAltitude}
                    </p>
                  </div>
                  <p className="overflow-hidden text-gray-400 line-clamp-2">
                    {pkg.description}
                  </p>
                </div>
              </div>
              {/* Button */}
              <div className="w-full">
                <Button
                className="w-full"
                  variant="default"
                  onClick={() => navigate(`/packages/${pkg.id}`)}
                >
                  View details
                  <ArrowRight />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
