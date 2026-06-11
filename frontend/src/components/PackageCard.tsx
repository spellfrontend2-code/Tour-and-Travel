import { ArrowBigRight, ArrowRight, Clock, MapPin, Mountain, Timer } from "lucide-react"
import pic from "../assets/destinations/1.jfif"
import { Button } from "./ui/button"
const Packages=[{
  "name": "Everest Base Camp Trek",
  "location": "Solukhumbu, Nepal",
  "packages": [
    {
      "name": "Standard",
      "price": 1299,
      "currency":"$"
    },
    {
      "name": "Standard Plus",
      "price": 1599,
      "currency":"$"
    },
    {
      "name": "Deluxe",
      "price": 1999,
      "currency":"$"
    }
  ],
  "days": 14,
"image":pic,
  "maximumAltitude": "5,364m",
  "groupMembers": "4-12",
  "description": "Experience the iconic trek to Everest Base Camp."
}]
export function PackageCard(){
return(
<div>
    <div className=" rounded-lg m-10  text-sm w-[350px] h-[450px] border-2">
{Packages.map((pkg,index)=>(
    <>
<img src={pkg.image} className="h-1/2 w-full rounded-t-lg"/>
<div className="h-1/2 flex flex-col items-left justify-around p-2"><div className="flex justify-between gap-2 m-2 ">{pkg.packages.map((p,i)=>(<div className="rounded-lg p-2 bg-gray-300">{p.name}<br/>{p.currency}{p.price}</div>))}</div>
<p className="flex items-center gap-2 text-[var(--primary-color)]"><MapPin size={15}/>{pkg.location}</p>
<p className="font-bold">{pkg.name}</p>
<div className="flex justify-between">
    <p className="flex items-center gap-2"><Clock size={15}/>{pkg.days}days</p>
<p className="flex items-center gap-2"><Mountain size={15}/>Max. Altitude:{pkg.maximumAltitude}</p>

</div>
<p className="overflow-hidden">{pkg.description}</p>
<Button variant="default">View details<ArrowRight/></Button>
</div>
</>
))}
    </div>
</div>)
}
