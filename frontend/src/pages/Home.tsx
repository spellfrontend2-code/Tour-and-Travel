import TopDestinations from "@/components/TopDestinations"
import CheckAvailability from "../components/CheckAvailability"
import Navbar from "../components/Navbar"

function Home() {
  return (
    <div className="grid grid-cols-[1fr_3fr] w-full h-screen">
      <div className="bg-gray-100">
        <Navbar/>
      </div>
      <div className="">
      <CheckAvailability />
      <TopDestinations/>
      </div>
    </div>
  )
}

export default Home