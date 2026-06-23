import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

function BookingCard({ Bookings }: any) {
  return (
    <div className="flex flex-col gap-4 ">
      {Bookings.map((booking: any) => {
        return (
          <div
            key={booking.bookingId}
            className="h-[150px]  border-2 border-gray-200 rounded-2xl"
          >
            <div className="flex h-full gap-3">
                <img className="w-[150px] rounded-l-2xl h-full" src={booking.image} alt={booking.tourName}/>
              <div className="flex justify-between w-full p-5"><div>
                <p className="font-bold">{booking.tourName}</p>
                <p className="flex text-sm items-center font-bold text-[var(--primary-color)]"><MapPin size={15}/>{booking.location}</p>
            </div>
            <div>
                <Button variant="greenSolidViewButton" className="w-[100px]">View Details</Button>
            </div></div>
            </div>
          
          </div>
        );
      })}
    </div>
  );
}
export default BookingCard;
