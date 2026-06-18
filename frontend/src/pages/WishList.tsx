import BlogCard from "@/components/BlogCard";
import DestinationCard from "@/components/DestinationCard";
import TourPackageCard from "@/components/TourPackageCard";
import { useWishList } from "@/context/WishListContext";
import Blogs from "@/data/Blogs";
import Destinations from "@/data/Destinations";
import TourPackages from "@/data/TourPackages";

function WishList() {
  const { wishlist } = useWishList();

  const wishlistedBlogs = Blogs.filter((blog) =>
    wishlist.blogs.includes(blog.id)
  );
const wishlistedDestinations=Destinations.filter((destination)=>
wishlist.destinations.includes(destination.id)
)
const wishlistedTourPackages=TourPackages.filter((tourPackage)=>
wishlist.tourPackages.includes(tourPackage.id)
)
  return (
<>
{!wishlistedBlogs.length && !wishlistedDestinations.length && !wishlistedTourPackages.length && <p>Wishlist is empty</p>}
{wishlistedDestinations.length>0 &&
 <><p>Wishlisted Destinations</p><DestinationCard Destinations={wishlistedDestinations}/></>}
{wishlistedTourPackages.length>0 && 
<><p>Wishlisted Tour Packages</p><TourPackageCard TourPackages={wishlistedTourPackages}/></>}
{wishlistedBlogs.length>0 && 
<><p>Wishlisted Blogs</p><BlogCard Blogs={wishlistedBlogs} /></>}
</> )
}

export default WishList;