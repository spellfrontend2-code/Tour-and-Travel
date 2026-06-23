import InputBox from "@/components/shared/InputBox";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
type CustomerFormData = {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: Date; // YYYY-MM-DD
  nationality: string;
  passportNumber: string;
  passportExpiry?: Date; // YYYY-MM-DD
  emergencyContactName: string;
  emergencyContactPhone: string;
};
function ProfileForm() {
  const { register, watch, setValue, handleSubmit } = useForm<CustomerFormData>(
    {
      defaultValues: {
        email: "",
        phone: "",
        firstName: "",
        lastName: "",
        dateOfBirth:undefined,
        nationality: "",
        passportNumber: "",
        passportExpiry: undefined,
        emergencyContactName: "",
        emergencyContactPhone: "",
      },
    },
  );
  const dateOfBirth = watch("dateOfBirth");
  const passportExpiry = watch("passportExpiry");
  const onSubmit = (data) => {
    console.log(data)
  };  
  const InputStyle =
    "border-2 border-[rgb(var(--primary-rgb)/0.3)] rounded-xl px-2 py-1 focus:outline-none hover:border-[var(--primary-color)]";
return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-3 rounded-2xl flex flex-col items-center border-2 border-gray-300">
           <div className="flex flex-col justify-start items-left w-full px-3">
          <p className="text-xl font-bold tracking-wide">My Profile</p>
          <p>
            Manage your personal information. 
          </p>
        </div>
          <div className="w-full h-[500px] p-3 grid grid-cols-1 overflow-y-auto sm:grid-cols-1 md:grid-cols-2 md:text-base sm:text-sm overflow-y-auto gap-4 m-5">
            <InputBox label="Email" id="email" type="email" placeholder="Email" register={register} />
            <InputBox label="Phone" id="phone" type="text" placeholder="Phone" register={register} />
            <InputBox label="First Name" id="firstName" type="text" placeholder="First Name" register={register} />
            <InputBox label="Last Name" id="lastName" type="text" placeholder="Last Name" register={register} />
            <div className="flex flex-col">
              <label htmlFor="dateOfBirth" className="font-bold">Date of Birth</label>
               <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className={`${InputStyle}  flex items-center justify-between`}
              >
                <span className="truncate">
                  {dateOfBirth ? dateOfBirth.toDateString() : "Select date"}
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
  selected={dateOfBirth}
  onSelect={(date) => setValue("dateOfBirth", date)}
  captionLayout="dropdown"
  startMonth={new Date(1900, 0)}
  endMonth={new Date()}
/>
            </PopoverContent>
          </Popover>
            </div>
            <InputBox label="Nationality" id="nationality" type="text" placeholder="Nationality" register={register} />
            <InputBox label="Passport Number" id="passportNumber" type="text" placeholder="Passport Number" register={register} />
            <div className="flex flex-col">
              <label htmlFor="passportExpiry" className="font-bold">Passport Expiry</label>
           
                <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className={`${InputStyle} flex items-center justify-between`}
              >
                <span className="truncate">
                  {passportExpiry ? passportExpiry.toDateString() : "Select date"}
                </span>
                <CalendarIcon
                  size={18}
                  className="text-gray-400 shrink-0"
                />
              </button>
            </PopoverTrigger>
            <PopoverContent
            >
              <Calendar
                mode="single"
                selected={passportExpiry}
                onSelect={(date) => {setValue("passportExpiry", date)}}
                captionLayout="dropdown"
  startMonth={new Date(1900, 0)}
  endMonth={new Date()}
              />
            </PopoverContent>
          </Popover>
            </div>
            <InputBox label="Emergency Contact Name" id="emergencyContactName" type="text" placeholder="Emergency Contact Name" register={register} />
            <InputBox label="Emergency Contact Phone" id="emergencyContactPhone" type="text" placeholder="Emergency Contact Phone" register={register} />
       
          </div>
          <Button variant="greenSolidViewButton" className="w-fit md:w-[300px] tracking-wider uppercase">Submit</Button>
        </form>
)
}
export default ProfileForm;