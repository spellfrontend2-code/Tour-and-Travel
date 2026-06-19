// import { useState } from "react";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem,DropdownMenuTrigger } from "./ui/dropdown-menu";
// import { ChevronDown } from "lucide-react";
// function CategoryList({categories}:{categories:{name:string,id:number}[]}){
// const[activeCategory,setActiveCategory]=useState(categories[0].id)
// const visibleCount=6;
// const [open,setOpen]=useState(false)
// const visibleCategories = categories.slice(0,visibleCount);
// const hiddenCategories = categories.slice(visibleCount);
// return(
// <div className="flex justify-between w-full bg-white" >
// <div className="flex w-2/3 ">
// {visibleCategories?.map((category)=>(
// <div key={category.id}
// className={`w-2/3 h-full pt-1 text-center text-mdcursor-pointer font-medium border-b-2
// ${activeCategory===category.id ?"bg-white text-[var(--primary-color)] border-[var(--primary-color)]":" border-white text-gray-700 bg-white hover:text-black hover:border-black" } transition duration-300 ease-in-out`}

// onClick={()=>setActiveCategory(category.id)}>{category.name}
// </div>))}
// <DropdownMenu>
// <DropdownMenuTrigger>
// <div className="cursor-pointer flex items-center gap-2 text-md font-medium border-gray-100 text-gray-700 bg-gray-100 hover:text-black hover:border-black">

// More <ChevronDown size={15} className=""/></div>
// </DropdownMenuTrigger>
// <DropdownMenuContent>
//{hiddenCategories?.map((category)=>(<DropdownMenuItem>
// <div onClick={()=>setActiveCategory(category.id)}>{category.name}</div>
// </DropdownMenuItem> ))}
// </DropdownMenuContent>
// </DropdownMenu>
// </div>
// <div className="mr-3">

// <input placeholder="Search" className="bg-transparent text-black border-b-2 border-gray-900 p-1 hover:border-black focus:outline-none focus:border-[var(--primary-color)] "/>

// </div>
// </div>
// )
// }
// export default CategoryList;
import { useState, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
function CategoryList({
  categories, onCategoryChange, onSearchChange
}: {
  categories: { name: string; id: string }[],
  onCategoryChange: (category: string) => void,
  onSearchChange: (search: string) => void
}) {
  const categoriesWithAll = [
  { id: "all", name: "All" },
  ...categories,
];
  const [activeCategory, setActiveCategory] = useState(categoriesWithAll[0].id);
useEffect(() => {
  onCategoryChange(activeCategory);
}, [activeCategory, onCategoryChange]);
  // Dynamically adjust visible tabs based on screen size
  const [visibleCount, setVisibleCount] = useState(5);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(2);
      } else if (window.innerWidth < 768) {
        setVisibleCount(3);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(4);
      } else {
        setVisibleCount(6);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const visibleCategories = categoriesWithAll.slice(0, visibleCount);
  const hiddenCategories = categoriesWithAll.slice(visibleCount);
  const activeHiddenCategory = hiddenCategories.find(
    (c) => c.id === activeCategory,
  );

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 border-b border-gray-200 pb-4 mt-6"
    >
      <div
        className="flex flex-wrap md:flex-nowrap items-center gap-4 sm:gap-6 w-full md:w-3/4"
      >
        {visibleCategories.map((category) => (
          <button
            key={category.id}
            className={`whitespace-nowrap pb-2 text-sm
md:text-base font-semibold transition-all duration-300 border-b-2
cursor-pointer ${
              activeCategory === category.id
                ? "border-[var(--primary-color)] text-[var(--primary-color)]"
                : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-slate-600"
            }`}
            onClick={() => {setActiveCategory(category.id); }}
          >
            {category.name}
          </button>
        ))}
        {hiddenCategories.length > 0 && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`flex items-center gap-1
whitespace-nowrap pb-2 text-sm md:text-base font-semibold
transition-all duration-300 border-b-2 cursor-pointer outline-none
${activeHiddenCategory ? "border-[var(--primary-color)] text-[var(--primary-color)]" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-slate-600"}`}
              >
                {activeHiddenCategory ? activeHiddenCategory.name : "More"}
                <ChevronDown size={16} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-56 bg-white dark:bg-slate-900 border border-gray-100
 rounded-xl shadow-xl p-1 z-50"
            >
              {hiddenCategories.map((category) => (
                <DropdownMenuItem
                  key={category.id}
                  onClick={() => {  setActiveCategory(category.id);}}
                  className={`rounded-lg px-3 py-2.5
text-sm font-medium cursor-pointer transition-colors
${category.id === activeCategory ? "bg-[var(--primary-color)]/10 text-[var(--primary-color)] focus:bg-[var(--primary-color)]/10 focus:text-[var(--primary-color)]" : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 focus:bg-gray-50 dark:focus:bg-slate-800"}`}
                >
                  {category.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
      {/* Minimal Search Input */}
      <div className="relative w-full md:w-1/4 shrink-0">
        <div
          className="absolute inset-y-0 left-0 pl-3
flex items-center pointer-events-none"
        >
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          placeholder="Search..."
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full bg-transparent border-b
border-gray-300 dark:border-slate-700 py-2 pl-10 pr-4 text-sm
font-medium text-gray-900 dark:text-white focus:outline-none
focus:border-[var(--primary-color)] transition-all placeholder-
gray-400"
        />
      </div>
    </div>
  );
}
export default CategoryList;
