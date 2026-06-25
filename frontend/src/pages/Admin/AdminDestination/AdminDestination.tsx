import DeleteDialogBox from "@/components/Admin/Table/AdminShared/DeleteDialogBox";
import DataTable from "@/components/Admin/Table/DataTable";
import DataTableSkeleton from "@/components/Admin/Table/DataTableSkeleton";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import AddDestination from "@/features/destination/components/AddDestination";
import { destinationHooks } from "@/features/destination/hooks/useDestination";
import { generateColumns } from "@/lib/generateColumns";
import { Plus } from "lucide-react";
import { useState } from "react";
function AdminDestination()
{
      const destinationHook=destinationHooks();
    const {data,isLoading}=destinationHook.useFetchDestinations();
    const Destinations=data?.data?.data||[]
    const deleteDestination=destinationHook.useDeleteDestination();
    const [addDialog,setAddDialog]=useState(false);
    const [deleteOpen,setDeleteOpen]=useState(false);
    const [selectedDestination,setSelectedDestination]=useState(null);
  const columns = generateColumns(Destinations,["description","history","key_attraction","local_language","city_id","city","latitude","longitude"],
    (action,row) => {
      setSelectedDestination(row);
      switch (action) {
        case "view":
          setAddDialog(true);
          break;
        case "edit":
          setAddDialog(true);
          break;
        case "delete":
          setDeleteOpen(true);
          break;
      }
    }
  );
  return (
    <div className="flex flex-col p-15 gap-3 w-full h-full">
    <section className="flex justify-between items-center">
      <p>Destinations</p>
  <Button variant="greenSolidViewButton" className="" onClick={() => setAddDialog(true)}>
    <p className="flex items-center gap-2">
      <Plus className="size-5" strokeWidth={2}/>
      Add New Destination</p>
      </Button>
      </section>
      <Dialog open={addDialog} onOpenChange={setAddDialog}>
        <DialogContent className="!max-w-[50vw] w-[90vw] h-fit">
          <AddDestination setAddDialog={setAddDialog}/>
        </DialogContent>
      </Dialog>
      <DeleteDialogBox deleteField={deleteDestination} selectedField={selectedDestination}  deleteOpen={deleteOpen} setDeleteOpen={setDeleteOpen}/>
{isLoading ? 
<DataTableSkeleton />  :Destinations.length>0?  
  <DataTable data={Destinations} columns={columns} />
  :<p>No Data</p>
}  </div>);
}

export default AdminDestination;