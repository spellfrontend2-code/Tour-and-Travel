import { useNavigate } from "react-router-dom";
import pic from "../assets/destinations/1.jfif";
import { Heart, MapPin, Star, Users } from "lucide-react";
import { Button } from "./ui/button";
const Destinations = [
  {
    id: 1,
    name: "Kathmandu",
    country: "Nepal",
    region: "Asia",
    tours: 42,
    description:
      "A vibrant city known for its rich culture, temples, and gateway to the Himalayas.",
    rating: 4.7,
    image: pic,
  },
  {
    id: 2,
    name: "Paris",
    country: "France",
    region: "Europe",
    tours: 58,
    description:
      "The City of Light, famous for its art, architecture, and cuisine.The City of Light, famous for its art, architecture, and cuisine.The City of Light, famous for its art, architecture, and cuisine.The City of Light, famous for its art, architecture, and cuisine.The City of Light, famous for its art, architecture, and cuisine.The City of Light, famous for its art, architecture, and cuisine.",
    rating: 4.8,
    image: pic,
  },
  {
    id: 3,
    name: "Cape Town",
    country: "South Africa",
    region: "Africa",
    tours: 31,
    description:
      "A stunning coastal city known for Table Mountain and beautiful beaches.",
    rating: 4.6,
    image: pic,
  },
];
function DestinationCard() {
  const navigate = useNavigate();
  return (
    <div className=" m-10">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {Destinations.map((dest, index) => (
          <div
            key={index}
            className="flex flex-col rounded-lg m-10 cursor-pointer text-sm w-[350px] h-[400px] border-2 hover:shadow-lg"
          >
            <div className="relative group h-1/2 overflow-hidden bg-red-400 rounded-t-lg">
              <img
                src={dest.image}
                className="h-full w-full  transition-transform duration-300 ease-in-out group-hover:scale-105 hover:shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
              <div className="absolute top-2 right-2 bg-gray-300 p-1 rounded-xl">
                <Heart
                  size={18}
                  className=" text-gray-500 hover:fill-red-600 hover:text-red-600"
                />
              </div>
               <div className="absolute top-2 left-2 bg-gray-800 p-1 rounded-xl hover:bg-gray-600 border-1 border-[rgb(var(--primary-rgb)/0.3)]">
                <p
                  className=" text-[var(--primary-color)] uppercase text-xs font-bold"
                >{dest.tours} Tours</p>
              </div>
            </div>
            <div className="h-1/2 flex flex-col items-left justify-between text-gray-800 p-3 rounded-b-lg">
            <div className="flex flex-col gap-4">
            <div className="flex flex-col ">
              <div className="flex justify-between "><p className="text-[var(--primary-color)] text-xl font-bold">{dest.name}</p><Button variant="ratingButton" className="flex rounded-lg p-1 text-xs font-bold text-yellow-300"><Star className="fill-yellow-300" size={15}/>{dest.rating}</Button></div>
              <p className="flex items-center gap-1 text-sm font-medium">
                <MapPin size={20} className="text-[var(--primary-color)]"/>{dest.region}, {dest.country}
              </p></div>
              <p className="line-clamp-3">{dest.description}</p></div>
              <Button variant="viewButton"
                onClick={() => navigate(`/destinations/${dest.id}`)}
              >View Available Packages</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default DestinationCard;
