import BlogCard from "@/components/BlogCard";
import CategoryList from "@/components/CategoryList";
import Blogs from "@/data/Blogs";
import useFetchCategories from "@/hooks/useFetchCategories";
import useFilters from "@/hooks/useFilters";

function BlogList(){
    const categories=useFetchCategories(Blogs,"category");
    const {
  setCategory,
  setSearch,
  filteredData,
} = useFilters(Blogs, "category");

return (
<div className="m-10">

<p className="text-[var(--primary-color)] text-sm font-
medium">

Popular Blogs
</p>
<p className="text-3xl font-bold">Tour & Trek Blogs</p>
<CategoryList  categories={categories}
        onCategoryChange={setCategory}
        onSearchChange={setSearch}/>
<BlogCard Blogs={filteredData}/>
</div>
)
}
export default BlogList;