import DeleteDialogBox from "@/components/Admin/Table/AdminShared/DeleteDialogBox";
import DataTable from "@/components/Admin/Table/DataTable";
import DataTableSkeleton from "@/components/Admin/Table/DataTableSkeleton";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import AddCity from "@/features/city/components/AddCity";
import { cityHooks } from "@/features/city/hooks/useCity";
import { countryHooks } from "@/features/country/hooks/useCountry";

import { generateColumns } from "@/lib/generateColumns";
import { Plus } from "lucide-react";
import { useState } from "react";

function AdminCity() {
  const cityHook = cityHooks();
  const countryHook = countryHooks();
  const [addDialog, setAddDialog] = useState(false);
  const { data, isLoading } = cityHook.useFetchCities();
  const deleteCity = cityHook.useDeleteCity();
  const {data:CountryData,isLoading:isCountryLoading}=countryHook.useFetchCountries();
  const Cities = data?.data?.data || [];
  const Countries=CountryData?.data?.data || [];
  const [edit, setEdit] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [view, setView] = useState(false);

  const columns = generateColumns(Cities, ["country_id"], (action,row) => {
    setSelectedCity(row);
    switch (action) {
      case "view":
        setView(true);
        setAddDialog(true);
        break;
      case "edit":
        setEdit(true);
        setAddDialog(true);
        break;
      case "delete":
        setDeleteOpen(true);
        break;
    }
  });
  return (
    <div className="p-15 flex flex-col gap-3">
      <section className="flex justify-between items-center">
        <p>Cities</p>
        <Button
          variant="greenSolidViewButton"
          className=""
          onClick={() => setAddDialog(true)}
        >
          <p className="flex items-center gap-2">
            <Plus className="size-5" strokeWidth={2} />
            Add New City
          </p>
        </Button>
        <Dialog   open={addDialog}
        onOpenChange={(open) => {
          setAddDialog(open);
          if (!open) {
            setEdit(false);
            setView(false);
          }
        }} >
       
          <DialogContent className="!max-w-[50vw] w-[90vw] h-fit">
               <DialogHeader>
            <DialogTitle>
              {edit
                ? "Edit City Details"
                : view
                  ? "City Details"
                  : "Add New City"}
            </DialogTitle>
          </DialogHeader>
            <AddCity setAddDialog={setAddDialog} 
            countries={Countries} 
            edit={edit}
            setEdit={setEdit}
            city={selectedCity}
            view={view}/>
          </DialogContent>
        </Dialog>
        <DeleteDialogBox deleteField={deleteCity} selectedField={selectedCity} setSelectedField={setSelectedCity} deleteOpen={deleteOpen} setDeleteOpen={setDeleteOpen}/>
      </section>
      {isLoading ? (
<DataTableSkeleton />      ) : (
        <DataTable data={Cities} columns={columns} />
      )}
    </div>
  );
}
export default AdminCity;
