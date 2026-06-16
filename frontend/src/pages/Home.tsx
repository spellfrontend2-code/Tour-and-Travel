import TopDestinations from "@/components/TopDestinations"
import CheckAvailability from "../components/CheckAvailability"
import  TourPackageCard  from "@/components/TourPackageCard"
import BlogCard from "@/components/BlogCard"

function Home() {
  return (
  <div className="m-10">
      <CheckAvailability />
        <div className="p-4 mt-15"><p className="text-xl text-center font-bold mb-4 text-[var(--primary-color)]">Top Destinations</p>
          <p className='m-2 text-5xl [font-family:var(--font-times)] font-bold text-center text-gray-700' >Find your Best Destination</p> 
          <TopDestinations  />
      </div>
      <div>    
        <p className="text-[var(--primary-color)] text-sm font-medium">
        Popular Packages
        </p>
        <p className="text-3xl font-bold">Tour & Trek Packages</p>
        <TourPackageCard/>
      </div>
     <div>
         <p className="text-[var(--primary-color)] text-sm font-medium">
        Popular Blogs
      </p>
      <p className="text-3xl font-bold">Tour & Trek Blogs</p>

       <BlogCard/>
     </div> 
</div>
  )
}

export default Home