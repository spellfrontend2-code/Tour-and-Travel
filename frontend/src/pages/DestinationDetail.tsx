import { ArrowLeft, Circle, MapPin, Star } from "lucide-react";
import first from "../assets/destinations/1.jfif";
const Destinations = [
  {
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
  },
];
function DestinationDetail() {
  return (
    <div>
      {Destinations.map((dest, index) => (
        <div key={index}>
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
                <div className="p-1 flex items-center gap-2 bg-[var(--primary-color)] font-bold text-white rounded-lg p-1">
                  {dest.region}
                </div>
                <div
                  className="flex items-center gap-2 border-1 border-[rgb(var(--primary-rgb)/0.3)] rounded-lg
                     p-1 text-xs font-bold text-[var(--primary-color)] bg-[rgb(var(--primary-rgb)/0.1)] uppercase"
                >
                  {dest.totalTours} Tours
                </div>
              </div>

              <p className="text-2xl font-bold text-white">{dest.name}</p>
              <div className="flex gap-2 items-center">
                <p className="flex items-center gap-2 text-[var(--primary-color)]">
                  <MapPin size={15} />
                  {dest.location}
                </p>
                <Circle size={10} className="fill-gray-500" />
                <div
                  className="flex items-center gap-2 border-1 border-yellow-800 rounded-lg
                     p-1 text-xs font-bold text-yellow-500 bg-yellow-100/10"
                >
                  <Star className="fill-yellow-500" size={15} />
                  {dest.rating} Rating
                </div>
              </div>
            </div>
          </div>
          <div className="flex bg-black h-screen text-white">
            <div className="w-3/4">
              {/* <AboutDestination/> */}
              <div className="border-2 p-3 m-3 bg-gray-800 text-white rounded-lg border-gray-500">
                <p className="text-2xl m-3 font-bold border-b-1">
                  About {dest.name}
                </p>
                <p className="text-gray-300 m-3 text-sm border-b-1">
                  {dest.about}
                </p>
                <p className="text-sm text-gray-300 m-3 font-bold ">
                  Historical Context
                </p>
                <p className="text-sm text-gray-300 m-3">
                  {dest.historicalContext}
                </p>
              </div>
              <div className="border-2 p-3 m-3 bg-gray-800 text-white rounded-lg border-gray-500">
                <p className="text-2xl m-3 font-bold border-b-1">
                  Key Attractions & Highlights
                </p>
                <ol className="list-decimal pl-6">
                  {dest.keyAttractions.map((attraction, index) => (
                    <li key={index}>{attraction}</li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="border-2 h-1/2 p-3 m-3 bg-gray-800 text-white rounded-lg border-gray-500">
              <p className="text-2xl m-3 font-bold border-b-1">
                Travel Guide Details
              </p>
              <p>Best Season: {dest.bestSeason.join(", ")}</p>
              <p>Local Language: {dest.localLanguage.join(", ")}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default DestinationDetail;
