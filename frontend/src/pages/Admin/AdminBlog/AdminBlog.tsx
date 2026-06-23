import DataTable from "@/components/Admin/Table/DataTable";
// import { destinationHooks } from "@/features/destination/hooks/useDestination";
import { generateColumns } from "@/lib/generateColumns";
import Blogs from "@/data/Blogs";
function AdminDestination()
{
    //   const destinationHook=destinationHooks();
    // const {data:Blogs}=destinationHook.useFetchBlogs();
    // const data=Blogs?.data?.data||[]
    // console.log(data)

  const columns = generateColumns(Blogs,["excerpt","slug","author","content","tags"]);

  return (
    <><p>Blogs</p>
{Blogs.length>0?  <DataTable data={Blogs} columns={columns} />:<p>No Data</p>
}  </>);
}

export default AdminDestination;