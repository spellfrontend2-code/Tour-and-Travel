import TopDestinations from "@/components/TopDestinations"
import CheckAvailability from "../components/CheckAvailability"
import { PackageCard } from "@/components/PackageCard"
import { BlogCard } from "@/components/BlogCard"

function Home() {
  return (
  <>
      <CheckAvailability />
      <TopDestinations  />
      <PackageCard/>
      <BlogCard/>
</>
  )
}

export default Home