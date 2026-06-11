import first from '../assets/destinations/1.jfif';
import second from '../assets/destinations/2.jfif';
import third from '../assets/destinations/3.jfif';
import fourth from '../assets/destinations/4.jfif';
import fifth from '../assets/destinations/5.jfif';
import { Masonry } from "masonic";
import { Button } from './ui/button';
import { MapPin } from 'lucide-react';
function TopDestinations() {
      const images =[ {src: second, id: 2}, {src: third, id: 4}, {src: first, id: 1},{src: fourth, id: 5}, {src: fifth, id: 6}];
  return (
<div className="p-4  mt-15">
  <p className="text-xl text-center font-bold mb-4 text-[var(--primary-color)]">Top Destinations</p>
     <p className='m-2 text-5xl [font-family:var(--font-times)] font-bold text-center text-gray-700' >Find your Best Destination</p>
      <Masonry
        items={images}
        columnGutter={12}
        columnWidth={350}
        className='min-h-[50px]'
        render={({ data }) => (
          <div className="mb-3">
            <img
              src={data.src}
              alt={`Destination ${data.id + 1}`}
              className="w-full rounded-xl shadow-sm hover:shadow-lg transition "
            />
          </div>
        )}
      />
      <Button className=' bg-[var(--primary-color)] hover:bg-[rgb(var(--primary-rgb)/0.3)] hover:text-[var(--primary-color)] hover:cursor-pointer'><MapPin/>View All Destinations</Button>
    </div>
  );
}
export default TopDestinations