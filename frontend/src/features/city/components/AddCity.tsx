import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useForm } from "react-hook-form";

function AddCity({setAddDialog,countries}:any){
    console.log(countries);
    const {register,handleSubmit}=useForm();
return(
    <form>
        {/* <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Country</Button>
  </DropdownMenuTrigger>

  <DropdownMenuContent>
    {countries?.map((country)=><DropdownMenuItem>{country.name}</DropdownMenuItem>)}
  </DropdownMenuContent>
</DropdownMenu> */}
    </form>
)
}
export default AddCity