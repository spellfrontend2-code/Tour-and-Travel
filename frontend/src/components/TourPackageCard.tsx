import { ArrowRight, Clock, Heart, MapPin, Mountain } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useWishList } from "@/context/WishListContext";
function TourPackageCard({ TourPackages }: any) {
  const navigate = useNavigate();
  const { wishlist, toggleWishlist } = useWishList();
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 m-8"
    >
      {TourPackages.map((pkg, index) => {
        const isWishlisted=wishlist.tourPackages.includes(pkg.id);
        return(
        <div
          key={index}
          className="flex flex-col bg-white rounded-2xl cursor-pointer shadow-sm text-sm border border-gray-100 over:border-gray-200 transition-all duration-300 group "
        >
          <div
            className="relative h-56 overflow-hidden rounded-t-2xl"
          >
            <img
              src={pkg.image}
              alt={pkg.name}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30 opacity-80 transition-opacity duration-300 group-hover:opacity-100"
            />

            <div
              className="absolute top-4 right-4 bg-white/20 p-2 rounded-full border border-white/30 transition-colors hover:bg-white/40 isolate"
            onClick={(e)=>{
              e.stopPropagation();
              toggleWishlist("tourPackages",pkg.id)
            }}
            >
               <Heart
                size={18}
                className={`
      ${isWishlisted ? "fill-red-600 text-red-600" : "text-white"}
      hover:fill-red-600
      hover:text-red-600
    `} />
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3
                className="text-xl font-bold mb-1 drop-shadow-md"
              >
                {pkg.name}
              </h3>

              <p
                className="flex items-center gap-1 text-sm font-medium text-gray-200"
              >
                <MapPin
                  size={16}
                  className="text-[var(--primary-color)]"
                />

                {pkg.location}
              </p>
            </div>
          </div>
          <div
            className="flex-1 flex flex-col justify-between p-6 gap-4"
          >
            <div className="flex flex-col justify-between">
              {/* TourPackages */}
              <div
                className="flex justify-between gap-1 overflow-x-auto scrollbar-none "
              >
                {pkg.packages.map((p, i) => (
                  <div
                    key={i}
                    className="flex flex-col text-center justify-between bg-gray-50 rounded-lg p-2 bg-white border-2 border-gray-100 w-[120px] hover:border-[rgb(var(--primary-rgb)/0.3)] hover:text-[var(--primary-color)]"
                  >
                    <p
                      className="text-xs font-bold text-gray-500"
                    >
                      {p.name}
                    </p>
                    <p className="font-bold ">
                      {pkg.currency}
                      {p.price}
                    </p>
                  </div>
                ))}
              </div>
              <div
                className="h-2/3 flex flex-col items-left justify-between p-2"
              >
                {/* Time */}

                <div
                  className="flex text-gray-400 justify-between border-y-1 border-gray-100 p-1"
                >
                  <p
                    className="flex items-center gap-2 font-medium"
                  >
                    <Clock
                      size={15}
                      color="var(--primary-color)"
                    />
                    {pkg.days}days
                  </p>

                  <p
                    className="flex items-center gap-2 font-medium"
                  >
                    <Mountain
                      size={15}
                      color="var(--primary-color)"
                    />
                    Max. Altitude:{pkg.maxAltitude}
                  </p>
                </div>
                <p
                  className="overflow-hidden text-gray-400 line-clamp-2"
                >
                  {pkg.description}
                </p>
              </div>
            </div>
            {/* Button */}
            <div className="w-full ">
              <Button
                className="w-full cursor-pointer bg-[var(--primary-color)] hover:bg-[rgb(var(--primary-rgb)/0.9)]"
                variant="default"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/tours/${pkg.id}`);
                }}
              >
                View details
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      )})}
    </div>
  );
}
export default TourPackageCard;
