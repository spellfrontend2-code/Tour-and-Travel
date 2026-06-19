import CategoryList from "@/components/CategoryList";
import TourPackageCard from "@/components/TourPackageCard";
import TourPackages from "@/data/TourPackages";
import useFetchCategories from "@/hooks/useFetchCategories";
import useFilters from "@/hooks/useFilters";

function TourList(){
    const categories=useFetchCategories(TourPackages,"country")||[];
const {
  setCategory,
  setSearch,
  filteredData,
} = useFilters(TourPackages, "country");

return(
<div className="p-15">
<p className="text-[var(--primary-color)] text-sm
font-medium">
Popular Packages
</p>
<p className="text-3xl font-bold">Tour & Trek Packages</p>
<CategoryList categories={categories}  onCategoryChange={setCategory}
        onSearchChange={setSearch}/>
<TourPackageCard TourPackages={filteredData}/>
</div>
)
}
export default TourList;