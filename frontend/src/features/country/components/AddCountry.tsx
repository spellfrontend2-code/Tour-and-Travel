import { Button } from "@/components/ui/button";
import { Asterisk } from "lucide-react";
import { useForm } from "react-hook-form";
import { countryHooks } from "../hooks/useCountry";
import { toast } from "sonner";

const inputStyle =
  "border-2 border-[rgb(var(--primary-rgb)/0.3)] rounded-xl px-2 py-1 focus:outline-none hover:border-[var(--primary-color)]";
function AddCountry({ setAddDialog ,edit,setEdit,country,view,setView}: any) {
  const countryHook = countryHooks();
  const addCountry = countryHook.useAddCountry();
  const editCountry = countryHook.useEditCountry();
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: edit||view?country.name:"",
      code: edit||view?country.code:"",
    },
  });


  const onSubmit = (newCountryData: any) => {
    const validatedCountryData = {
      name: newCountryData?.name,
      code: newCountryData?.code?.toUpperCase(),
    }
    console.log(validatedCountryData);
    if(edit){
      editCountry.mutate({data:validatedCountryData,id:country.id}, {
        onSuccess: (res) => {
          setAddDialog(false);
          reset({ name: "", code: "" });
          setEdit(false);
          toast.success(res.message);
        },


        onError: (err: any) => {
          Object.entries(err.errors || {}).forEach(([field, messages]: any) => {
            setError(field as "name" | "code", {
              type: "server",
              message: messages[0],
            });
          });
        },
      });
    }
    else{addCountry.mutate(validatedCountryData, {
      onSuccess: (res) => {
        setAddDialog(false);
        toast.success(res.message);
      },
      onError: (err: any) => {
        Object.entries(err.errors || {}).forEach(([field, messages]: any) => {
          setError(field as "name" | "code", {
            type: "server",
            message: messages[0],
          });
        });
      },
    });}
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 ">
      <label className="flex items-center gap-2">
        Name of Country
        <Asterisk size={15} color="red" />
      </label>
      <input
        className={`${inputStyle} ${errors.name && "border-red-500"}`}
        {...register("name")}
      />
      {errors?.name && <p className="text-red-500">{errors?.name?.message}</p>}
      <label className="flex items-center gap-2">
        Country Code
        <Asterisk size={15} color="red" />
      </label>
      <input
        className={`${inputStyle} ${errors.code && "border-red-500"}`}
        {...register("code")}
      />
      {errors?.code && <p className="text-red-500">{errors?.code?.message}</p>}
      <Button
        variant="greenSolidViewButton"
        disabled={addCountry.isPending || editCountry.isPending}
        type="submit"
        className={`${view?"hidden":"block"} w-[100px]`}
      >
      {edit?(editCountry.isPending?"Updating...":"Update"):(addCountry.isPending?"Adding...":"Add")}
      </Button>
    </form>
  );
}
export default AddCountry;
