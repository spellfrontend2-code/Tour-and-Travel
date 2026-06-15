import first from '../assets/destinations/1.jfif';
import second from '../assets/destinations/2.jfif';
import third from '../assets/destinations/3.jfif';
import fourth from '../assets/destinations/4.jfif';
import fifth from '../assets/destinations/5.jfif';
import { Masonry } from "masonic";
import { Button } from './ui/button';
import { MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
const Destinations = [
  {
    id: 1,
    name: "Everest Base Camp",
    location: "Solukhumbu, Nepal",
    image: first,
  },
  {
    id: 2,
    name: "Annapurna Base Camp",
    location: "Kaski, Nepal",
    image: second,
  },
  {
    id: 3,
    name: "Pokhara",
    location: "Gandaki Province, Nepal",
    image: third,
  },
  {
    id: 4,
    name: "Chitwan National Park",
    location: "Chitwan, Nepal",
    image: fourth,
  },
  {
    id: 5,
    name: "Lumbini",
    location: "Rupandehi, Nepal",
    image: fifth,
  },
  {
    id: 6,
    name: "Rara Lake",
    location: "Mugu, Nepal",
    image: second,
  },
  {
    id: 7,
    name: "Mustang",
    location: "Mustang, Nepal",
    image: fifth,
  },
  {
    id: 8,
    name: "Langtang Valley",
    location: "Rasuwa, Nepal",
    image: first,
  },
];
function TopDestinations() {
  const navigate=useNavigate();
    const columnWidth = useMemo(() => {
    if (window.innerWidth < 640) return 160;
    if (window.innerWidth < 1024) return 220;
    return 280;
  }, []);
  return (
<div className="relative p-4 mt-15 cursor-pointer">
  <p className="text-xl text-center font-bold mb-4 text-[var(--primary-color)]">Top Destinations</p>
     <p className='m-2 text-5xl [font-family:var(--font-times)] font-bold text-center text-gray-700' >Find your Best Destination</p>
     
      <Masonry
        items={Destinations}
        columnGutter={12}
        columnWidth={columnWidth}
        className='min-h-[50px]'
        render={({ data }) => (
          <div className="group relative mb-3 overflow-hidden rounded-xl hover:shadow-xl"  onClick={()=>navigate(`/destinations/${data.id}`)}
>
            <img
              src={data.image}
              alt={`Destination ${data.id + 1}`}
              className="w-full rounded-xl shadow-sm transition-transform duration-300 ease-in-out group-hover:scale-105 hover:shadow-lg"
            />
              <div
    className="
      absolute inset-0
      opacity-0
      group-hover:opacity-100
      transition-opacity duration-300
      flex items-center justify-center
      bg-black/40
      bottom-0
    "
  >
    <div className='absolute bottom-0 text-left p-2 '><p className="text-lg font-medium text-white">{data.name}</p>
   <p className='text-sm text-[var(--primary-color)] flex items-center gap-2'><MapPin size={20} />{data.location}</p></div>
    
  </div>
          </div>
        )}
      />
      <div className='flex justify-center'>
      <Button className=' bg-[var(--primary-color)] hover:bg-[rgb(var(--primary-rgb)/0.3)] hover:text-[var(--primary-color)] hover:cursor-pointer'><MapPin/>View All Destinations</Button>
    </div></div>
  );
}
export default TopDestinations