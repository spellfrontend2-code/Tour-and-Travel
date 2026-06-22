import DealCard from "@/components/DealCard"
import Deals from "@/data/Deals"

function DealList(){
    return (
        <div className="p-15">

<p className="text-3xl font-bold">Popular Deals</p>

<DealCard Deals={Deals}/>
</div>
    )
}
export default DealList