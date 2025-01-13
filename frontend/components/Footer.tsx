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
    <footer className="bg-_shade w-full py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 px-4 lg:px-0 text-center md:text-left">
        {/* Left Section: Logo and Email Subscription */}
        <div className="mr-0 lg:mr-8">
          <h1 className="text-[34px] md:text-[38px] leading-[44.53px] font-bold text-black mb-8">
            Hekto
          </h1>

          {/* Email Subscription */}
          <div className="w-full md:w-[377px] h-[44px] bg-white flex items-center justify-center md:justify-start rounded-[3px] mb-8">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="flex-grow px-4 py-2 focus:outline-none text-sm md:text-base"
            />
            <Button>Sign Up</Button>
          </div>

          {/* Contact Information */}
          <p
            className={`${lato.className} text-[14px] md:text-[16px] leading-5 text-_subtext mb-4`}
          >
            Contact Info
          </p>
          <p
            className={`${lato.className} text-[14px] md:text-[16px] leading-5 text-_subtext`}
          >
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>

        {/* Middle Sections: Navigation Links */}
        <div className="col-span-1 md:col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center md:justify-start">
          {navItems.map((section) => (
            <div key={section.title} className="grid-col-1">
              {/* Section Title */}
              <h3 className="font-bold text-[18px] md:text-[22px] leading-[25.78px] text-black mb-6">
                {section.title}
              </h3>

              {/* Section Links */}
              <ul className="space-y-4 md:space-y-6">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className={`${lato.className} text-sm md:text-base leading-5 text-_subtext hover:text-_pink transition-colors block`}
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
