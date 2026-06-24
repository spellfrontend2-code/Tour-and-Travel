import { useNavigate } from "react-router-dom";
import { Heart, MapPin, Star } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { useWishList } from "@/context/WishListContext";

function DestinationCard({ Destinations }: any) {
  const { wishlist, toggleWishlist } = useWishList();
  const navigate = useNavigate();
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 m-8"
    >
      {Destinations.map((dest, index) => {
        const isWishlisted = wishlist.destinations.includes(dest.id);
        return(
        <div
          key={index}
          className="flex flex-col bg-white rounded-2xl cursor-pointer shadow-sm text-sm border border-gray-100 over:border-gray-200 transition-all duration-300 group "
        >
          <div
            className="relative h-56 overflow-hidden rounded-t-2xl"
          >
            <img
              src={dest.image}
              alt={dest.name}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30 opacity-80 transition-opacity duration-300 group-hover:opacity-100"
            />

            <div
              className="absolute top-4 right-4 bg-white/20 p-2 rounded-full border border-white/30 transition-colors hover:bg-white/40 isolate"
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist("destinations",dest.id);
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
            <Button
            variant="transparentButton"
              className="absolute top-4 left-4 w-[80px]"
            >
              <p
                className="text-white text-xs font-bold tracking-wider uppercase"
              >
                {dest.tours} Tours
              </p>
            </Button>
            <div
              className="absolute bottom-4 left-4 right-4 flex justify-between items-end"
            >
              <div>
                <h3
                  className="text-2xl font-bold text-white mb-1 drop-shadow-md"
                >
                  {dest.name}
                </h3>
                <p
                  className="flex items-center gap-1 text-sm font-medium text-gray-200"
                >
                  <MapPin
                    size={16}
                    className="text-[var(--primary-color)]"
                  />
                  {dest?.city?.name}, {dest?.city?.country?.name}
                </p>
              </div>
              

              <Button
              variant="ratingButton"
                className="flex items-center gap-1 "
              >
                <Star
                  className="fill-yellow-400"
                  size={14}
                />

                <span
                >
                  {dest.rating}
                </span>
              </Button>
            </div>
          </div>
          <div
            className="flex flex-col justify-between items-center flex-1 p-5 gap-4"
          >
            <p
              className="text-gray-600 line-clamp-3 leading-relaxed text-base"
            >
              {dest.description}
            </p>
            <Button
              className="w-full "
              variant="greenSolidViewButton"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/destinations/${dest.id}`);
              }}
            >
              View Available Packages
            </Button>
          </div>
        </div>
      )})}
    </div>
  );
}
export default DestinationCard;
