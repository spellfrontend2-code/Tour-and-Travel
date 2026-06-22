import pic1 from "../assets/destinations/1.jfif";
import pic2 from "../assets/destinations/2.jfif";
import pic3 from "../assets/destinations/3.jfif";
import pic4 from "../assets/destinations/4.jfif";
const TourPackages = [
  {
    id: 1,
    name: "Everest Base Camp Trek",
    location: "Solukhumbu",
    country: "Nepal",
    region: "Everest",
    rating: 4.9,
    days: 14,
    nights: 13,
    maxAltitude: "5,364m",
    groupSize: {
      min: 2,
      max: 5,
    },
    currency: "$",
    image: pic1,

    overview:
      "A legendary trek through the heart of the Himalayas, passing traditional Sherpa villages, ancient monasteries, and stunning mountain landscapes before reaching Everest Base Camp.",

    description:
      "Experience the iconic trek to Everest Base Camp through Sherpa villages and breathtaking Himalayan scenery.",

    included: [
      "Airport transfers",
      "Domestic flights (Kathmandu-Lukla-Kathmandu)",
      "Licensed trekking guide",
      "Accommodation in tea houses",
      "Breakfast, lunch, and dinner during trek",
      "Trekking permits and TIMS card",
    ],

    excluded: [
      "International airfare",
      "Travel insurance",
      "Personal expenses",
      "Tips for guide and porter",
      "Alcoholic beverages",
      "WiFi and hot showers",
    ],
    packages: [
            {
        id: 1,
        name: "Group",
        price: 1299,
        features: [
          "Shared accommodation",
          "Group departure",
          "Professional guide",
        ],
      },
      {
        id: 2,
        name: "Private",
        price: 1599,
        features: [
          "Private room where available",
          "One porter for two trekkers",
          "Welcome dinner",
          "Professional guide",
        ],
      },
      {
        id: 3,
        name: "Customized",
        price: 2199,
        features: [
          "Luxury Kathmandu hotel",
          "Private porter",
          "Best available lodges",
          "Airport assistance",
          "Farewell dinner",
        ],
      },
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Kathmandu",
        description:
          "Meet our representative at the airport and transfer to your hotel.",
      },
      {
        day: 2,
        title: "Fly to Lukla & Trek to Phakding",
        description:
          "Scenic mountain flight followed by a short trek to Phakding.",
      },
      // ...days 3-14
    ],
  },

  {
    id: 2,
    name: "Annapurna Base Camp Trek",
    location: "Kaski",
    country: "Nepal",
    region: "Annapurna",
    rating: 4.8,
    days: 10,
    nights: 9,
    maxAltitude: "4,130m",
    groupSize: {
      min: 2,
      max: 10,
    },
    currency: "$",
    image: pic2,

    overview:
      "A scenic trek through rhododendron forests and Gurung villages to the Annapurna Sanctuary.",

    description:
      "Experience diverse landscapes, rich culture, and spectacular views of Annapurna and Machhapuchhre.",

    included: [
      "Airport transfers",
      "Licensed trekking guide",
      "Tea house accommodation",
      "Meals during trek",
      "Permits and entry fees",
    ],

    excluded: [
      "International airfare",
      "Travel insurance",
      "Personal expenses",
      "Tips",
      "Extra beverages",
    ],

    packages: [
      {
        id: 1,
        name: "Group",
        price: 999,
        features: [
          "Shared accommodation",
          "Group departure",
          "Professional guide",
        ],
      },
      {
        id: 2,
        name: "Private",
        price: 1299,
        features: [
          "Private room where available",
          "One porter for two trekkers",
          "Welcome dinner",
        ],
      },
      {
        id: 3,
        name: "Customized",
        price: 1699,
        features: [
          "Luxury hotel in Pokhara",
          "Private porter",
          "Airport assistance",
          "Farewell dinner",
        ],
      },
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Pokhara",
        description: "Meet your guide and prepare for the trek.",
      },
      {
        day: 2,
        title: "Drive to Nayapul & Trek to Ghandruk",
        description: "Begin trekking through traditional villages.",
      },
      {
        day: 3,
        title: "Drive to Nayapul & Trek to Ghandruk",
        description: "Begin trekking through traditional villages.",
      },
      {
        day: 4,
        title: "Drive to Nayapul & Trek to Ghandruk",
        description: "Begin trekking through traditional villages.",
      },
      {
        day: 5,
        title: "Drive to Nayapul & Trek to Ghandruk",
        description: "Begin trekking through traditional villages.",
      },
      {
        day: 6,
        title: "Drive to Nayapul & Trek to Ghandruk",
        description: "Begin trekking through traditional villages.",
      },
      {
        day: 7,
        title: "Drive to Nayapul & Trek to Ghandruk",
        description: "Begin trekking through traditional villages.",
      },
      {
        day: 8,
        title: "Drive to Nayapul & Trek to Ghandruk",
        description: "Begin trekking through traditional villages.",
      },
    ],
  },

  {
    id: 3,
    name: "Langtang Valley Trek",
    location: "Rasuwa",
    country: "Nepal",
    region: "Langtang",
    rating: 4.7,
    days: 8,
    nights: 7,
    maxAltitude: "3,870m",
    groupSize:{
      min: 2,
      max: 10},
    currency: "$",
    image: pic3,

    overview:
      "A beautiful Himalayan trek close to Kathmandu with stunning scenery and Tamang culture.",

    description:
      "Perfect for trekkers seeking an authentic Himalayan experience in a shorter timeframe.",

    included: [
      "Transportation",
      "Licensed guide",
      "Tea house accommodation",
      "Permits",
      "Meals during trek",
    ],

    excluded: [
      "International airfare",
      "Travel insurance",
      "Personal expenses",
      "Tips",
    ],

    packages: [
      {
        id: 1,
        name: "Group",
        price: 799,
        features: [
          "Shared accommodation",
          "Professional guide",
        ],
      },
      {
        id: 2,
        name: "Private",
        price: 999,
        features: [
          "Private room where available",
          "Porter service",
        ],
      },
      {
        id: 3,
        name: "Customized",
        price: 1299,
        features: [
          "Best available lodges",
          "Private porter",
          "Airport assistance",
        ],
      },
    ],

    itinerary: [
      {
        day: 1,
        title: "Drive to Syabrubesi",
        description:
          "Scenic drive from Kathmandu to the starting point.",
      },
      {
        day: 2,
        title: "Trek to Lama Hotel",
        description:
          "Walk through forests and riverside trails.",
      },
      // ...days 3-8
    ],
  },

  {
    id: 4,
    name: "Manaslu Circuit Trek",
    location: "Gorkha",
    country: "Nepal",
    region: "Manaslu",
    rating: 4.9,
    days: 16,
    nights: 15,
    maxAltitude: "5,160m",
    groupSize: {
      min: 2,
      max: 10},
    currency: "$",
    image: pic4,

    overview:
      "A remote and adventurous trek circling Mount Manaslu through untouched Himalayan landscapes.",

    description:
      "Explore ancient monasteries, high mountain passes, and rich Tibetan-influenced culture.",

    included: [
      "Airport transfers",
      "Licensed guide",
      "Tea house accommodation",
      "Meals during trek",
      "Restricted area permits",
    ],

    excluded: [
      "International airfare",
      "Travel insurance",
      "Personal expenses",
      "Tips",
    ],

    packages: [
      {
        id: 1,
        name: "Group",
        price: 1499,
        features: [
          "Shared accommodation",
          "Professional guide",
        ],
      },
      {
        id: 2,
        name: "Private",
        price: 1799,
        features: [
          "Private room where available",
          "Porter service",
        ],
      },
      {
        id: 3,
        name: "Customized",
        price: 2299,
        features: [
          "Private porter",
          "Best available lodges",
          "Airport assistance",
          "Farewell dinner",
        ],
      },
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Kathmandu",
        description:
          "Meet our representative and transfer to the hotel.",
      },
      {
        day: 2,
        title: "Drive to Soti Khola",
        description:
          "Long scenic drive to the trek starting point.",
      },
      // ...days 3-16
    ],
  },
];

export default TourPackages;