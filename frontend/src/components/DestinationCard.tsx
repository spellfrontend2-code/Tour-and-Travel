import { useNavigate } from "react-router-dom";
import pic from "../assets/destinations/1.jfif";
import {
  Heart,
} from "lucide-react";
import { Button } from "./ui/button";
const Destinations = [
  {
    id: 1,
    name: "Kathmandu",
    country: "Nepal",
    region: "Asia",
    tours: 42,
    description: "A vibrant city known for its rich culture, temples, and gateway to the Himalayas.",
    rating: 4.7,
    image: pic
  },
  {
    id: 2,
    name: "Paris",
    country: "France",
    region: "Europe",
    tours: 58,
    description: "The City of Light, famous for its art, architecture, and cuisine.",
    rating: 4.8,
    image: pic
  },
  {
    id: 3,
    name: "Cape Town",
    country: "South Africa",
    region: "Africa",
    tours: 31,
    description: "A stunning coastal city known for Table Mountain and beautiful beaches.",
    rating: 4.6,
    image: pic
  },
];
function DestinationCard(){
 const navigate = useNavigate();
  return (
    <div className=" m-10">
      <p className="text-[var(--primary-color)] text-sm font-medium">
        Popular Destinations
      </p>
      <p className="text-3xl font-bold">Tour & Trek Destinations</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {Destinations.map((dest, index) => (
          <div key={index} className="flex flex-col rounded-lg m-10 cursor-pointer text-sm w-[350px] h-[400px] border-2 hover:shadow-lg">
            <div className="relative h-1/2 overflow-hidden bg-red-400 rounded-t-lg">
              <img
                src={dest.image}
                className="h-full w-full  transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              />
  <div className="absolute top-2 right-2 bg-gray-300 p-1 rounded-xl">
                <Heart size={18} className=" text-gray-500 hover:fill-red-600 hover:text-red-600"/></div>
            </div>
            <div className="h-2/3 flex flex-col items-left justify-between p-2">
       <p>{dest.name}</p>
       <p>{dest.region}, {dest.country}</p>
            <p>{dest.description}</p>
            <Button onClick={() => navigate(`/destination/${dest.id}`)}></Button>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default DestinationCard