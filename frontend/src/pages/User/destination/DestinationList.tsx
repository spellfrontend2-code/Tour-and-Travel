import DestinationCard from "@/features/destination/components/DestinationCard";
import CategoryList from "@/features/category/components/CategoryList";

// import Destinations from "@/data/Destinations";
import useFetchCategories from "@/features/category/hooks/useFetchCategories";
import useFilters from "@/features/category/hooks/useFilters";
import { destinationHooks } from "@/features/destination/hooks/useDestination";
// import Pagination from "@/components/shared/Pagination";
// import { useState } from "react";

function DestinationList() {
  const destinationHook=destinationHooks();
  const {data:DestinationLists}=destinationHook.useFetchDestinations();
  console.log(DestinationLists?.data?.data);
  const Destinations=DestinationLists?.data?.data||[]
//  const [page,setPage]=useState(1)
  const categories = useFetchCategories(Destinations, "city.country.name")||[];
const {
  setCategory,
  setSearch,
  filteredData,
} = useFilters(Destinations, "city.country.name");

  return (
    <div className="p-15">
      <p className="text-[var(--primary-color)] text-sm font-medium">
        Popular Destinations
      </p>
      <p className="text-3xl font-bold">Tour & Trek Destinations</p>
      <CategoryList
        categories={categories}
        onCategoryChange={setCategory}
        onSearchChange={setSearch}
      />
      <DestinationCard Destinations={Destinations} />
      {/* <div className="w-full flex justify-center"><Pagination 
      paginationData={{}} page={page} setPage={setPage}
      /></div> */}
    </div>
  );
}
export default DestinationList;
