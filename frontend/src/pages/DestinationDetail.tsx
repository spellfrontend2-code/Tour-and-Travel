import { MapPin } from 'lucide-react';
import first from '../assets/destinations/1.jfif';
 const Destinations = [
  {
    id: 1,
    name: "Everest Region",
    location: "Solukhumbu",
    country: "Nepal",
    totalTours: 24,
    about:
      "The Everest Region is home to the world's highest mountain and offers spectacular trekking routes, Sherpa culture, and breathtaking Himalayan scenery.",
    historicalContext:
      "The region gained international recognition after the successful ascent of Mount Everest by Sir Edmund Hillary and Tenzing Norgay in 1953. It has long been inhabited by the Sherpa community, renowned for their mountaineering expertise.",
    keyAttractions: [
      "Everest Base Camp",
      "Kala Patthar",
      "Namche Bazaar",
      "Tengboche Monastery",
      "Sagarmatha National Park"
    ],
    bestSeason: ["March-May", "September-November"],
    localLanguage: ["Sherpa", "Nepali"],
    image:first
  },

];
function DestinationDetail() {
    return (
        <div>
                {Destinations.map((dest, index) => (
                    <div>
                 <div className="relative w-full h-96">
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent to-gray-600'></div>
            <img
                src={dest.image}
                alt="Destination"
                className="w-full h-full object-cover"
            />

          
             <div className='absolute bottom-0'> <p className='text-2xl font-bold text-white'>{dest.name}</p>
             <p className='flex items-center gap-2 text-[var(--primary-color)]'><MapPin size={15} />{dest.location}</p></div>

               
        </div>
        <div className='flex bg-black h-screen text-white'>
        <div className='w-3/4'>
       {/* <AboutDestination/> */}
                <div className='border-2 p-3 m-3 bg-gray-800 text-white rounded-lg border-gray-500'>
            <p className='text-2xl m-3 font-bold border-b-1'>About {dest.name}</p>
            <p className="text-gray-300 m-3 text-sm border-b-1">{dest.about}</p>
            <p className='text-sm text-gray-300 m-3 font-bold '>Historical Context</p><p className='text-sm text-gray-300 m-3'>{dest.historicalContext}</p>
        </div>
        <div className='border-2 p-3 m-3 bg-gray-800 text-white rounded-lg border-gray-500'>
            <p className='text-2xl m-3 font-bold border-b-1'>Key Attractions & Highlights</p>
            <ol className="list-decimal pl-6">
                {dest.keyAttractions.map((attraction, index) => <li key={index}>{attraction}</li>)}
            </ol>
        </div>
        </div>
        <div  className='border-2 h-1/2 p-3 m-3 bg-gray-800 text-white rounded-lg border-gray-500'>
            <p  className='text-2xl m-3 font-bold border-b-1'>Travel Guide Details</p>
            <p>Best Season: {dest.bestSeason.join(", ")}</p>
            <p>Local Language: {dest.localLanguage.join(", ")}</p>

        </div>
</div>
        </div>
             ))}  
        </div>
    );
}
export default DestinationDetail