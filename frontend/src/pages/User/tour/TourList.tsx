import CategoryList from "@/features/category/components/CategoryList";
import TourPackageCard from "@/features/tour/components/TourPackageCard";
import TourPackages from "@/data/TourPackages";
import useFetchCategories from "@/features/category/hooks/useFetchCategories";
import useFilters from "@/features/category/hooks/useFilters";

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