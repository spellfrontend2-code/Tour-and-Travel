import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Calendar as CalendarIcon,
  ChevronDown,
  Search,
  SearchIcon,
} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
const inputStyles ="w-full bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-700 rounded-xl p-3.5 text-sm font-medium text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all placeholder-gray-400";

const buttonStyles ="w-full bg-[var(--primary-color)] hover:bg- [var(--primary-color)]/90 text-white font-bold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2";
type CounterProps = {
  label: string;
  value: number;
  onDecrease: () => void;
  onIncrease: () => void;
};
function PassengerCounter({
  label,
  value,
  onDecrease,
  onIncrease,
}: CounterProps) {
  return (
    <div className="flex items-center justify-between gap-8">
      <span
        className="font-bold text-gray-700 dark:text-gray-300"
      >
        {label}
      </span>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onDecrease}
          className="h-8 w-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-100  text-gray-600  transition-colors"
        >
          -
        </button>
        <span
          className="w-6 text-center font-bold text-gray-900"
        >
          {value}
        </span>

        <button
          type="button"
          onClick={onIncrease}
          className="h-8 w-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-100 text-gray-600 dark:text-gray-300 transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
}
type HotelFormValues = {
  destination: string;
  checkIn?: Date;
  checkOut?: Date;
  adults: number;
  children: number;
  rooms: number;
};
export function HotelForm() {
  const { register, watch, setValue, handleSubmit } = useForm<HotelFormValues>({
    defaultValues: {
      destination: "",
      checkIn: new Date(),
      checkOut: new Date(),
      adults: 1,
      children: 0,
      rooms: 1,
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const adults = watch("adults");
  const children = watch("children");
  const rooms = watch("rooms");
  const [open, setOpen] = useState(false);
  const checkIn = watch("checkIn");
  const checkOut = watch("checkOut");
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 sm:p-6 w-full"
    >
      <div
        className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-end"
      >
        <div className="space-y-2">
          <label
            className="text-xs font-bold text-gray-500 uppercase tracking-wider"
          >
            Destination
          </label>
          <input
            {...register("destination", { required: "Required" })}
            placeholder="Where are you going?"
            className={inputStyles}
          />
        </div>
        <div className="space-y-2">
          <label
            className="text-xs font-bold text-gray-500 uppercase tracking-wider"
          >
            Check In
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className={`${inputStyles} flex items-center justify-between`}
              >
                <span className="truncate">
                  {checkIn ? checkIn.toDateString() : "Select date"}
                </span>
                <CalendarIcon
                  size={18}
                  className="text-gray-400 shrink-0"
                />
              </button>
            </PopoverTrigger>
            <PopoverContent
              className="p-0 border-gray-200 rounded-xl"
            >
              <Calendar
                mode="single"
                selected={checkIn}
                onSelect={(date) => setValue("checkIn", date)}
                disabled={(date) => date < new Date()}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <label
            className="text-xs font-bold text-gray-500 uppercase tracking-wider"
          >
            Check Out
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className={`${inputStyles} flex items-center justify-between`}
              >
                <span className="truncate">
                  {checkOut ? checkOut.toDateString() : "Select date"}
                </span>
                <CalendarIcon
                  size={18}
                  className="text-gray-400 shrink-0"
                />
              </button>
            </PopoverTrigger>
            <PopoverContent
              className="p-0 border-gray-200 rounded-xl"
            >
              <Calendar
                mode="single"
                selected={checkOut}
                onSelect={(date) => setValue("checkOut", date)}
                disabled={(date) => {
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  return !checkIn ? date < today : date < checkIn;
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2 relative">
          <label
            className="text-xs font-bold text-gray-500 uppercase tracking-wider"
          >
            Guests & Rooms
          </label>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className={`${inputStyles} flex items-center justify-between`}
          >
            <span className="truncate text-left">
              {adults} Adult{adults > 1 ? "s" : ""}, {children}
              Child{children > 1 ? "ren" : ""}
            </span>
            <ChevronDown
              className={`text-gray-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
              size={18}
            />
          </button>
          {open && (
            <div
              className="absolute z-50 mt-2 w-72 rounded-2xl border border-gray-100  bg-white p-5 shadow-2xl space-y-4"
            >
              <PassengerCounter
                label="Adults"
                value={adults}
                onDecrease={() => setValue("adults", Math.max(1, adults - 1))}
                onIncrease={() => setValue("adults", adults + 1)}
              />
              <PassengerCounter
                label="Children"
                value={children}
                onDecrease={() =>
                  setValue("children", Math.max(0, children - 1))
                }
                onIncrease={() => setValue("children", children + 1)}
              />
              <PassengerCounter
                label="Rooms"
                value={rooms}
                onDecrease={() => setValue("rooms", Math.max(1, rooms - 1))}
                onIncrease={() => setValue("rooms", rooms + 1)}
              />
            </div>
          )}
        </div>
        <button type="submit" className={buttonStyles}>
          <Search size={18} /> Search Hotels
        </button>
      </div>
    </form>
  );
}
export function FlightForm() {
  const [trip, setTrip] = useState("oneway");
  const [open, setOpen] = useState(false);
  const { register, watch, setValue, handleSubmit } = useForm({
    defaultValues: {
      from: "",
      to: "",
      departure: "",
      returnDate: "",
      adults: 1,
      children: 0,
      infants: 0,
    },
  });
  const adults = watch("adults");
  const children = watch("children");
  const infants = watch("infants");
  const onSubmit = (data: any) => {
    console.log({ ...data, tripType: trip });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 sm:p-6 w-full flex flex-col gap-6"
    >
      {/* Trip Type (Sleek pill buttons) */}
      <div className="flex gap-2">
        {[
          { label: "One Way", value: "oneway" },
          { label: "Round Trip", value: "roundtrip" },
        ].map((option) => (
          <button
            type="button"
            key={option.value}
            onClick={() => setTrip(option.value)}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
              trip === option.value
                ? "bg-[var(--primary-color)] text-white shadow-md"
                : "bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
      {/* Search Fields */}
      <div
        className={`grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-end`}
      >
        <div className="space-y-2">
          <label
            className="text-xs font-bold text-gray-500 uppercase tracking-wider"
          >
            From
          </label>
          <input
            type="text"
            placeholder="Departure city"
            {...register("from")}
            className={inputStyles}
          />
        </div>
        <div className="space-y-2">
          <label
            className="text-xs font-bold text-gray-500 uppercase tracking-wider"
          >
            To
          </label>
          <input
            type="text"
            placeholder="Arrival city"
            {...register("to")}
            className={inputStyles}
          />
        </div>
        <div className="space-y-2">
          <label
            className="text-xs font-bold text-gray-500 uppercase tracking-wider"
          >
            Departure
          </label>
          <input
            type="date"
            {...register("departure")}
            className={inputStyles}
          />
        </div>
        <div className="space-y-2 relative">
          <label
            className="text-xs font-bold text-gray-500 uppercase tracking-wider"
          >
            Passengers
          </label>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className={`${inputStyles} flex items-center justify-between`}
          >
            <span className="truncate text-left">
              {adults} Adult{adults > 1 ? "s" : ""}, {children}
              Child
            </span>
            <ChevronDown
              className={`text-gray-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
              size={18}
            />
          </button>
          {open && (
            <div
              className="absolute z-50 mt-2 w-72 rounded-2xl border border-gray-100  bg-white  p-5 shadow-2xl space-y-4"
            >
              <PassengerCounter
                label="Adults"
                value={adults}
                onDecrease={() => setValue("adults", Math.max(1, adults - 1))}
                onIncrease={() => setValue("adults", adults + 1)}
              />
              <PassengerCounter
                label="Children"
                value={children}
                onDecrease={() =>
                  setValue("children", Math.max(0, children - 1))
                }
                onIncrease={() => setValue("children", children + 1)}
              />
              <PassengerCounter
                label="Infants"
                value={infants}
                onDecrease={() => setValue("infants", Math.max(0, infants - 1))}
                onIncrease={() => setValue("infants", infants + 1)}
              />
            </div>
          )}
        </div>
        <button type="submit" className={buttonStyles}>
          <SearchIcon size={18} /> Search Flights
        </button>
      </div>
    </form>
  );
}
const carModels = ["Sedan", "SUV", "Hatchback", "Coupe", "Luxury"];
type RentalFormValues = {
  pickUpLocation: string;
  dropOffLocation: string;
  pickUp?: Date;
  dropOff?: Date;
  carModel: string;
};
export function RentalForm() {
  const { register, watch, setValue, handleSubmit } = useForm<RentalFormValues>(
    {
      defaultValues: {
        pickUpLocation: "",
        dropOffLocation: "",
        pickUp: new Date(),
        dropOff: new Date(),
        carModel: "",
      },
    },
  );
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const carModel = watch("carModel");
  const [open, setOpen] = useState(false);
  const pickUp = watch("pickUp");
  const dropOff = watch("dropOff");
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 sm:p-6 w-full flex flex-col gap-4"
    >
      <div
        className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 items-end"
      >
        <div className="space-y-2">
          <label
            className="text-xs font-bold text-gray-500 uppercase tracking-wider"
          >
            Pick-up
          </label>
          <input
            {...register("pickUpLocation")}
            placeholder="City or Airport"
            className={inputStyles}
          />
        </div>
        <div className="space-y-2">
          <label
            className="text-xs font-bold text-gray-500 uppercase tracking-wider"
          >
            Drop-off
          </label>
          <input
            {...register("dropOffLocation")}
            placeholder="City or Airport"
            className={inputStyles}
          />
        </div>
        <div className="space-y-2">
          <label
            className="text-xs font-bold text-gray-500 uppercase tracking-wider"
          >
            Pick-up Date
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className={`${inputStyles} flex items-center justify-between`}
              >
                <span className="truncate">
                  {pickUp ? pickUp.toDateString() : "Select date"}
                </span>
                <CalendarIcon
                  size={18}
                  className="text-gray-400 shrink-0"
                />
              </button>
            </PopoverTrigger>
            <PopoverContent
              className="p-0 border-gray-200 rounded-xl"
            >
              <Calendar
                mode="single"
                selected={pickUp}
                onSelect={(date) => setValue("pickUp", date)}
                disabled={(date) => date < new Date()}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <label
            className="text-xs font-bold text-gray-500 uppercase tracking-wider"
          >
            Drop-off Date
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className={`${inputStyles} flex items-center justify-between`}
              >
                <span className="truncate">
                  {dropOff ? dropOff.toDateString() : "Select date"}
                </span>
                <CalendarIcon
                  size={18}
                  className="text-gray-400 shrink-0"
                />
              </button>
            </PopoverTrigger>
            <PopoverContent
              className="p-0 border-gray-200 rounded-xl"
            >
              <Calendar
                mode="single"
                selected={dropOff}
                onSelect={(date) => setValue("dropOff", date)}
                disabled={(date) => {
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  return !pickUp ? date < today : date < pickUp;
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2 relative">
          <label
            className="text-xs font-bold text-gray-500 uppercase tracking-wider"
          >
            Car Model
          </label>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className={`${inputStyles} flex items-center justify-between`}
          >
            <span className="truncate">{carModel || "Select Model"}</span>
            <ChevronDown
              className={`text-gray-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
              size={18}
            />
          </button>
          {open && (
            <div
              className="absolute z-50 mt-2 w-full rounded-2xl border border-gray-100 bg-white  p-2 shadow-2xl">
              {carModels.map((car, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setValue("carModel", car);

                    setOpen(false);
                  }}
                  className="p-3 rounded-xl cursor-pointer hover:bg-[var(--primary-color)]/10 hover:text-[var(--primary-color)] font-medium text-sm transition-colors"
                >
                  {car}
                </div>
              ))}
            </div>
          )}
        </div>
        <button type="submit" className={buttonStyles}>
          <Search size={18} /> Search
        </button>
      </div>
    </form>
  );
}
type PackageFormValues = {
  from: string;
  to: string;
  departure?: Date;
  adults: number;
  children: number;
  rooms: number;
};
export function PackageForm() {
  const { register, watch, setValue, handleSubmit } =
    useForm<PackageFormValues>({
      defaultValues: {
        from: "",
        to: "",
        departure: new Date(),
        adults: 1,
        children: 0,
        rooms: 1,
      },
    });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const adults = watch("adults");
  const children = watch("children");
  const rooms = watch("rooms");
  const [open, setOpen] = useState(false);
  const departure = watch("departure");
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 sm:p-6 w-full"
    >
      <div
        className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-end"
      >
        <div className="space-y-2">
          <label
            className="text-xs font-bold text-gray-500 uppercase tracking-wider"
          >
            Origin
          </label>
          <input
            {...register("from")}
            placeholder="Leaving from"
            className={inputStyles}
          />
        </div>
        <div className="space-y-2">
          <label
            className="text-xs font-bold text-gray-500 uppercase tracking-wider"
          >
            Destination
          </label>
          <input
            {...register("to")}
            placeholder="Going to"
            className={inputStyles}
          />
        </div>
        <div className="space-y-2">
          <label
            className="text-xs font-bold text-gray-500 uppercase tracking-wider"
          >
            Departure
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className={`${inputStyles} flex items-center justify-between`}
              >
                <span className="truncate">
                  {departure ? departure.toDateString() : "Select date"}
                </span>
                <CalendarIcon
                  size={18}
                  className="text-gray-400 shrink-0"
                />
              </button>
            </PopoverTrigger>
            <PopoverContent
              className="p-0 border-gray-200 rounded-xl"
            >
              <Calendar
                mode="single"
                selected={departure}
                onSelect={(date) => {setValue("departure", date)}}
                disabled={(date) => date < new Date()}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2 relative">
          <label
            className="text-xs font-bold text-gray-500 uppercase tracking-wider"
          >
            Travelers
          </label>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className={`${inputStyles} flex items-center justify-between`}
          >
            <span className="truncate text-left">
              {adults} Adult{adults > 1 ? "s" : ""}, {children}
              Child
            </span>
            <ChevronDown
              className={`text-gray-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
              size={18}
            />
          </button>
          {open && (
            <div
              className="absolute z-50 mt-2 w-72 rounded-2xl border border-gray-100  bg-white p-5 shadow-2xl space-y-4"
            >
              <PassengerCounter
                label="Adults"
                value={adults}
                onDecrease={() => setValue("adults", Math.max(1, adults - 1))}
                onIncrease={() => setValue("adults", adults + 1)}
              />
              <PassengerCounter
                label="Children"
                value={children}
                onDecrease={() =>
                  setValue("children", Math.max(0, children - 1))
                }
                onIncrease={() => setValue("children", children + 1)}
              />
              <PassengerCounter
                label="Rooms"
                value={rooms}
                onDecrease={() => setValue("rooms", Math.max(1, rooms - 1))}
                onIncrease={() => setValue("rooms", rooms + 1)}
              />
            </div>
          )}
        </div>
        <button type="submit" className={buttonStyles}>
          <Search size={18} /> Search Packages
        </button>
      </div>
    </form>
  );
}
