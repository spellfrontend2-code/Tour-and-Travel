import DestinationCard from "@/components/DestinationCard"
import CategoryList from "../components/CategoryList"

function Destination(){
    return(
        <div className="m-10">
              <p className="text-[var(--primary-color)] text-sm font-medium">
        Popular Destinations
      </p>
      <p className="text-3xl font-bold">Tour & Trek Destinations</p>

        <CategoryList/>
        <DestinationCard/>
        </div>
    )
}
export default Destination