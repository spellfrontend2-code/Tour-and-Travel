import { useState } from "react";
import { Button } from "./ui/button";

function CategoryList({categories}:{categories:{name:string,id:number}[]}){
    const [activeCategory,setActiveCategory]=useState(categories[0].id)
    return(
        <div className="bg-gray-800 text-white p-2 rounded-lg m-3 flex justify-between border border-gray-500" >
        <div className=" flex gap-3 w-2/3 overflow-x-auto scrollbar-thin 
        scrollbar-track-gray-900 scrollbar-thumb-gray-600 ">
           {categories?.map((category,index)=>(<Button variant="navActive" key={index} className={`text-sm font-medium text-black text-white p-1 rounded-sm ${activeCategory===category.id ?"bg-[var(--primary-color)]":"  bg-gray-600" }`} onClick={()=>setActiveCategory(category.id)}>{category.name}</Button>))}
        </div>
            <div className="bg-gray-800 text-white">
                <input placeholder="Search" className="bg-gray-800 text-white border-1 border-gray-500 rounded-lg p-1 hover:border-gray-100 focus:outline-none"/>
            </div>
</div>
    )
}

export default CategoryList;