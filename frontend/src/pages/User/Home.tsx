import TopDestinations from "@/features/destination/components/TopDestinations";
import CheckAvailability from "@/features/checkavailability/components/CheckAvailability";
import TourPackageCard from "@/features/tour/components/TourPackageCard";
import BlogCard from "@/features/blog/components/BlogCard";
import Destinations from "@/data/Destinations";
import TourPackages from "@/data/TourPackages";
import Blogs from "@/data/Blogs";

function Home() {
  return (
    <div className="">
      <CheckAvailability />
      <div className=" mt-15">
        <p
          className="text-xl text-center font-bold mb-4 text-[var(--primary-color)]"
        >
          Top Destinations
        </p>

        <p
          className="m-2 text-5xl [font-family:var(--font-times)] font-bold text-center text-gray-700"
        >
          Find your Best Destination
        </p>
        <TopDestinations Destinations={Destinations} />
      </div>
      <div className="p-8 mt-15">
        <p
          className="text-[var(--primary-color)] text-sm font-medium"
        >
          Popular Packages
        </p>
        <p className="text-3xl font-bold">Tour & Trek Packages</p>
        <TourPackageCard TourPackages={TourPackages} />
      </div>
      <div className="p-8 mt-15">
        <p
          className="text-[var(--primary-color)] text-sm font-medium"
        >
          Popular Blogs
        </p>
        <p className="text-3xl font-bold">Tour & Trek Blogs</p>
        <BlogCard Blogs={Blogs} />
      </div>
    </div>
  );
}
export default Home;
