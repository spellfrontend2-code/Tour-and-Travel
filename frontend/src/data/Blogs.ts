import profile from "../assets/profile.webp"
import pic1 from "../assets/destinations/1.jfif";
import pic2 from "../assets/destinations/2.jfif";
import pic3 from "../assets/destinations/3.jfif";
import pic4 from "../assets/destinations/4.jfif";
import pic5 from "../assets/destinations/5.jfif";
const Blogs = [
  {
    id: 1,
    slug: "ultimate-guide-everest-base-camp-trek-2026",
    category: "Trekking",
    title: "Ultimate Guide to Everest Base Camp Trek in 2026",

    author: {
      profileImg: profile,
      name: "Aarav Sharma",
      position: "Senior Trekking Guide",
      bio: "A certified mountain guide with over 12 years of experience leading treks across the Himalayas.",
    },

    image: pic1,
    tags: ["Everest", "Trekking", "Nepal", "Himalayas", "Adventure"],
    readTime: "8 min read",
    publishedDate: "2026-03-15",

    excerpt:
      "Everything you need to know about preparing for the Everest Base Camp Trek, including routes, seasons, and essential tips.",

    content:
      "The Everest Base Camp Trek remains one of the world's most iconic trekking adventures. The route passes through traditional Sherpa villages, ancient monasteries, and breathtaking Himalayan landscapes before reaching the legendary base camp at 5,364 meters. Proper acclimatization, physical preparation, and selecting the right season are essential for a successful journey.",
  },

  {
    id: 2,
    slug: "top-10-trekking-routes-nepal",
    category: "Travel Guide",
    title: "Top 10 Trekking Routes in Nepal You Must Try",

    author: {
      profileImg: profile,
      name: "Adventure Team",
      position: "Travel Writers",
      bio: "A team of passionate trekkers and travel experts sharing experiences from across Nepal.",
    },

    image: pic2,
    tags: ["Nepal", "Trekking", "Himalayas"],
    readTime: "6 min read",
    publishedDate: "2026-06-01",

    excerpt:
      "Discover the most breathtaking trekking routes in Nepal from Everest Base Camp to hidden Himalayan gems.",

    content:
      "Nepal offers some of the most iconic trekking experiences in the world. From the legendary Everest Base Camp trek to offbeat trails like Manaslu and Annapurna Circuit, each route offers unique landscapes, culture, and challenges.",
  },

  {
    id: 3,
    slug: "high-altitude-trekking-preparation",
    category: "Preparation",
    title: "How to Prepare for High Altitude Trekking",

    author: {
      profileImg: profile,
      name: "Mountain Experts",
      position: "Altitude Specialists",
      bio: "Experienced mountain professionals dedicated to safe and successful Himalayan adventures.",
    },

    image: pic3,
    tags: ["Altitude", "Fitness", "Safety"],
    readTime: "5 min read",
    publishedDate: "2026-05-20",

    excerpt:
      "Learn essential tips to prepare your body and mind for trekking at high altitudes safely.",

    content:
      "High altitude trekking requires proper preparation. Acclimatization, hydration, and fitness training are key factors to avoid altitude sickness.",
  },

  {
    id: 4,
    slug: "best-time-everest-base-camp",
    category: "Season Guide",
    title: "Best Time to Visit Everest Base Camp",

    author: {
      profileImg: profile,
      name: "Travel Nepal",
      position: "Travel Consultant",
      bio: "Providing seasonal insights and travel recommendations for trekking in Nepal.",
    },

    image: pic4,
    tags: ["Everest", "Season", "Weather"],
    readTime: "4 min read",
    publishedDate: "2026-04-10",

    excerpt:
      "Find out the ideal seasons for trekking to Everest Base Camp for the best views and safety.",

    content:
      "The best time to visit Everest Base Camp is during spring (March–May) and autumn (September–November), when skies are clear and temperatures are favorable.",
  },

  {
    id: 5,
    slug: "trekking-packing-list-nepal",
    category: "Gear & Equipment",
    title: "Essential Packing List for Trekking in Nepal",

    author: {
      profileImg: profile,
      name: "Gear Guide",
      position: "Outdoor Equipment Specialist",
      bio: "Helping trekkers choose the right gear for every Himalayan adventure.",
    },

    image: pic5,
    tags: ["Packing", "Gear", "Checklist"],
    readTime: "7 min read",
    publishedDate: "2026-03-15",

    excerpt:
      "A complete packing guide to ensure you're fully prepared for trekking in the Himalayas.",

    content:
      "Packing smart is crucial for trekking in Nepal. You need layers, waterproof gear, proper boots, and essential medical supplies.",
  },

//   {
//     id: 6,
//     slug: "everest-region-culture",
//     category: "Culture",
//     title: "Cultural Highlights of the Everest Region",

//     author: {
//       profileImg: profile,
//       name: "Culture Explorer",
//       position: "Cultural Researcher",
//       bio: "Exploring the traditions, heritage, and communities of the Himalayan regions.",

//     },

//     image: pic,
//     tags: ["Culture", "Sherpa", "Tradition"],
//     readTime: "6 min read",
//     publishedDate: "2026-02-28",

//     excerpt:
//       "Explore the rich Sherpa culture and traditions of the Everest region.",

//     content:
//       "The Everest region is not just about mountains; it is home to the Sherpa community, known for their hospitality and mountaineering skills.",
//   },
];
export default Blogs;