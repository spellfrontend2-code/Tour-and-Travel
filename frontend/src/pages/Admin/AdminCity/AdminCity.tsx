import DataTable from "@/components/Admin/Table/DataTable";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import AddCity from "@/features/city/components/AddCity";
import { cityHooks } from "@/features/city/hooks/useCity";
import { countryHooks } from "@/features/country/hooks/useCountry";

import { generateColumns } from "@/lib/generateColumns";
import { PlusSquare } from "lucide-react";
import { useState } from "react";

function AdminCity() {
  const cityHook = cityHooks();
  const countryHook = countryHooks();
  const [addDialog, setAddDialog] = useState(false);
  const { data, isLoading } = cityHook.useFetchCities();
  const {data:CountryData,isLoading:isCountryLoading}=countryHook.useFetchCountries();
  const Cities = data?.data?.data || [];
  const Countries=CountryData?.data?.data || [];

  const columns = generateColumns(Cities, ["country_id"], () => {});
  console.log(columns);
  return (
    <div>
      <section className="flex justify-between items-center">
        <p>Cities</p>
        <Button
          variant="greenSolidViewButton"
          className=""
          onClick={() => setAddDialog(true)}
        >
          <p className="flex items-center gap-2">
            <PlusSquare className="size-5" strokeWidth={2} />
            Add New City
          </p>
        </Button>
        <Dialog open={addDialog} onOpenChange={setAddDialog} >
          <DialogContent className="!max-w-[50vw] w-[90vw] h-fit">
            <AddCity setAddDialog={setAddDialog} countries={Countries}/>
          </DialogContent>
        </Dialog>
      </section>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <DataTable data={Cities} columns={columns} />
      )}
    </div>
  );
}
export default AdminCity;
