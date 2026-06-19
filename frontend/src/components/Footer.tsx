import CompanyInfo from "@/data/CompanyInfo";
import { Copyright } from "lucide-react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="flex flex-col h-[260px] w-full bg-white border-t-2 border-gray-900/30 text-gray-900 font-bold text-sm">
      <div className="p-2 flex justify-around ">
        <section className="flex flex-col gap-2 h-full justify-between">
          <div className="h-full">
            <div className="flex flex-col text-sm ">
              <img
                src={CompanyInfo.logo}
                alt="logo"
                className="h-[40px] w-[40px] mb-1"
              />
              <hr className="border-gray-900 w-[60px] border rounded-2xl mb-1" />
              <p>{CompanyInfo.name}</p>
              <p>Address: {CompanyInfo.address}</p>
              <p>Phone: {CompanyInfo.phone}</p>
              <p>Email: {CompanyInfo.email}</p>
            </div>
          </div>
          <div>
            <p>Recognized by</p>
            <hr className="border-gray-900 w-[60px] border rounded-2xl mb-1 rounded-full" />

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
            <p>Company </p>
            <hr className="border-gray-900 w-[60px] border rounded-2xl mb-1" />
            {CompanyInfo.companyLinks.map((l) => (
              <p><Link to={l.link}>{l.name}</Link></p>
            ))}
          </div>
          <div>
            <p>Highly Recommended On</p>
            <hr className="border-gray-900 w-[60px] border rounded-2xl mb-1 rounded-full" />

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
            <p>Useful Links</p>
            <hr className="border-gray-900 w-[60px] border rounded-2xl mb-1" />
            {CompanyInfo.usefulLinks.map((l) => (
              <p><a href={l.link} target="_blank">{l.name}</a></p>
            ))}
          </div>
          <div>
            <p>Payment Methods</p>
            <hr className="border-gray-900 w-[60px] border rounded-2xl mb-1 rounded-full" />

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
            <hr className="border-gray-900 w-full h-full px-10" />

      <div className="p-2 flex justify-between w-full ">
        
        <div className="h-[30px] w-[30px] flex gap-2">
          {CompanyInfo.socialMedia.map((soc) => (
            <img
              src={soc.logo}
              alt="logo"
              className=" rounded-full h-full w-full"
            />
          ))}
        </div>
        <div className="flex gap-2 items-center">
          <Copyright size={15} />
          <span>{new Date().getFullYear()} Tour and Trekking Pvt. Ltd. All Rights Reserved.</span>
        </div>
      </div>
    </div>
  );
}
export default Footer;
