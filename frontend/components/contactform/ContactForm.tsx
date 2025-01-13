import React from "react";
import { lato } from "@/public/fonts/fonts";
import Image from "next/image";
import contact_image from "@/public/images/contactus/contact_us.png";
import Button from "../Button";

const ContactForm = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 my-28">
      {/* Left Section */}
      <div>
        <h2 className="text-[36px] leading-[48px] font-bold text-_lighttext mb-4">
          Information About us
        </h2>
        <p
          className={`${lato.className} text-[16px] font-normal leading-6 text-_subtext mb-6`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
          ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
          amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
          quis bibendum quam.
        </p>
        <div className="flex space-x-3">
          <div className="w-6 h-6 rounded-full bg-[#5625DF]" />
          <div className="w-6 h-6 rounded-full bg-_pink" />
          <div className="w-6 h-6 rounded-full bg-[#37DAF3]" />
        </div>
      </div>

      {/* Right Section: Contact Way */}
      <div>
        <h2 className="text-[36px] leading-[48px] font-semibold text-_lighttext mb-4">
          Contact Way
        </h2>
        <div className="grid grid-cols-2 space-y-6">
          {/* Phone and Email */}
          <div className="flex items-start mt-7">
            <div className="w-12 h-12 rounded-full bg-[#5625DF] mr-4" />
            <div>
              <p
                className={`${lato.className} text-[16px] font-normal leading-6 text-_subtext mb-2`}
              >
                Tel: 877-67-88-99
              </p>
              <p
                className={`${lato.className} text-[16px] font-normal leading-6 text-_subtext mb-6`}
              >
                E-Mail: shop@store.com
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start">
            <div className="w-12 h-12 rounded-full bg-[#FFB800] mr-4" />
            <div>
              <p
                className={`${lato.className} text-[16px] font-normal leading-6 text-_subtext mb-2`}
              >
                20 Margaret st, London
              </p>
              <p
                className={`${lato.className} text-[16px] font-normal leading-6 text-_subtext mb-6`}
              >
                Great Britain, 3NM98-LK
              </p>
            </div>
          </div>

          {/* Support Forum */}
          <div className="flex items-start">
            <div className="w-12 h-12 rounded-full bg-_pink mr-4" />
            <div>
              <p
                className={`${lato.className} text-[16px] font-normal leading-6 text-_subtext mb-2`}
              >
                Support Forum
              </p>
              <p
                className={`${lato.className} text-[16px] font-normal leading-6 text-_subtext mb-6`}
              >
                For over 24hr
              </p>
            </div>
          </div>

          {/* Free Shipping */}
          <div className="flex items-start">
            <div className="w-12 h-12 rounded-full bg-[#00C853] mr-4" />
            <div>
              <p
                className={`${lato.className} text-[16px] font-normal leading-6 text-_subtext mb-2`}
              >
                Free standard shipping
              </p>
              <p
                className={`${lato.className} text-[16px] font-normal leading-6 text-_subtext mb-2`}
              >
                On all orders.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Get In Touch */}
      <div>
        <h2 className="text-[36px] leading-[48px] font-bold text-_lighttext mb-4">
          Get In Touch
        </h2>
        <p
          className={`${lato.className} text-[16px] font-normal leading-6 text-_subtext mb-6`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
          ultrices tristique amet erat vitae eget dolor los vitae lobortis quis
          bibendum quam.
        </p>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name*"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none "
            />
            <input
              type="email"
              placeholder="Your E-mail*"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none "
            />
          </div>
          <input
            type="text"
            placeholder="Subject*"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
          />
          <textarea
            placeholder="Type Your Message*"
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
          ></textarea>
          <Button>Send Mail</Button>
        </form>
      </div>

      {/* Image */}
      <div>
        <Image src={contact_image} alt="contact png" />
      </div>
    </div>
  );
};

export default ContactForm;
