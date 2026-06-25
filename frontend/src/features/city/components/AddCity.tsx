import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller, useForm } from "react-hook-form";
import { cityHooks } from "../hooks/useCity";
import { toast } from "sonner";
import { Asterisk } from "lucide-react";

function AddCity({
  setAddDialog,
  countries,
  edit,
  setEdit,
  city,
  view,
  setView,
}: any) {
  const cityHook = cityHooks();
  const addCity = cityHook.useAddCity();
  const editCity = cityHook.useEditCity();
  console.log(city);
  const {
    register,
    reset,
    setError,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: edit || view ? city.name : "",
      is_active: edit || view ? city.is_active : true,
      country_id: edit || view ? String(city?.country_id) : "",
    },
  });
  const onSubmit = (cityData) => {
    if (edit) {
      editCity.mutate(
        { data: cityData, id: city.id },
        {
          onSuccess: (res) => {
            setAddDialog(false);
            reset({ name: "", is_active: true, country_id: "" });
            setEdit(false);
            toast.success(res.message);
          },
          onError: (err: any) => {
            Object.entries(err.errors || {}).forEach(
              ([field, messages]: any) => {
                setError(field as "name" | "country_id", {
                  type: "server",
                  message: messages[0],
                });
              },
            );
          },
        },
      );
    } else {
      addCity.mutate(cityData, {
        onSuccess: (res) => {
          setAddDialog(false);
          reset({ name: "", is_active: true, country_id: "" });
          toast.success(res.message);
        },
        onError: (err: any) => {
          Object.entries(err.errors || {}).forEach(([field, messages]: any) => {
            setError(field as "name" | "country_id", {
              type: "server",
              message: messages[0],
            });
          });
        },
      });
    }
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      <label className="flex items-center gap-2">
        Select a Country <Asterisk size={15} color="red" />
      </label>
      <Controller
        name="country_id"
        control={control}
        render={({ field }) => (
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger
              disabled={view}
              className={`w-[180px] text-black border-2 border-[rgb(var(--primary-rgb)/0.3)] rounded-xl px-2 py-1 focus:outline-none hover:border-[var(--primary-color)] ${errors.country_id && "border-red-500"}`}
            >
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              {countries?.map((country) => (
                <SelectItem key={country.id} value={String(country.id)}>
                  {country.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      {errors?.country_id && (
        <p className="text-red-500">{errors?.country_id?.message}</p>
      )}

      <label className="flex items-center gap-2">
        Name of City <Asterisk size={15} color="red" />
      </label>
      <input
        disabled={view}
        className={`border-2 border-[rgb(var(--primary-rgb)/0.3)] rounded-xl px-2 py-1 focus:outline-none hover:border-[var(--primary-color)] ${errors.name && "border-red-500"}`}
        {...register("name")}
      />
      {errors?.name && <p className="text-red-500">{errors?.name?.message}</p>}

      <div className="flex gap-2">
        <input
          type="checkbox"
          disabled={view}
          className="accent-[var(--primary-color)]"
          {...register("is_active")}
        />
        <label>Is Active</label>
      </div>
      <Button
        variant="greenSolidViewButton"
        type="submit"
        disabled={addCity.isPending || editCity.isPending}
        className={`${view ? "hidden" : "block"}`}
      >
        {edit
          ? editCity.isPending
            ? "Updating..."
            : "Update"
          : addCity.isPending
            ? "Adding..."
            : "Add"}
      </Button>
    </form>
  );
}
export default AddCity;
