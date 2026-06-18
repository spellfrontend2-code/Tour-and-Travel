import {
    ArrowLeft,
  CalendarIcon,
  Check,
  CircleCheckBig,
  Clock,
  Compass,
  MapPin,
  Minus,
  Mountain,
  Plus,
  Star,
  Users,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Timeline from "@/components/Timeline";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import TourPackages from "../data/TourPackages";
type FormData = {
  name: string;
  departureDate: Date|undefined;
  numberOfTraveller: number;
};
function TourDetail() {
  const {id}=useParams();
  const Tour=TourPackages.find((tour)=>tour.id==Number(id));
  const [selectedPackage, setSelectedPackage] = useState(
    Tour?.packages[0],
  );
  const { register, watch, setValue, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: "",
      departureDate: new Date(),
      numberOfTraveller: 1,
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const departureDate = watch("departureDate");
  const numberOfTraveller = watch("numberOfTraveller");
const price =
  (selectedPackage?.price ?? 0) *
  Number(numberOfTraveller);
    return (
    <div className="flex flex-col gap-2 m-10">
      <section>
        <Button variant={"default"} onClick={() => window.history.back()} className="cursor-pointer"><ArrowLeft/>Back to Gallery</Button>
        <div>
          <p className="flex gap-1 items-center text-(--primary-color) font-medium ">
            <MapPin size={20} />
            {Tour?.region},{Tour?.country}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="font-bold text-lg">{Tour?.name}</p>
          <div className="flex gap-2 text-sm items-center">
            <Button variant="greenTransparentButton" className="">
              {Tour?.location}
            </Button>
            <Button variant="ratingButton" className="flex gap-1 items-center">
              <Star className="fill-yellow-300 text-yellow-300" size={15} />
              {Tour?.rating}
            </Button>
          </div>
        </div>
      </section>
      <section className="relative group rounded-lg overflow-hidden">
        <img
          src={Tour?.image}
          alt={Tour?.name}
          className="w-full h-[400px]  object-cover group-hover:scale-105 duration-300 ease-in-out"
        />
        <div className="flex justify-center  p-5 gap-10 absolute bottom-0 w-full">
          <Button
            variant="greenTransparentButton"
            className="flex items-center gap-2"
          >
            <Clock size={15} />
            <p className="text-white">
              {Tour?.days} days/ {Tour?.nights} nights
            </p>
          </Button>
          <Button
            variant="greenTransparentButton"
            className="flex items-center gap-2"
          >
            <Mountain size={15} />
            <p className="text-white">
              Maximum Altitude: {Tour?.maxAltitude}
            </p>
          </Button>
          <Button
            variant="greenTransparentButton"
            className="flex items-center gap-2"
          >
            <Users size={15} />
            <p className="text-white">
              Group Size: {Tour?.groupSize} pax
            </p>
          </Button>
        </div>
      </section>
      <section className="flex gap-3 w-full">
        <aside className="flex flex-col gap-5 w-3/4">
          <div className="text-gray-500 text-base border-1 h-auto w-full rounded-lg p-4">
            <p className="font-bold text-2xl text-black">
              Trip Overview & Experiences
            </p>
            <hr className="my-3" />
            <p>{Tour?.overview}</p>
            <div className="flex items-center mt-3 justify-between">
              <div>
                <p className="font-bold">Included</p>
                {Tour?.included.map((item, index) => (
                  <p key={index} className="flex items-center text-sm">
                    <Check
                      size={20}
                      strokeWidth={3}
                      className="text-green-900"
                    />
                    {item}
                  </p>
                ))}
              </div>
              <div>
                <p className="font-bold ">Not Included</p>
                {Tour?.excluded.map((item, index) => (
                  <p key={index} className="flex items-center text-sm">
                    <X size={20} strokeWidth={3} className="text-red-900" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="border-1 rounded-lg h-[300px] p-4">
            <Button
              variant="greenTransparentButton"
              className="flex items-center gap-2"
            >
              Flexible Tiers
            </Button>
            <p className="font-bold text-lg">Choose Pricing & Benefits</p>
            <div className="flex justify-between">
              {Tour?.packages.map((item) => (
                <div
                  key={item.id}
                  className={`flex flex-col border rounded-lg items-center gap-2 my-2 p-1 text-lg h-[75px] w-[300px] font-bold cursor-pointer
      ${
        selectedPackage === item
          ? "border-[var(--primary-color)] text-[var(--primary-color)]"
          : ""
      }  hover:border-[var(--primary-color)] hover:text-[var(--primary-color)]`}

     
                  onClick={() => setSelectedPackage(item)}
                >
                  <p className="text-gray-500">{item.name}</p>
                  <p>
                    {Tour?.currency}
                    {item.price}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-col justify-between text-sm bg-gray-100 rounded-lg p-3">
              <p className="text-gray-500 font-bold">
                Included under {selectedPackage?.name} Package
              </p>
              <div className="grid grid-cols-2">
                {" "}
                {selectedPackage?.features?.map((ft) => (
                  <p className="flex items-center gap-2 font-medium">
                    <CircleCheckBig
                      size={15}
                      className="text-[var(--primary-color)]"
                    />
                    {ft}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="border-1 rounded-lg h-auto p-4">
            <p className="font-bold text-lg flex items-center gap-2">
              <Compass className="text-[var(--primary-color)]" />
              Day-by-day Itinerary
            </p>
            <Timeline itinerary={Tour?.itinerary} />
          </div>
        </aside>
        <aside className="flex flex-col gap-5 w-1/4">
          <div className="border-1 rounded-lg h-auto p-4 ">
            <p className="text-2xl font-bold">Book Packages</p>
            <hr className="my-3" />
            <div className="border-1 p-3 rounded-lg text-gray-500 bg-gray-100 text-center">
              <div className="grid grid-cols-2 w-full ">
                {" "}
                <p className="text-xs uppercase">ACTIVE TIER</p>
                <p className="text-xs uppercase">PRICE/PAX</p>
                {selectedPackage && (
                  <>
                    {" "}
                    <p className="text-black font-bold">
                      {selectedPackage.name}
                    </p>
                    <p className="text-[var(--primary-color)] font-bold">
                      {Tour?.currency}
                      {selectedPackage.price}
                    </p>
                  </>
                )}
              </div>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2 mt-3 font-bold text-sm text-gray-500"
            >
              <label>Traveller Name</label>
              <input
                type="text"
                {...register("name")}
                className=" w-full border-1 bg-gray-100 rounded-lg p-2 text-black focus:outline-1"
              />
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
                      numberOfTraveller + 1,
                    )
                  }
                />
              </div>
           
            <hr className="my-3" />
            <div className="flex justify-between">
              {selectedPackage && (
                <>
                  <div className="flex items-center text-sm text-gray-500 font-bold">
                    {selectedPackage.name} Plan <X size={15} />{" "}
                    {numberOfTraveller}
                  </div>
                  <div>
                    {Tour?.currency}
                    {price}
                  </div>
                </>
              )}
            </div>
            <hr className="my-3" />
            <div className="flex flex-col gap-3">
              <div className="flex justify-between text-2xl font-bold">
                <p className="text-black">Total Amount</p>
                <p className="text-[var(--primary-color)]">
                  {Tour?.currency}
                  {price}
                </p>
              </div>
              <Button type="submit" variant="default">Checkout</Button>
            </div>
             </form>
          </div>
        </aside>
      </section>
    </div>
  );
}
export default TourDetail;
