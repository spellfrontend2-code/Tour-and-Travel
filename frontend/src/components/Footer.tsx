import CompanyInfo from "@/data/CompanyInfo";
import { Copyright } from "lucide-react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="flex flex-col  justify-between h-[300px] w-full bg-gray-900 rounded-t-lg border border-white text-white  text-sm">
      <div className="pr-15 flex justify-around h-[260px] py-5">
        <section className="flex flex-col gap-2 h-full justify-between ">
          <div className="h-full">
            <div className="flex flex-col text-sm ">
              <img
                src={CompanyInfo.logo}
                alt="logo"
                className="w-[120px] h-[40px] mb-1"
              />
              <hr className="border-white w-[60px] border rounded-2xl mb-1" />
              <p>{CompanyInfo.name}</p>
              <p>Address: {CompanyInfo.address}</p>
              <p>Phone: {CompanyInfo.phone}</p>
              <p>Email: {CompanyInfo.email}</p>
            </div>
          </div>
          <div>
            <p className="font-bold">Recognized by</p>
            <hr className="border-white w-[60px] border rounded-2xl mb-1 rounded-full" />

            <div className="h-[30px] w-[30px] flex gap-2">
              {CompanyInfo.recognizedBy.map((rec) => (
                <img
                  src={rec.logo}
                  alt="logo"
                  className=" rounded-full h-full w-full"
                />
              ))}
            </div>
          </div>
        </section>
        <section className="flex flex-col h-full justify-between">
          <div>
            <p className="font-bold">Company </p>
            <hr className="border-white w-[60px] border rounded-2xl mb-1" />
            {CompanyInfo.companyLinks.map((l) => (
              <p><Link to={l.link}>{l.name}</Link></p>
            ))}
          </div>
          <div>
            <p className="font-bold">Highly Recommended On</p>
            <hr className="border-white w-[60px] border rounded-2xl mb-1 rounded-full" />

            <div className="h-[30px] w-[30px] flex gap-2">
              {CompanyInfo.recommendedOn.map((rec) => (
                <img
                  src={rec.logo}
                  alt="logo"
                  className=" rounded-full h-full w-full"
                />
              ))}
            </div>
          </div>
        </section>
        <section className="flex flex-col h-full justify-between">
          <div>
            <p className="font-bold">Useful Links</p>
            <hr className="border-white w-[60px] border rounded-2xl mb-1" />
            {CompanyInfo.usefulLinks.map((l) => (
              <p><a href={l.link} target="_blank">{l.name}</a></p>
            ))}
          </div>
          <div>
            <p className="font-bold">Payment Methods</p>
            <hr className="border-white w-[60px] border rounded-2xl mb-1 rounded-full" />

            <div className="h-[30px] w-[30px] flex gap-2">
              {CompanyInfo.paymentMethods.map((pay) => (
                <img
                  src={pay.logo}
                  alt="logo"
                  className=" rounded-full h-full w-full"
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="px-30">
        <div className="flex py-2 justify-between  border-t-2 border-white">
        <div className="h-[30px] w-[30px] flex gap-2">
          {CompanyInfo.socialMedia.map((soc) => (
            <img
              src={soc.logo}
              alt="logo"
              className=" rounded-full h-full w-full"
            />
          ))}
        </div>
      
        <div className="flex gap-2 items-center text-white">
          <Copyright size={15} />
          <span>{new Date().getFullYear()} Tour and Trekking Pvt. Ltd. All Rights Reserved.</span>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
