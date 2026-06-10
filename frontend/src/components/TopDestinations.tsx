import hero from '../assets/hero.png';
import sidebar from '../assets/sidebar.png';
import { Masonry } from "masonic";
function TopDestinations() {
      const images =[{src: hero, id: 1}, {src: sidebar, id: 2}, {src: hero, id: 3}, {src: sidebar, id: 4}, {src: hero, id: 5}, {src: sidebar, id: 6}, {src: hero, id: 7}, {src: sidebar, id: 8}];
  return (
<div className="p-4">
      <Masonry
        items={images}
        columnGutter={12}
        columnWidth={250}
        render={({ data }) => (
          <div className="mb-3">
            <img
              src={data.src}
              alt={`Destination ${data.id + 1}`}
              className="w-full rounded-xl shadow-sm hover:shadow-lg transition"
            />
          </div>
        )}
      />
    </div>
  );
}
export default TopDestinations