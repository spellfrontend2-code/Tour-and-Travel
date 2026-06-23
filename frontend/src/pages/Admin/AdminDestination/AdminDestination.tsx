import DataTable from "@/components/Admin/Table/DataTable";
import { destinationHooks } from "@/features/destination/hooks/useDestination";
import { generateColumns } from "@/lib/generateColumns";
function AdminDestination()
{
      const destinationHook=destinationHooks();
    const {data}=destinationHook.useFetchDestinations();
    const Destinations=data?.data?.data||[]
    console.log(data)

  const columns = generateColumns(Destinations,["description","history","key_attraction","local_language","city_id","city"]);

  return (
    <><p>Destinations</p>
{Destinations.length>0?  <DataTable data={Destinations} columns={columns} />:<p>No Data</p>
}  </>);
}

export default AdminDestination;