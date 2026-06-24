import DataTable from "@/components/Admin/Table/DataTable";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import AddDestination from "@/features/destination/components/AddDestinstion";
import { destinationHooks } from "@/features/destination/hooks/useDestination";
import { generateColumns } from "@/lib/generateColumns";
import { PlusSquare } from "lucide-react";
import { useState } from "react";
function AdminDestination()
{
      const destinationHook=destinationHooks();
    const {data,isLoading}=destinationHook.useFetchDestinations();
    const Destinations=data?.data?.data||[]
    const [addDialog,setAddDialog]=useState(false);
  const columns = generateColumns(Destinations,["description","history","key_attraction","local_language","city_id","city"]);

  return (
    <div className="flex flex-col gap-3 w-full h-full">
    <section className="flex justify-between items-center">
      <p>Destinations</p>
  <Button variant="greenSolidViewButton" className="" onClick={() => setAddDialog(true)}>
    <p className="flex items-center gap-2">
      <PlusSquare className="size-5" strokeWidth={2}/>
      Add New Destination</p>
      </Button>
      </section>
      <Dialog open={addDialog} onOpenChange={setAddDialog}>
        <DialogContent className="!max-w-[50vw] w-[90vw] h-fit">
          <AddDestination setAddDialog={setAddDialog}/>
        </DialogContent>
      </Dialog>
{isLoading ? 
// TableSkeleton
<p>Loading...</p>
  :Destinations.length>0?  
  <DataTable data={Destinations} columns={columns} />
  :<p>No Data</p>
}  </div>);
}

export default AdminDestination;