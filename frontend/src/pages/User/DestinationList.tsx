import DestinationCard from "@/components/DestinationCard";
import CategoryList from "@/components/CategoryList";

import Destinations from "@/data/Destinations";
import useFetchCategories from "@/hooks/useFetchCategories";
import useFilters from "@/hooks/useFilters";
import { destinationHooks } from "@/react-query-hooks/useDestination";
import Pagination from "@/components/Pagination";
import { useState } from "react";

function DestinationList() {
  const destinationHook=destinationHooks();
//   const {data:DestinationLists}=destinationHook.useFetchDestinations();
//   const Destinations=DestinationLists?.data||[]
//  const [page,setPage]=useState(1)
  const categories = useFetchCategories(Destinations, "country")||[];
const {
  setCategory,
  setSearch,
  filteredData,
} = useFilters(Destinations, "country");

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
      <DestinationCard Destinations={filteredData} />
      {/* <div className="w-full flex justify-center"><Pagination 
      paginationData={{}} page={page} setPage={setPage}
      /></div> */}
    </div>
  );
}
export default DestinationList;
