import React from "react";
import { lato } from "@/public/fonts/fonts";
import Button from "./Button";

const Footer = () => {
  const navItems = [
    {
      title: "Categories",
      links: [
        "Laptops & Computers",
        "Cameras & Photography",
        "Smart Phones & Tablets",
        "Video Games & Consoles",
        "Waterproof Headphones",
      ],
    },
    {
      title: "Customer Care",
      links: [
        "My Account",
        "Discount",
        "Returns",
        "Orders History",
        "Order Tracking",
      ],
    },
    {
      title: "Pages",
      links: [
        "Blog",
        "Browse the Shop",
        "Category",
        "Pre-Built Pages",
        "Visual Composer Elements",
        "WooCommerce Pages",
      ],
    },
  ];

  return (
    <footer className="bg-_shade w-full h-[479px]">
      <div className="container mx-auto flex pt-24">
        {/* Left Section: Logo and Email Subscription */}
        <div className="w-[420px] mr-8">
          <h1 className="text-[38px] leading-[44.53px] font-bold text-black mb-8">
            Hekto
          </h1>

          {/* Email Subscription */}
          <div className="w-[377px] h-[44px] bg-white flex items-center rounded-[3px] mb-8">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="flex-grow px-4 py-2 focus:outline-none"
            />
            <Button>Sign Up</Button>
            {/* <button className="bg-_pink text-white px-4 py-2 rounded-[3px] w-[135px] h-[39px]">
              Sign Up
            </button> */}
          </div>

          {/* Contact Information */}
          <p
            className={`${lato.className} text-[16px] leading-5 text-_subtext mb-4`}
          >
            Contact Info
          </p>
          <p
            className={`${lato.className} text-[16px] leading-5 text-_subtext`}
          >
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>

        {/* Middle Sections: Navigation Links */}
        <div className="grid grid-cols-3 gap-8 ml-5">
          {navItems.map((section) => (
            <div key={section.title} className="grid-col-4">
              {/* Section Title */}
              <h3 className="font-bold text-[22px] leading-[25.78px] text-black mb-8">
                {section.title}
              </h3>

              {/* Section Links */}
              <ul className="space-y-6">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className={`${lato.className} leading-5 text-_subtext hover:text-_pink transition-colors  block`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
