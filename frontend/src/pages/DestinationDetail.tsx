import {
  ArrowLeft,
  Calendar,
  Circle,
  Landmark,
  MapPin,
  Sparkles,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Destinations from "../data/Destinations";
import { useParams } from "react-router-dom";
function DestinationDetail() {
  const {id}=useParams();
  const Destination = Destinations.find((dest) => dest.id == Number(id));
  return (
    <div>
      <div>
        <div className="relative w-full h-120">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent"></div>
          <img
            src={Destination?.image}
            alt="Destination"
            className="w-full h-full object-cover"
          />
          <Button variant="blurButton"
            className="absolute inset-0  text-sm m-3  text-white 
            h-[20px] w-[150px] pointer-events-auto cursor-pointer
             hover:bg-gray-600"
            onClick={() => window.history.back()}
          >
            <ArrowLeft size={15} />
            Back to Gallery
          </Button>
          <div className="absolute bottom-0 m-5">
            <div className="flex gap-2 items-center">
              <Button
                variant="greenSolidButton"
                className="flex items-center gap-2 "
              >
                {Destination?.region}
              </Button>
              <Button
                variant="blurButton"
                className="flex items-center gap-2 uppercase w-[100px] font-bold text-white"
              >
                {Destination?.tours} Tours
              </Button>
            </div>

            <p className="text-5xl font-bold text-white my-1">{Destination?.name}</p>
            <div className="flex gap-2 items-center">
              <Button variant="whiteButton" className="flex w-[150px] items-center gap-2 font-bold text-[var(--primary-color)]">
                <MapPin size={15} />
                {Destination?.location}
              </Button>
              <Circle size={10} className="fill-white text-white" />
              <Button
                variant="whiteButton"
                className="flex items-center gap-2 font-bold w-[150px] "
              >
                <Star className="fill-yellow-300 text-yellow-300" size={15} />
                {Destination?.rating} Rating
              </Button>
            </div>
          </div>
        </div>
        <div className="flex bg-white/80 h-screen text-gray-900">
          <div className="w-3/4">
            {/* <AboutDestination/> */}
            <div className="border-1 p-3 m-3 bg-white/80  rounded-xl border-gray-100">
              <p className="text-2xl m-3 font-bold flex items-center gap-2">
                <Landmark size={25} color="var(--primary-color)" /> About{" "}
                {Destination?.name}
              </p>
              <p className="text-gray-700 m-3 text-sm font-medium">
                {Destination?.description}
              </p>
              <p className="text-sm m-3 font-bold ">
                Historical Context
              </p>
              <p className="text-sm text-gray-700 m-3 font-medium bg-gray-100/70 p-3 rounded-xl">
                {Destination?.historicalContext}
              </p>
            </div>
            <div className="border-2 p-3 m-3  bg-white/80  rounded-xl border-gray-100 text-gray-900">
              <p className="text-2xl m-3 font-bold  flex items-center gap-2">
                <Sparkles size={25} color="var(--primary-color)" /> Key
                Attractions & Highlights
              </p>
              <ol className="space-y-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                {Destination?.keyAttractions.map((attraction, index) => (
                  <li
                    key={index}
                    className="w-70 h-20 flex items-center gap-3 border-1 border-gray-200 rounded-lg p-2 bg-gray-100/70 group hover:border-[var(--primary-color)]"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white border-1 border-gray-500 text-[var(--primary-color)] text-xs font-bold group-hover:bg-[var(--primary-color)] group-hover:text-white group-hover:border-[var(--primary-color)]">
                      {index + 1}
                    </span>
                    <span className=" font-bold">{attraction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="border-2 h-[200px] p-3 m-3 bg-white/80  rounded-xl border-gray-100 text-gray-900">
            <p className="text-2xl m-2 font-bold flex items-center gap-2">
              <Calendar size={25} color="var(--primary-color)" /> Travel Guide Details
            </p>
           <div className="text-gray-500 font-bold flex flex-col gap-2"> 
            <p>Best Season</p> 
           <p className="text-black"> {Destination?.bestSeason.join(", ")}</p>
           <p>Local Language </p>
           <p className="text-black"> {Destination?.localLanguage.join(", ")}</p>
          </div></div>
        </div>
      </div>
    </div>
  );
}
export default DestinationDetail;
