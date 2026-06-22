import DestinationCard from "@/components/DestinationCard";
import CategoryList from "../components/CategoryList";

import Destinations from "../data/Destinations";
import useFetchCategories from "@/hooks/useFetchCategories";
import useFilters from "@/hooks/useFilters";

function DestinationList() {
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
    </div>
  );
}
export default DestinationList;
