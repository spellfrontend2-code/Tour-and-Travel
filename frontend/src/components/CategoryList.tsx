import { useState } from "react";
import { Button } from "./ui/button";

const categories=[{name:"Asia",id:1},{name:"Europe",id:2},{name:"Africa",id:3},{name:"North America",id:4},{name:"South America",id:5},{name:"Oceania",id:6}]
function CategoryList(){
    const [activeCategory,setActiveCategory]=useState(categories[0].id)
    return(
        <div className="bg-gray-800 text-white p-2 rounded-lg m-3 flex justify-between border border-gray-500" >
        <div className=" flex gap-3 ">
           {categories?.map((category,index)=>(<Button variant="navActive" key={index} className={`text-sm font-medium text-black text-white p-1 rounded-sm ${activeCategory===category.id ?"bg-[var(--primary-color)]":"  bg-gray-600" }`} onClick={()=>setActiveCategory(category.id)}>{category.name}</Button>))}
        </div>
            <div className="bg-gray-800 text-white">
                <input placeholder="Search" className="bg-gray-800 text-white border-1 border-gray-500 rounded-lg p-1 hover:border-gray-100 focus:outline-none"/>
            </div>
</div>
    )
}

export default CategoryList;