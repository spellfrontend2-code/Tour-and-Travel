import {
  ArrowLeft,
  Calendar,
  Circle,
  Landmark,
  MapPin,
  Sparkles,
  Star,
} from "lucide-react";
import first from "../assets/destinations/1.jfif";
import { Button } from "@/components/ui/button";
const dest = {
  id: 1,
  name: "Everest Region",
  location: "Solukhumbu",
  country: "Nepal",
  region: "Asia",
  totalTours: 24,
  about:
    "The Everest Region is home to the world's highest mountain and offers spectacular trekking routes, Sherpa culture, and breathtaking Himalayan scenery.",
  historicalContext:
    "The region gained international recognition after the successful ascent of Mount Everest by Sir Edmund Hillary and Tenzing Norgay in 1953. It has long been inhabited by the Sherpa community, renowned for their mountaineering expertise.",
  keyAttractions: [
    "Everest Base Camp",
    "Kala Patthar",
    "Namche Bazaar",
    "Tengboche Monastery",
    "Sagarmatha National Park",
  ],
  bestSeason: ["March-May", "September-November"],
  localLanguage: ["Sherpa", "Nepali"],
  image: first,
  rating: 4.7,
};
function DestinationDetail() {
  return (
    <div>
      <div>
        <div className="relative w-full h-96">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <img
            src={dest.image}
            alt="Destination"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gray-700 text-sm m-3 rounded-lg text-white 
            h-[20px] w-[150px] flex gap-2 items-center p-2 border-1 border-gray-500 cursor-pointer
             hover:bg-gray-600"
            onClick={() => window.history.back()}
          >
            <ArrowLeft size={15} />
            Back to Gallery
          </div>
          <div className="absolute bottom-0 m-5">
            <div className="flex gap-2 items-center">
              <Button
                variant="greenSolidButton"
                className="flex items-center gap-2 "
              >
                {dest.region}
              </Button>
              <Button
                variant="greenTransparentButton"
                className="flex items-center gap-2 uppercase"
              >
                {dest.totalTours} Tours
              </Button>
            </div>

            <p className="text-2xl font-bold text-white">{dest.name}</p>
            <div className="flex gap-2 items-center">
              <p className="flex items-center gap-2 text-[var(--primary-color)]">
                <MapPin size={15} />
                {dest.location}
              </p>
              <Circle size={10} className="fill-gray-500" />
              <Button
                variant="ratingButton"
                className="flex items-center gap-2"
              >
                <Star className="fill-yellow-300" size={15} />
                {dest.rating} Rating
              </Button>
            </div>
          </div>
        </div>
        <div className="flex bg-gray-900 h-screen text-white">
          <div className="w-3/4">
            {/* <AboutDestination/> */}
            <div className="border-2 p-3 m-3 bg-gray-800/60 text-white rounded-lg border-gray-700">
              <p className="text-2xl m-3 font-bold  flex items-center gap-2">
                <Landmark size={25} color="var(--primary-color)" /> About{" "}
                {dest.name}
              </p>
              <hr className="my-5 border-gray-700" />
              <p className="text-gray-300 m-3 text-sm font-medium">
                {dest.about}
              </p>
              <hr className="my-5 border-gray-700" />
              <p className="text-sm text-gray-300 m-3 font-bold ">
                Historical Context
              </p>
              <p className="text-sm text-gray-300 m-3 font-medium">
                {dest.historicalContext}
              </p>
            </div>
            <div className="border-2 p-3 m-3 bg-gray-800/60 text-white rounded-lg border-gray-700">
              <p className="text-2xl m-3 font-bold  flex items-center gap-2">
                <Sparkles size={25} color="var(--primary-color)" /> Key
                Attractions & Highlights
              </p>
              <hr className="my-5 border-gray-700" />
              <ol className="space-y-3 grid grid-cols-2 gap-3">
                {dest.keyAttractions.map((attraction, index) => (
                  <li
                    key={index}
                    className="w-70 h-20 flex items-center gap-3 border-1 border-gray-700 rounded-lg p-2 bg-gray-900"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[rgb(var(--primary-rgb)/0.1)] border-1 border-[var(--primary-color)] text-[var(--primary-color)] text-xs font-bold">
                      {index + 1}
                    </span>
                    <span className=" font-medium">{attraction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="border-2 h-[250px] p-3 m-3 bg-gray-800 text-white rounded-lg border-gray-500">
            <p className="text-2xl m-3 font-bold flex items-center gap-2">
              <Calendar size={25} color="var(--primary-color)" /> Travel Guide Details
            </p>
            <hr className="my-5 border-gray-700" />
           <div className="text-gray-500 font-medium"> <p>Best Season</p> <p className="text-white"> {dest.bestSeason.join(", ")}</p>
            <hr className="my-5 border-gray-700"/><p>Local Language </p><p className="text-white"> {dest.localLanguage.join(", ")}</p>
          </div></div>
        </div>
      </div>
    </div>
  );
}
export default DestinationDetail;
