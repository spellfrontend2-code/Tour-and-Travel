import CategoryList from "@/components/CategoryList";
import  TourPackageCard  from "@/components/TourPackageCard";
const categories = [
  { name: "Trekking", id: 1 },
  { name: "Mountaineering", id: 2 },
  { name: "Safari", id: 3 },
  { name: "Rafting", id: 4 },
  { name: "Paragliding", id: 5 },
  { name: "Camping", id: 6 },
  { name: "City Tours", id: 7 },
  { name: "Cruises", id: 8 },
];
function TourList(){
    return(
        <div>TourList
            <CategoryList categories={categories}/>
            <TourPackageCard/>
        </div>
    )   
}
export default TourList;