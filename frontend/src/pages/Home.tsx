import TopDestinations from "@/components/TopDestinations"
import CheckAvailability from "../components/CheckAvailability"
import Navbar from "../components/Navbar"
import { PackageCard } from "@/components/PackageCard"

function Home() {
  return (
    <div className="grid grid-cols-[1fr_5fr]">
      <aside className="bg-gray-100">
        <Navbar/>
      </aside>
      <main className="h-screen overflow-y-auto">
      <CheckAvailability />
      <TopDestinations  />
      <PackageCard/>
      </main>
    </div>
  )
}

export default Home