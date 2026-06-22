import pic1 from "../assets/destinations/1.jfif";
import pic2 from "../assets/destinations/2.jfif";
import logo from "../assets/logo/logo.png"
import fbLogo from "../assets/socialmedia/facebook logo.jpg";
import instaLogo from "../assets/socialmedia/instagram logo.png";
import linkedinLogo from "../assets/socialmedia/linkedin.jfif";
import youtubeLogo from "../assets/socialmedia/youtube.jfif"
import twitterLogo from "../assets/socialmedia/twitter.webp";

import tripAdvisor from "../assets/footer/tripadvisor.jpg"
import ntb from "../assets/footer/NTB.jpg"
import taan from "../assets/footer/TAAN.jpg"
import nma from "../assets/footer/NMA.webp"
import natta from "../assets/footer/NATTA.jpg"

import visa from "../assets/footer/visa.png"
import mastercard from "../assets/footer/mastercard.jpg"
import americanexpress from "../assets/footer/americanexpress.webp"
import paypal from "../assets/footer/paypal.jpg"
import banktransfer from "../assets/footer/banktransfer.webp"

import trustpilot from "../assets/footer/trustpilot.webp"
import googlereview from "../assets/footer/googlereview.jfif"
 const CompanyInfo = {
  logo: logo,
  name: "Tour and Trekking Pvt. Ltd",

  address: "Amrit Marga, Thamel, Kathmandu, Nepal",
  phone: "+977 9841021636",
  cell: "+977 9767552680",
  email: "inquiry@accessnepaltour.com",

  recognizedBy: [
    {
      name: "Tripadvisor",
      logo:tripAdvisor,
    },
    {
      name: "Nepal Tourism Board (NTB)",
      logo: ntb,
    },
    {
      name: "Trekking Agencies' Association of Nepal (TAAN)",
      logo:taan,
    },
    {
      name: "Nepal Mountaineering Association (NMA)",
      logo: nma,
    },
    {
      name: "Nepal Association of Tour and Travel Agents (NATTA)",
      logo: natta,
    },
  ],

  paymentMethods: [
    {
      name: "Visa",
      logo: visa,
    },
    {
      name: "Mastercard",
      logo: mastercard,
    },
    {
      name: "American Express",
      logo: americanexpress,
    },
    {
      name: "PayPal",
      logo:paypal,
    },
    {
      name: "Bank Transfer",
      logo: banktransfer,
    },
  ],
  recommendedOn: [
    {
      name: "Tripadvisor",
      logo: tripAdvisor,
      link: "https://www.tripadvisor.com/",
    },
    {
      name: "Trustpilot",
      logo: trustpilot,
      link: "https://www.trustpilot.com/",
    },
    {
      name: "Google Reviews",
      logo: googlereview,
      link: "https://www.google.com/maps",
    },
  ],
  socialMedia: [
    {
      name: "Facebook",
      logo: fbLogo,
      link: "https://www.facebook.com/accessnepaltour",
    },
    {
      name: "Instagram",
      logo: instaLogo,
      link: "https://www.instagram.com/accessnepaltour",
    },
    {
      name: "LinkedIn",
      logo: linkedinLogo,
      link: "https://www.linkedin.com/company/access-nepal-tour-trekking",
    },
    {
      name: "YouTube",
      logo:youtubeLogo,
      link: "https://www.youtube.com/@accessnepaltour",
    },
    {
      name: "Twitter",
      logo: twitterLogo,
      link: "https://accessnepaltour.com",
    },
  ],
  companyLinks: [
    {
      name: "About Us",
      link: "/about-us",
    },
    {
      name: "Testimonials",
      link: "/testimonials",
    },
    {
      name: "Why Us?",
      link: "/why-us",
    },
  ],

  usefulLinks: [
    {
      name: "Privacy Policy",
      link: "/privacy-policy",
    },
    {
      name: "Contact Us",
      link: "/contact-us",
    },
    {
      name: "Our Affiliations",
      link: "/our-affiliations",
    },
    {
      name: "Legal Documents",
      link: "/legal-documents",
    },
    {
      name: "Terms & Conditions",
      link: "/terms-and-conditions",
    },
  ],
};
export default CompanyInfo;