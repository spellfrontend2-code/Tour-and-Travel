import pic1 from "../assets/destinations/1.jfif";
import pic2 from "../assets/destinations/2.jfif";
import pic3 from "../assets/destinations/3.jfif";
import pic4 from "../assets/destinations/4.jfif";
import pic5 from "../assets/destinations/5.jfif";
 const Destinations = [
  {
    id: 1,
    name: "Everest Region",
    location: "Solukhumbu",
    country: "Nepal",
    region: "Asia",
    tours: 24,
    description:
      "The Everest Region is home to the world's highest mountain and offers spectacular trekking routes, Sherpa culture, and breathtaking Himalayan scenery.",
    historicalContext:
      "The region gained international recognition after the successful ascent of Mount Everest by Sir Edmund Hillary and Tenzing Norgay in 1953.",
    keyAttractions: [
      "Everest Base Camp",
      "Kala Patthar",
      "Namche Bazaar",
      "Tengboche Monastery",
      "Sagarmatha National Park",
    ],
    bestSeason: ["March-May", "September-November"],
    localLanguage: ["Sherpa", "Nepali"],
    rating: 4.7,
    image: pic1,
  },

  {
    id: 2,
    name: "Paris",
    location: "Île-de-France",
    country: "France",
    region: "Europe",
    tours: 58,
    description:
      "The City of Light, famous for its art, architecture, cuisine, and romantic atmosphere.",
    historicalContext:
      "Paris has been a major European center of art, science, and politics for centuries and is home to iconic landmarks dating back hundreds of years.",
    keyAttractions: [
      "Eiffel Tower",
      "Louvre Museum",
      "Notre-Dame Cathedral",
      "Arc de Triomphe",
      "Montmartre",
    ],
    bestSeason: ["April-June", "September-October"],
    localLanguage: ["French"],
    rating: 4.8,
    image: pic2,
  },

  {
    id: 3,
    name: "Cape Town",
    location: "Western Cape",
    country: "South Africa",
    region: "Africa",
    tours: 31,
    description:
      "A stunning coastal city known for its dramatic landscapes, beaches, and vibrant culture.",
    historicalContext:
      "Founded in the 17th century, Cape Town played a significant role in maritime trade and South African history.",
    keyAttractions: [
      "Table Mountain",
      "Cape Point",
      "Robben Island",
      "Boulders Beach",
      "V&A Waterfront",
    ],
    bestSeason: ["November-March"],
    localLanguage: ["English", "Afrikaans", "Xhosa"],
    rating: 4.6,
    image: pic3,
  },

  {
    id: 4,
    name: "Kyoto",
    location: "Kyoto Prefecture",
    country: "Japan",
    region: "Asia",
    tours: 40,
    description:
      "A historic Japanese city renowned for ancient temples, traditional tea houses, and beautiful gardens.",
    historicalContext:
      "Kyoto served as Japan's imperial capital for over a thousand years and preserves much of the country's cultural heritage.",
    keyAttractions: [
      "Fushimi Inari Shrine",
      "Kinkaku-ji",
      "Arashiyama Bamboo Grove",
      "Gion District",
      "Nijo Castle",
    ],
    bestSeason: ["March-May", "October-November"],
    localLanguage: ["Japanese"],
    rating: 4.9,
    image: pic4,
  },

  {
    id: 5,
    name: "Santorini",
    location: "South Aegean",
    country: "Greece",
    region: "Europe",
    tours: 27,
    description:
      "A picturesque island famous for whitewashed villages, blue domes, and breathtaking sunsets.",
    historicalContext:
      "Santorini was shaped by one of history's largest volcanic eruptions and has been inhabited since ancient times.",
    keyAttractions: [
      "Oia Village",
      "Fira",
      "Red Beach",
      "Akrotiri Ruins",
      "Amoudi Bay",
    ],
    bestSeason: ["April-June", "September-October"],
    localLanguage: ["Greek"],
    rating: 4.8,
    image: pic5,
  },

  // {
  //   id: 6,
  //   name: "Machu Picchu",
  //   location: "Cusco Region",
  //   country: "Peru",
  //   region: "South America",
  //   tours: 22,
  //   description:
  //     "An ancient Incan citadel nestled high in the Andes Mountains, offering incredible archaeological and natural beauty.",
  //   historicalContext:
  //     "Built in the 15th century by the Incas, Machu Picchu remained hidden from the outside world until its rediscovery in 1911.",
  //   keyAttractions: [
  //     "Sun Gate",
  //     "Temple of the Sun",
  //     "Huayna Picchu",
  //     "Sacred Plaza",
  //     "Inca Trail",
  //   ],
  //   bestSeason: ["May-September"],
  //   localLanguage: ["Spanish", "Quechua"],
  //   rating: 4.9,
  //   image: pic,
  // },
];

export default Destinations;