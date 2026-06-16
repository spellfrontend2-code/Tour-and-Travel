import { Button } from "@/components/ui/button";
import profile from "../assets/destinations/2.jfif";
import pic from "../assets/destinations/1.jfif";
import { CircleUserRound, Circle, Clock, Calendar, Tag, ArrowLeft } from "lucide-react";
const Blog = {
  id: 1,
  category: "Trekking",
  title: "Ultimate Guide to Everest Base Camp Trek in 2026",
  author: {
    profileImg: profile,
    name: "Aarav Sharma",
    position: "Senior Trekking Guide",
    bio: "A certified mountain guide with over 12 years of experience leading treks across the Himalayas.",
  },
  read: "8 min read",
  publishDate: "2026-03-15",
  content:
    "The Everest Base Camp Trek remains one of the world's most iconic trekking adventures. The route passes through traditional Sherpa villages, ancient monasteries, and breathtaking Himalayan landscapes before reaching the legendary base camp at 5,364 meters. Proper acclimatization, physical preparation, and selecting the right season are essential for a successful journey.",
  tags: ["Everest", "Trekking", "Nepal", "Himalayas", "Adventure"],
  image: pic,
};
function BlogDetail() {
  return (
    <div className="m-10">
      <section className="">
        <Button variant="default" className="cursor-pointer" onClick={() => window.history.back()}><ArrowLeft/>Back to Gallery</Button>
        <Button variant="greenTransparentButton">
          {Blog.category}
        </Button>
        <p className="text-2xl font-bold">{Blog.title}</p>
        <div className="flex gap-2 items-center text-gray-300 font-medium text-sm">
          <p className="flex items-center gap-2">
            <CircleUserRound size={15} />
            {Blog.author.name}
          </p>
          <Circle size={5} className="fill-gray-300" />
          <p className="flex items-center gap-2">
            <Clock size={15} />
            {Blog.read}
          </p>
          <Circle size={5} className="fill-gray-300" />
          <p className="flex items-center gap-2">
            <Calendar size={15} />
            {Blog.publishDate}
          </p>
        </div>
      </section>
      <hr className="my-5" />
      <section className="w-full h-full ">
       <div className="w-full h-[400px] rounded-lg overflow-hidden group"> <img
          src={Blog.image}
          alt={`${Blog.title}`}
          className="w-full h-[400px] rounded-lg object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
        /></div>
        <p className="my-5 h-auto">{Blog.content}</p>
      </section>
      <hr className="my-5" />
      <section className="">
       <div className="flex gap-3 my-5">{Blog.tags.map((tag) => <div className="border-1 rounded-lg p-1 text-sm font-bold text-gray-500 flex gap-2 items-center"><Tag size={15}/>{tag}</div>)}</div>
        <div className="flex gap-2 w-full h-[80px] bg-gray-100/50 border-1 rounded-lg p-3">
          <img
            src={Blog.author.profileImg}
            alt="{Blog.author.name}"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className=" font-bold">{Blog.author.name}</p>
            <p className="uppercase text-xs text-[var(--primary-color)] font-bold">
              {Blog.author.position}
            </p>
            <p className="text-sm text-gray-500">{Blog.author.bio}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default BlogDetail;
