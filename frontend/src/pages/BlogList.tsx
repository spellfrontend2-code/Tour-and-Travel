import BlogCard from "@/components/BlogCard";
import CategoryList from "@/components/CategoryList";
const categories = [
  { name: "Travel Guides", id: 1 },
  { name: "Destinations", id: 2 },
  { name: "Adventure", id: 3 },
  { name: "Culture & Heritage", id: 4 },
  { name: "Food & Cuisine", id: 5 },
  { name: "Travel Tips", id: 6 },
  { name: "Budget Travel", id: 7 },
  { name: "Luxury Travel", id: 8 },
  { name: "Solo Travel", id: 9 },
  { name: "Family Travel", id: 10 },
  { name: "Hiking & Trekking", id: 11 },
  { name: "Wildlife & Nature", id: 12 },
];
function BlogList(){
return (
    <div>
        <CategoryList categories={categories}/>
        <BlogCard/>
    </div>
)
}
export default BlogList;