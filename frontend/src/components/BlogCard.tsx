import { useNavigate } from "react-router-dom";
import pic from "../assets/destinations/1.jfif";
import {
  ArrowRight,
  Calendar,
  Clock,
  Heart,
  Tag,
  User,
} from "lucide-react";
import { Button } from "./ui/button";

const Blogs = [
  {
    id: 1,
    title: "Top 10 Trekking Routes in Nepal You Must Try",
    slug: "top-10-trekking-routes-nepal",
    author: "Adventure Team",
    category: "Travel Guide",
    image: pic,
    tags: ["Nepal", "Trekking", "Himalayas"],
    readTime: "6 min read",
    publishedDate: "2026-06-01",
    excerpt:
      "Discover the most breathtaking trekking routes in Nepal, from Everest Base Camp to hidden Himalayan gems.",
    content:
      "Nepal offers some of the most iconic trekking experiences in the world. From the legendary Everest Base Camp trek to offbeat trails like Manaslu and Annapurna Circuit, each route offers unique landscapes, culture, and challenges...",
  },
  {
    id: 2,
    title: "How to Prepare for High Altitude Trekking",
    slug: "high-altitude-trekking-preparation",
    author: "Mountain Experts",
    category: "Preparation",
    image: pic,
    tags: ["Altitude", "Fitness", "Safety"],
    readTime: "5 min read",
    publishedDate: "2026-05-20",
    excerpt:
      "Learn essential tips to prepare your body and mind for trekking at high altitudes safely.",
    content:
      "High altitude trekking requires proper preparation. Acclimatization, hydration, and fitness training are key factors to avoid altitude sickness...",
  },
  {
    id: 3,
    title: "Best Time to Visit Everest Base Camp",
    slug: "best-time-everest-base-camp",
    author: "Travel Nepal",
    category: "Season Guide",
    image: pic,
    tags: ["Everest", "Season", "Weather"],
    readTime: "4 min read",
    publishedDate: "2026-04-10",
    excerpt:
      "Find out the ideal seasons for trekking to Everest Base Camp for the best views and safety.",
    content:
      "The best time to visit Everest Base Camp is during spring (March–May) and autumn (September–November)...",
  },
  {
    id: 4,
    title: "Essential Packing List for Trekking in Nepal",
    slug: "trekking-packing-list-nepal",
    author: "Gear Guide",
    category: "Gear & Equipment",
    image: pic,
    tags: ["Packing", "Gear", "Checklist"],
    readTime: "7 min read",
    publishedDate: "2026-03-15",
    excerpt:
      "A complete packing guide to ensure you’re fully prepared for trekking in the Himalayas.",
    content:
      "Packing smart is crucial for trekking in Nepal. You need layers, waterproof gear, proper boots, and essential medical supplies...",
  },
  {
    id: 5,
    title: "Cultural Highlights of the Everest Region",
    slug: "everest-region-culture",
    author: "Culture Explorer",
    category: "Culture",
    image: pic,
    tags: ["Culture", "Sherpa", "Tradition"],
    readTime: "6 min read",
    publishedDate: "2026-02-28",
    excerpt:
      "Explore the rich Sherpa culture and traditions of the Everest region.",
    content:
      "The Everest region is not just about mountains; it is home to the Sherpa community, known for their hospitality and mountaineering skills...",
  },
];
export function BlogCard() {
  const navigate = useNavigate();
  return (
    <div className=" m-10">
      <p className="text-[var(--primary-color)] text-sm font-medium">
        Popular Blogs
      </p>
      <p className="text-3xl font-bold">Tour & Trek Blogs</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {Blogs.map((blog, index) => (
          <div key={index} className="flex flex-col rounded-lg m-10 cursor-pointer text-sm w-[350px] h-[400px] border-2 hover:shadow-lg">
            <div className="relative h-1/2 overflow-hidden bg-red-400 rounded-t-lg">
              <img
                src={blog.image}
                className="h-full w-full  transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              />
              <Heart size={18} className="absolute top-2 right-2 text-red-600 hover:fill-red-600" />
            </div>
            <div className="h-2/3 flex flex-col items-left justify-between p-2">
              <div className="flex justify-between text-sm font-medium text-gray-300">
                <p className="flex items-center gap-1">
                  <Calendar size={15} />
                  Date:{blog.publishedDate}
                </p>
                <p className="flex text-sm font-medium items-center gap-2 ">
                  <Clock size={15} />
                  {blog.readTime}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-bold">{blog.title}</p>

              <p className="overflow-hidden text-gray-400 line-clamp-2">
                {blog.content}
              </p>
              </div>
                 <div className="flex gap-2">
              {blog.tags.map((tag, index) => (
             
                <p key={index} className="flex items-center gap-1 text-gray-400">
                  <Tag size={15}/>{tag}
                </p>
            
              ))}
                  </div>
              

              <div className="flex text-gray-400 justify-between border-t-1">
                <p className="flex items-center gap-2">
                  <User />
                  {blog.author}
                </p>

                <Button variant="none" className="text-[rgb(var(--primary-rgb)/0.7)] hover:text-[var(--primary-color)] cursor-pointer" onClick={() => navigate(`/${blog.id}`)}>
                  Read Article
                  <ArrowRight />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
