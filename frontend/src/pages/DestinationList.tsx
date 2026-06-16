import DestinationCard from "@/components/DestinationCard"
import CategoryList from "../components/CategoryList"
const categories=[{name:"Asia",id:1},{name:"Europe",id:2},{name:"Africa",id:3},{name:"North America",id:4},{name:"South America",id:5},{name:"Oceania",id:6}]  
function DestinationList(){
    return(
        <div className="m-10">
              <p className="text-[var(--primary-color)] text-sm font-medium">
        Popular Destinations
      </p>
      <p className="text-3xl font-bold">Tour & Trek Destinations</p>

        <CategoryList categories={categories}/>
        <DestinationCard/>
        </div>
    )
}
export default DestinationList