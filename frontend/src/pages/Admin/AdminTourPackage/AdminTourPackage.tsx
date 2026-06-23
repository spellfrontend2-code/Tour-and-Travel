import DataTable from "@/components/Admin/Table/DataTable";
// import { destinationHooks } from "@/features/destination/hooks/useDestination";
import { generateColumns } from "@/lib/generateColumns";
import TourPackages from "@/data/TourPackages";
function AdminTourPackage()
{
    //   const destinationHook=destinationHooks();
    // const {data:TourPackages}=destinationHook.useFetchTourPackages();
    // const data=TourPackages?.data?.data||[]
    // console.log(data)

  const columns = generateColumns(TourPackages,["overview","description","included","excluded","packages","itinerary","currency","maxAltitude","groupSize"]);

  return (
    <><p>Tour Packages</p>
{TourPackages.length>0?  <DataTable data={TourPackages} columns={columns} />:<p>No Data</p>
}  </>);
}

export default AdminTourPackage;