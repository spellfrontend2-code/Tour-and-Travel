import { CheckCircle } from "lucide-react";
import AboutUs from "@/data/AboutUs";
function About() {
  return (
    <div>
      <div className="p-15">
        <section className="flex flex-col justify-center items-center">
          <p className="text-3xl font-bold tracking-wide">About Us</p>
          <p>{AboutUs.shortDescription}</p>
        </section>
        <section className="flex justify-between gap-5 my-15">
          <div className="w-1/2 h-[400px] ">
            <img
              src={AboutUs.Image}
              className=" w-full h-full rounded-2xl object-cover"
            />
          </div>
          <div className="w-1/2 flex flex-col justify-between">
            <div>
              <p className="text-3xl font-bold tracking-wide">Our Story</p>
              <p>{AboutUs.ourStory}</p>
            </div>
            <div>
              <p className="text-lg font-bold tracking-wide  ">Our Mission</p>
              <p>{AboutUs.mission}</p>
            </div>
            <div>
              <p className="text-lg font-bold tracking-wide  ">Our Vision</p>
              <p>{AboutUs.vision}</p>
            </div>
            <div className="grid grid-cols-2 w-full justify-between gap-3">
              {AboutUs.values.map((value, index) => (
                <p
                  className="flex items-center gap-2 text-base tracking-wide   font-semibold"
                  key={index}
                >
                  <CheckCircle className="text-[var(--primary-color)]" />
                  {value}
                </p>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default About;
