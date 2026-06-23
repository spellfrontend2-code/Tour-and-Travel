import { Masonry } from "masonic";
import { Button } from "../../../components/ui/button";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function TopDestinations({ Destinations }:any) {
  const navigate = useNavigate();
  function useColumnWidth() {
    const getWidth = () => {
      if (typeof window === "undefined") return 280;
      if (window.innerWidth < 480) return window.innerWidth - 40;
      if (window.innerWidth < 640) return 160;
      if (window.innerWidth < 1024) return 220;
      return 280;
    };
    const [width, setWidth] = useState(getWidth());
    useEffect(() => {
      const handleResize = () => setWidth(getWidth());
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return width;
  }
  const columnWidth = useColumnWidth();
  return (
    <div className="relative cursor-pointer m-8">
      <Masonry
        items={Destinations}
        columnGutter={12}
        columnWidth={columnWidth}
        className="min-h-[50px]"
        overscanBy={5}
        render={({ data }) => (
          <div
            className="group relative mb-3 overflow-hidden rounded-xl hover:shadow-lg"
            onClick={() =>
              navigate(`/destinations/${data.id}`)
            }
          >
            <img
              src={data.image}
              alt={`Destination ${data.id + 1}`}
              className="w-full h-auto rounded-xl shadow-sm transition-transform duration-300 ease-in-out group-hover:scale-105 hover:shadow-lg"
            />
            <div className="absolute inset-0 transition-opacity duration-300 flex items-center justify-center bg-black/20 group-hover:bg-black/30">
              <div className="absolute bottom-0 text-left p-2 group-hover:-translate-y-3 transform transition-all duration-300 ">
                <p className="text-lg sm:text-xl font-medium text-white ">
                  {data.name}
                </p>
                <p className="text-xs sm:text-sm text-[var(--primary-color)] flex items-center gap-2">
                  <MapPin size={20} />
                  {data.location}
                </p>
              </div>
            </div>
          </div>
        )}
      />
      <div className="flex justify-center mt-6 sm:mt-10">
        <Button variant="greenSolidViewButton" onClick={()=>{navigate("/destinations");window.scrollTo(0, 0);}}>
          <MapPin />
          View All Destinations
        </Button>
      </div>
    </div>
  );
}
export default TopDestinations;
