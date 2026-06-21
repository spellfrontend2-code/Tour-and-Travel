import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  CalendarIcon,
  CircleCheck,
  Clock,
  MapPin,
  Minus,
  Mountain,
  Plus,
  Star,
  Ticket,
  Users,
  X,
} from "lucide-react";
import Deals from "../data/Deals";
import { useParams } from "react-router-dom";
import Countdown from "react-countdown";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

import { useState } from "react";
import { useForm } from "react-hook-form";
type FormData = {
  specialRequest: string;
  departureDate: Date | undefined;
  numberOfTraveller: number;
};
function DealDetail() {
  const { id } = useParams();
  const Deal = Deals.find((deal) => deal.id == Number(id));
  const [open, setOpen] = useState(false);
  const { register, watch, setValue, handleSubmit } = useForm<FormData>({
    defaultValues: {
      specialRequest: "",
      departureDate: new Date(),
      numberOfTraveller: 1,
    },
  });
  const discountedPrice = Deal.originalPrice - (Deal.discountPercent/100)* Deal.originalPrice;
  const departureDate = watch("departureDate");
  const numberOfTraveller = watch("numberOfTraveller");
//   const price = (selectedPackage?.price ?? 0) * Number(numberOfTraveller);
   const onSubmit = (data: any) => {
  
    console.log(data);
    setOpen(true);
  };
  const maxValue=Deal.totalSeats-Deal.seatsBooked
  return (
    <div>
      <section className="relative group rounded-lg overflow-hidden">
        <div className="relative w-full h-120">
          <img
            src={Deal?.image}
            alt="Deal"
            className="w-full h-full object-cover"
          />
          <Button
            variant="transparentButton"
            className="absolute inset-0 text-sm m-6  text-white 
            w-[150px] pointer-events-auto cursor-pointer
             hover:bg-gray-300/60 border-white"
            onClick={() => window.history.back()}
          >
            <ArrowLeft size={15} />
            Back to Gallery
          </Button>
          <div className="absolute bottom-0 m-5">
            <div className="flex gap-2 items-center">
              <Button
                variant="greenSolidButton"
                className="flex items-center gap-2 bg-red-500"
              >
                <Clock size={15} />
                <p>Ends In: </p>
                <Countdown date={new Date(Deal.deadlineDate)} />
              </Button>
            </div>

            <p className="text-5xl font-bold text-white my-1">{Deal?.name}</p>
            <div className="flex gap-2 items-center text-[var(--primary-color)] font-bold">
              <MapPin size={15} />
              {Deal?.location}
            </div>
          </div>
        </div>
      </section>
      <section className="flex gap-3 px-15 py-10 w-full">
        <div className="flex flex-col gap-3 w-3/4">
          <div className="  text-gray-500 text-base border-1 h-auto w-full rounded-lg p-4">
            <p className="font-bold text-2xl text-black">Deal Overview</p>
            <hr className="my-3" />
            <p className="text-gray-500">{Deal?.description}</p>
            <div className="flex flex-col gap-2 text-gray-500 mt-3">
              <p className="font-bold">Package feature includes:</p>
              <ol className="space-y-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                {Deal?.features.map((deal, index) => (
                  <li
                    key={index}
                    className="w-70 h-20 flex items-center gap-3 border-1 border-gray-200 rounded-lg p-2 bg-gray-100/70 group hover:border-[var(--primary-color)]"
                  >
                    <CircleCheck className="flex h-6 w-6 items-center justify-center rounded-full text-[var(--primary-color)] text-xs font-bold group-hover:bg-[var(--primary-color)] group-hover:text-white " />
                    <span className=" font-bold">{deal}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-2 border border-black/20 rounded-xl p-4 ">
              <div className="flex justify-between font-bold">
                <p>Inventory claimed</p>
                <p>
                  {Deal?.seatsBooked}/{Deal?.totalSeats}
                </p>
              </div>
              <div className="relative w-full h-[10px] border-1 border-black/20 rounded-xl">
                <div
                  className="absolute inset-0 bg-[var(--primary-color)] w-full h-full rounded-xl"
                  style={{
                    width: `${(Deal.seatsBooked / Deal.totalSeats) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
          <div className="flex flex-col gap-5 w-1/4 fixed sticky top-4 self-start">
            <div className="border-1 rounded-lg h-auto p-4 ">
                              <p className="text-2xl font-bold flex items-center gap-2 text-[var(--primary-color)]"><Ticket/>Claim Offer</p>
              <hr className="my-3" />
                  <div className="border-1 p-3 rounded-lg text-gray-500 bg-gray-100 text-center">
                 <div className="grid grid-cols-2 w-full font-bold">
                  <p className="text-xs uppercase">Original Price</p>
                  <p className="text-xs uppercase">Discounted Price</p>
                  <p className="text-xs line-through">{Deal?.currency}{Deal?.originalPrice}</p>
                  <p className=" text-red-500">{Deal?.currency}{discountedPrice}</p>
                </div>
         <p className="text-red-500 text-center font-bold">You're saving {Deal?.currency}{Deal?.originalPrice - discountedPrice}</p>

              </div>
                     <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-2 mt-3 font-bold text-sm text-gray-500"
              >
                <label>Departure Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <div className="rounded border p-2 flex items-center gap-2 justify-between">
                      {departureDate
                        ? departureDate.toDateString()
                        : "Select departure date"}
                      <CalendarIcon size={20} />
                    </div>
                  </PopoverTrigger>

                  <PopoverContent className="p-0">
                    <Calendar
                      mode="single"
                      selected={departureDate}
                      onSelect={(date) => setValue("departureDate", date)}
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>

                <label>Number of Travellers</label>
                <div className="flex gap-3 items-center">
                  <Minus
                    size={15}
                    strokeWidth={3}
                    className="cursor-pointer"
                    onClick={() =>
                      setValue(
                        "numberOfTraveller",
                        Math.max(1, numberOfTraveller - 1),
                      )
                    }
                  />
                  <input
                    type="number"
                    {...register("numberOfTraveller")}
                    className=" w-full border-1 bg-gray-100 rounded-lg p-2 text-center text-black focus:outline-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                 <Plus
  size={15}
  strokeWidth={3}
  className="cursor-pointer"
  onClick={() =>
    setValue(
      "numberOfTraveller",
      Math.min(numberOfTraveller + 1, maxValue),
    )
  }
/>
                </div>
                <label>Special Request</label>
                <input
                  type="text"
                  {...register("specialRequest")}
                  required
                  className=" w-full border-1 bg-gray-100 rounded-lg p-2 text-black focus:outline-1"
                />

                <hr className="my-3" />
                <div className="flex justify-between">
                 
                    <>
                      <div className="flex items-center text-sm text-gray-500 font-bold">
                        {Deal?.currency}{discountedPrice} <X size={15} />{" "}
                        {numberOfTraveller}
                      </div>
                      <div>
                        {Deal?.currency}
                        {discountedPrice * numberOfTraveller}
                      </div>
                    </>
                
                </div>
                <hr className="my-3" />
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between text-2xl font-bold">
                    <p className="text-black">Total Amount</p>
                    <p className="text-[var(--primary-color)]">
                      {Deal?.currency}
                      {Deal?.originalPrice}
                    </p>
                  </div>
                  <Button type="submit" variant="default">
                    Checkout
                  </Button>
                </div>
              </form>
            </div>
          </div>
    
      </section>
    </div>
  );
}
export default DealDetail;
