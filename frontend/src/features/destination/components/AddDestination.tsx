import InputBox from "@/components/shared/InputBox";
import { useFieldArray, Controller, useForm } from "react-hook-form";
import { destinationHooks } from "../hooks/useDestination";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Asterisk, Plus, Trash, Upload } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cityHooks } from "@/features/city/hooks/useCity";
import { useEffect, useState } from "react";

function AddDestination({ setAddDialog }) {
  const destinationHook = destinationHooks();
  const cityHook = cityHooks();
  const { data: cities } = cityHook.useFetchCities();
  const cityList = cities?.data?.data || [];
  const addDestination = destinationHook.useCreateDestination();
  const {
    register,
    handleSubmit,
    control,
    setError,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      latitude: null,
      longitude: null,
      best_season: "",
      is_active: false,
      city_id: "",
      local_language: "",
      key_attraction: [{ value: "" }],
      destinationImage: [],
      history: "",
    },
  });
  const DestinationImage = watch("destinationImage");
  const [preview,setPreview]=useState(null);
  useEffect(() => {
  if (!DestinationImage?.[0]) {
    setPreview("");
    return;
  }

  const url = URL.createObjectURL(DestinationImage[0]);
  setPreview(url);

  return () => URL.revokeObjectURL(url);
}, [DestinationImage]);
  const keyAttractions = useFieldArray({
    control,
    name: "key_attraction",
  });
  const onSubmit = (destinationData) => {
    console.log(destinationData);
    addDestination.mutate(destinationData, {
      onSuccess: (res) => {
        setAddDialog(false);
        toast.success(res.message);
      },
      onError: (err: any) => {
        Object.entries(err.errors || {}).forEach(([field, messages]: any) => {
          setError(
            field as
              | "name"
              | "description"
              | "latitude"
              | "longitude"
              | "best_season"
              | "is_active"
              | "city_id"
              | "local_language"
              | "key_attraction"
              | "destinationImage"
              | "history",
            {
              type: "server",
              message: messages[0],
            },
          );
        });
      },
    });
    console.log(destinationData);
  };
  return (
    <div>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <label className="flex items-center gap-2">
          Name <Asterisk size={15} color="red" />
        </label>
        <input
          type="text"
          placeholder="Enter Name"
          {...register("name")}
          className={`border-2 border-[rgb(var(--primary-rgb)/0.3)] rounded-xl px-2 py-1 focus:outline-none hover:border-[var(--primary-color)] ${errors.name && "border-red-500"}`}
        />{" "}
        {errors?.name && (
          <p className="text-red-500">{errors?.name?.message}</p>
        )}
        <label>Description</label>
        <input
          type="text"
          placeholder="Enter Description"
          {...register("description")}
          className={`border-2 border-[rgb(var(--primary-rgb)/0.3)] rounded-xl px-2 py-1 focus:outline-none hover:border-[var(--primary-color)] ${errors.description && "border-red-500"}`}
        />{" "}
        {errors?.description && (
          <p className="text-red-500">{errors?.name?.message}</p>
        )}
        <label>Latitude</label>
        <input
          type="number"
          placeholder="Enter Latitude"
          {...register("latitude")}
          className={`border-2 border-[rgb(var(--primary-rgb)/0.3)] rounded-xl px-2 py-1 focus:outline-none hover:border-[var(--primary-color)] ${errors.latitude && "border-red-500"}`}
        />{" "}
        {errors?.latitude && (
          <p className="text-red-500">{errors?.latitude?.message}</p>
        )}
        <label>Longitude</label>
        <input
          type="number"
          placeholder="Enter Longitude"
          {...register("longitude")}
          className={`border-2 border-[rgb(var(--primary-rgb)/0.3)] rounded-xl px-2 py-1 focus:outline-none hover:border-[var(--primary-color)] ${errors.longitude && "border-red-500"}`}
        />{" "}
        {errors?.longitude && (
          <p className="text-red-500">{errors?.longitude?.message}</p>
        )}
        <label>Best Season</label>
        <input
          type="text"
          placeholder="Enter Best Season"
          {...register("best_season")}
          className={`border-2 border-[rgb(var(--primary-rgb)/0.3)] rounded-xl px-2 py-1 focus:outline-none hover:border-[var(--primary-color)] ${errors.best_season && "border-red-500"}`}
        />{" "}
        {errors?.best_season && (
          <p className="text-red-500">{errors?.best_season?.message}</p>
        )}
        <label className="flex items-center gap-2">
          City Id <Asterisk size={15} color="red" />
        </label>
        {errors?.city_id && (
          <p className="text-red-500">{errors?.city_id?.message}</p>
        )}
        <Controller
          name="city_id"
          control={control}
          render={({ field }) => (
            <Select
              value={field.value}
              onValueChange={field.onChange}
            >
              <SelectTrigger
                className={`w-[180px] text-black border-2 border-[rgb(var(--primary-rgb)/0.3)] rounded-xl px-2 py-1 focus:outline-none hover:border-[var(--primary-color)] ${errors.city_id && "border-red-500"}`}
              >
                <SelectValue placeholder="Select a city" />
              </SelectTrigger>
              <SelectContent>
                {cityList.map((city) => (
                  <SelectItem key={city.id} value={String(city.id)}>
                    {city.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        <label>Local Language</label>
        <input
          type="text"
          placeholder="Enter Local Language"
          {...register("local_language")}
          className={`border-2 border-[rgb(var(--primary-rgb)/0.3)] rounded-xl px-2 py-1 focus:outline-none hover:border-[var(--primary-color)] ${errors.local_language && "border-red-500"}`}
        />{" "}
        {errors?.local_language && (
          <p className="text-red-500">{errors?.local_language?.message}</p>
        )}
        <label>Key Attractions</label>
        <div className="flex justify-between">
          <div className="flex flex-col gap-3">
          {keyAttractions.fields.map((field, index) => (
            <div key={field.id} className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Enter key attrcation"
                {...register(`key_attraction.${index}.value`)}
                className={`border-2 border-[rgb(var(--primary-rgb)/0.3)] rounded-xl px-2 py-1 focus:outline-none hover:border-[var(--primary-color)] ${errors.key_attraction && "border-red-500"}`}
              />
              {errors?.key_attraction && (
                <p className="text-red-500">
                  {errors?.key_attraction?.message}
                </p>
              )}
              {keyAttractions.fields.length > 1 && (
             
                  <Trash color="red" className="cursor-pointer" size={20} onClick={() => keyAttractions.remove(index)}/>
               
              )}
            </div>
          ))}
          </div>
          <Button
            type="button"
            variant="greenSolidViewButton"
            className="flex items-center gap-2 "
            onClick={() => keyAttractions.append({ value: "" })}
          >
            <Plus />
            Add new key attraction
          </Button>
        </div>
        <label>Image</label>
        {preview ?
<img src={preview} alt="preview" className="w-[50px] h-[50px]"/>
:
        <Button type="button" variant="greenTransparentButton" className="pointer-events-auto h-[50px] w-[50px] cursor-pointer"> 
                 <input id="destinationImage" type="file" {...register("destinationImage")} className="h-full w-full hidden"/>
<label
  htmlFor="destinationImage"
  className="inline-flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-md "
>
  <Upload />
</label>
</Button>}

        <Button
          variant="greenSolidViewButton"
          disabled={addDestination?.isPending}
          type="submit"
        >
          {addDestination?.isPending ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
}
export default AddDestination;
