import { BadgePercent, Clock, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import Countdown from "react-countdown";
import { useNavigate } from "react-router-dom";

function DealCard({ Deals }: any) {
   const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 m-8">
      {Deals.map((deal, index) => {
        const discountedPrice = deal.originalPrice - (deal.discountPercent/100)* deal.originalPrice;
        return (
          <div
            key={index}
            className="flex flex-col bg-white rounded-2xl cursor-pointer shadow-sm text-sm border border-gray-100 over:border-gray-200 transition-all duration-300 group "
          >
            <div className="relative h-56 overflow-hidden rounded-t-2xl">
              <img
                src={deal.image}
                alt={deal.name}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30 opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
              <Button
                variant="greenSolidButton"
                className="absolute w-[100px] uppercase bg-red-700 top-4 right-4 right-4"
              >
                <BadgePercent className="size-5" />
                {deal.discountPercent}% Off
              </Button>
              <Button
                variant="transparentButton"
                className="absolute w-[120px] uppercase text-red-500 font-bold  bottom-4 left-4 right-4"
              >
                <Clock />
                <Countdown date={new Date(deal.deadlineDate)} />
              </Button>
            </div>
            <div className="flex-1 flex flex-col justify-between p-6 gap-4">
              <div className="">
                <h3 className="text-xl font-bold mb-1 drop-shadow-md">
                  {deal.name}
                </h3>

                <p className="flex items-center gap-1 text-sm font-bold text-gray-200">
                  <MapPin size={16} className="text-[var(--primary-color)]" />
                  {deal.location}
                </p>
              </div>
              <div className="flex flex-col gap-2 border border-black/20 rounded-xl p-4 bg-gray-200">
                <div className="flex justify-between font-bold"><p>Inventory claimed</p>
                <p>{deal.seatsBooked}/{deal.totalSeats}</p></div>
                <div className="relative w-full h-[10px] border-1 border-black/20 rounded-xl bg-gray-200">
                <div className="absolute inset-0 bg-[var(--primary-color)] w-full h-full rounded-xl" style={{width:`${(deal.seatsBooked/deal.totalSeats)*100}%`}}/></div>
              </div>
              <div className="flex justify-between">
               <div className="flex gap-2 items-center"> <p className="line-through font-bold text-sm text-black/20">{deal.currency}{deal.originalPrice}</p>
              
              <p className="text-lg font-bold">{deal.currency}{discountedPrice}</p></div>
              <Button variant="greenSolidViewButton" className="w-[150px] uppercase" onClick={()=>{navigate(`/deals/${deal.id}`)}}>Claim Offer</Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default DealCard;
