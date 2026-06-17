import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

function CategoryList({categories}:{categories:{name:string,id:number}[]}){
    const [activeCategory,setActiveCategory]=useState(categories[0].id)
    const visibleCount=6;
    const [open,setOpen]=useState(false)
    const visibleCategories = categories.slice(0, visibleCount);
const hiddenCategories = categories.slice(visibleCount);
    return(
        <div className="flex justify-between w-full bg-gray-100" >
        <div className="flex w-2/3 ">
           {visibleCategories?.map((category)=>(
            <div  key={category.id} 
            className={`w-2/3 h-full pt-1 text-center text-md cursor-pointer font-medium border-b-2
            ${activeCategory===category.id ?"bg-white text-[var(--primary-color)] border-[var(--primary-color)]":" border-gray-100 text-gray-700 bg-gray-100 hover:text-black hover:border-black" } transition duration-300 ease-in-out`}
             onClick={()=>setActiveCategory(category.id)}>{category.name}
             </div>))}
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className="cursor-pointer flex items-center gap-2 text-md font-medium  border-gray-100 text-gray-700 bg-gray-100 hover:text-black hover:border-black">
                        More <ChevronDown size={15} className=""/></div>
                        </DropdownMenuTrigger>
                    <DropdownMenuContent>
                         {hiddenCategories?.map((category)=>(<DropdownMenuItem>
                           
                                <div onClick={()=>setActiveCategory(category.id)}>{category.name}</div>
                           
                        </DropdownMenuItem> ))}

                    </DropdownMenuContent>
                </DropdownMenu>
        
        </div>
            <div className="mr-3">
                <input placeholder="Search" className="bg-transparent text-black border-b-2 border-gray-900  p-1 hover:border-black focus:outline-none focus:border-[var(--primary-color)]   "/>
            </div>
</div>
    )
}

export default CategoryList;