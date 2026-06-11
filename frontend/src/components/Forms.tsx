import { useState } from "react";
import { useForm } from "react-hook-form";
import { Calendar as CalendarIcon, ChevronDown, Search } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
      <span className="font-medium">{label}</span>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onDecrease}
          className="h-8 w-8 rounded border"
        >
          -
        </button>

        <span className="w-6 text-center">{value}</span>

        <button
          type="button"
          onClick={onIncrease}
          className="h-8 w-8 rounded border"
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
      className="space-y-6 p-6 w-full"
    >
      <div className="grid gap-5 md:grid-cols-5 text-gray-500 text-sm">
        <input
          {...register("destination", {
            required: "Destination is required",
          })}
          placeholder="Destination"
          className="rounded border p-2"
        />

        <Popover>
          <PopoverTrigger asChild>
            <div className="rounded border p-2 flex items-center gap-2">
                {checkIn ? checkIn.toDateString() : "Select check-in date"}
                <CalendarIcon size={20}/>
            </div>
          </PopoverTrigger>

          <PopoverContent className="p-0">
            <Calendar
              mode="single"
              selected={checkIn}
              onSelect={(date) => setValue("checkIn", date)}
              disabled={(date) => date < new Date()}
            />
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <div className="rounded border p-2 flex items-center gap-2">
                {checkOut ? checkOut.toDateString() : "Select check-out date"}{" "}
                <CalendarIcon size={20}/>

            </div>
          </PopoverTrigger>

          <PopoverContent className="p-0">
            <Calendar
              mode="single"
              selected={checkOut}
              onSelect={(date) => setValue("checkOut", date)}
              disabled={(date) => {
                const today = new Date();
                today.setHours(0, 0, 0, 0);

                if (!checkIn) return date < today;

                return date < checkIn;
              }}
              className="text-color-red"
            />
          </PopoverContent>
        </Popover>
        <div className="relative inline-block w-full">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded border p-2 flex items-center justify-between"
          >
            <span>
              {adults} Adult{adults > 1 ? "s" : ""}, {children} Child
              {children > 1 ? "ren" : ""}, {rooms} Room{rooms > 1 ? "s" : ""}
            </span>

            <ChevronDown
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>
          {open && (
            <div className="absolute z-10 mt-2 w-72 rounded-lg border bg-white p-4 shadow-lg">
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
        <button
          type="submit"
          className="flex items-center gap-2 rounded bg-[var(--primary-color)] px-6 py-2 text-white"
        >
          <Search />
          Search
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
    console.log({
      ...data,
      tripType: trip,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 p-6 w-full"
    >
      {/* Trip Type */}
      <fieldset>
        <legend className="mb-2 font-semibold">Trip Type</legend>

        <div className="flex gap-6">
          {[
            { label: "One Way", value: "oneway" },
            { label: "Round Trip", value: "roundtrip" },
            { label: "Multi City", value: "multicity" },
          ].map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="trip"
                value={option.value}
                checked={trip === option.value}
                onChange={() => setTrip(option.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Search Fields */}
      <div
        className={`grid gap-4 ${trip === "roundtrip" ? "md:grid-cols-5" : "md:grid-cols-4"}`}
      >
        <input
          type="text"
          placeholder="From"
          {...register("from")}
          className="rounded border p-2"
        />

        <input
          type="text"
          placeholder="To"
          {...register("to")}
          className="rounded border p-2"
        />

        <input
          type="date"
          {...register("departure")}
          className="rounded border p-2"
        />

        {trip === "roundtrip" && (
          <input
            type="date"
            {...register("returnDate")}
            className="rounded border p-2"
          />
        )}
        {/* Passenger Dropdown */}
        <div className="relative inline-block w-full">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="w-full rounded border p-2 flex items-center justify-between"
          >
            <span>
              {adults} Adult{adults > 1 ? "s" : ""}, {children} Child
              {children > 1 ? "ren" : ""}, {infants} Infant
              {infants > 1 ? "s" : ""}
            </span>

            <ChevronDown
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>

          {open && (
            <div className="absolute z-10 mt-2 w-72 rounded-lg border bg-white p-4 shadow-lg">
              <div className="space-y-4">
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
                  onDecrease={() =>
                    setValue("infants", Math.max(0, infants - 1))
                  }
                  onIncrease={() => setValue("infants", infants + 1)}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="rounded bg-blue-600 px-6 py-2 text-white"
      >
        Search Flights
      </button>
    </form>
  );
}
