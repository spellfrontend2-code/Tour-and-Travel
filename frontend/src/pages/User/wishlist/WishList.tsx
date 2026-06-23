import BlogCard from "@/features/blog/components/BlogCard";
import DestinationCard from "@/features/destination/components/DestinationCard";
import TourPackageCard from "@/features/tour/components/TourPackageCard";
import { Button } from "@/components/ui/button";
import { useWishList } from "@/context/WishListContext";
import Blogs from "@/data/Blogs";
import Destinations from "@/data/Destinations";
import TourPackages from "@/data/TourPackages";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

function WishList() {
  const { wishlist } = useWishList();
  const navigate = useNavigate();

  const wishlistedBlogs = Blogs.filter((blog) =>
    wishlist.blogs.includes(blog.id),
  );
  const wishlistedDestinations = Destinations.filter((destination) =>
    wishlist.destinations.includes(destination.id),
  );
  const wishlistedTourPackages = TourPackages.filter((tourPackage) =>
    wishlist.tourPackages.includes(tourPackage.id),
  );
  const wishlistItemsAvailable =
    wishlistedBlogs.length > 0 ||
    wishlistedDestinations.length > 0 ||
    wishlistedTourPackages.length > 0;
  return (
    <div className=" h-full p-15 ">
      <section className="flex flex-col gap-3 w-full p-5">
        <div className="w-[200px] bg-[rgb(var(--primary-rgb)/0.1)] text-xs uppercase tracking-widest rounded-2xl p-1 border border-[var(--primary-color)] text-[var(--primary-color)] font-bold flex items-center gap-2">
          <Heart
            size={18}
            className="text-[var(--primary-color)] fill-[var(--primary-color)]"
          />
          Your saved choices
        </div>
        <div className="">
          <p className="text-3xl font-bold tracking-wide">My Wishlist</p>
          <p>
            Keep track of your favorite destinations, tour packages and blogs
          </p>
        </div>
      </section>
      {!wishlistItemsAvailable ? (
        <section className="w-full h-[400px] flex justify-center mt-10 ">
          <div className=" h-full w-[600px] border rounded-2xl p-15 text-sm sm:text-base md:text-base lg:text-base">
            <div className="flex flex-col justify-center items-center gap-5">
              <Heart color="gray" size={40} strokeWidth={1} />
              <p className="text-lg sm:text-3xl md:text-3xl lg:text-4xl font-bold">
                Your wishlist is empty
              </p>
              <p className="text-gray-500">
                Browse our gallery to save your favorite destinations, tour
                packages and blogs.
              </p>
              <div className="flex flex-wrap gap-5 justify-center ">
                <Button
                  variant="greenSolidViewButton"
                  className="text-xs sm:text-base"
                  onClick={() => navigate("/destinations")}
                >
                  Browse Destinations
                </Button>
                <Button
                  variant="greenSolidViewButton"
                  className="text-xs sm:text-base"
                  onClick={() => navigate("/tours")}
                >
                  Browse Tour Packages
                </Button>
                <Button
                  variant="greenSolidViewButton"
                  className="text-xs sm:text-base"
                  onClick={() => navigate("/blogs")}
                >
                  Browse Blogs
                </Button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="p-5 text-sm text-[var(--primary-color)] font-bold sm:text-base md:text-base lg:text-2xl">
          {wishlistedDestinations.length > 0 &&
          (<div>
            <p>Destinations</p>
            <DestinationCard Destinations={wishlistedDestinations} />
          </div>)}

          {wishlistedTourPackages.length > 0 &&(<div>
            <p>Tour Packages</p>
            <TourPackageCard TourPackages={wishlistedTourPackages} />
          </div>)}

          {wishlistedBlogs.length > 0 &&(<div>
            <p>Blogs</p>
            <BlogCard Blogs={wishlistedBlogs} />
          </div>)}
        </section>
      )}
    </div>
  );
}

export default WishList;
