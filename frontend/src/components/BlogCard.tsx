import { useNavigate } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Heart, Tag, User } from "lucide-react";
import { Button } from "./ui/button";
function BlogCard({ Blogs }) {
  const navigate = useNavigate();
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 m-8"
    >
      {Blogs.map((blog, index) => (
        <div
          key={index}
          className="group flex flex-col rounded-2xl bg-white cursor-pointer text-sm border border-gray-100 shadow-sm hover:shadow-2xl hover:border-gray-200 transition-all duration-300">
          <div
            className="relative h-56 overflow-hidden rounded-t-2xl">
            <img
              src={blog.image}
              alt={blog.title}
              className="h-full w-full object-cover transition- transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30 opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
            <div
              className="absolute top-4 right-4 bg-white/20 p-2 rounded-full border border-white/30 transition-colors hover:bg-white/40 isolate">
              <Heart
                size={18}
                className=" text-white hover:fill-red-600 hover:text-red-600"
              />
            </div>
            <div className="absolute top-4 left-4">
              <span
                className="bg-[var(--primary-color)] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md"
              >
                {blog.category}
              </span>
            </div>
          </div>
          <div
            className="flex-1 flex flex-col justify-between p-6 gap-4 "
          >
            <div
              className="flex flex-wrap items-center text-xs font-medium text-gray-500 justify-between "
            >
              <div className="flex items-center gap-1.5">
                <Calendar
                  size={14}
                  className="text-[var(--primary-color)]"
                />
                {blog.publishedDate}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock
                  size={14}
                  className="text-[var(--primary-color)]"
                />

                {blog.readTime}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3
                className="text-xl font-bold text-gray-900 line-clamp-2 leading-tight group-hover:text-[var(--primary-color)] transition-colors"
              >
                {blog.title}
              </h3>

              <p
                className="text-gray-600 line-clamp-2 leading-relaxed text-base"
              >
                {blog.excerpt}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-1">
              {blog.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-1 bg-gray-50 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-lg border border-gray-100 "
                >
                  <Tag
                    size={12}
                    className="text-[var(--primary-color)] opacity-70"
                  />

                  {tag}
                </span>
              ))}
            </div>
            <hr className="border-gray-100 my-2" />
            <div
              className="flex items-center justify-between mt-auto"
            >
              <div
                className="flex items-center gap-2 text-sm font-semibold text-gray-800 "
              >
                <div
                  className="p-1.5 bg-gray-100 rounded-full text-gray-500 "
                >
                  <User size={14} />
                </div>
                {blog.author.name}
              </div>
              <Button
                variant="ghost"
                className="font-bold text-[var(--primary-color)] hover:bg-[var(--primary-color)]/10 hover:text-[var(--primary-color)] px-4 py-2 rounded-full transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/blogs/${blog.id}`);
                }}
              >
                Read Article
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default BlogCard;
