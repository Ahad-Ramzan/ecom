import Image from "next/image";
import React from "react";
import facebookIcon from "@/public/icons/facebook.png";
import instagramIcon from "@/public/icons/insta.png";
import twitterIcon from "@/public/icons/twitter.png";

const Subfooter = () => {
  return (
    <div className="bg-[#E7E4F8] w-full h-14 flex items-center">
      <div className="container mx-auto flex justify-around items-center px-4">
        {/* Copyright Text */}
        <p className="text-_subtext text-sm leading-5">
          © 2025 Your Company. All Rights Reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          <Image
            src={facebookIcon}
            alt="Facebook"
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src={instagramIcon}
            alt="Instagram"
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src={twitterIcon}
            alt="Twitter"
            width={20}
            height={20}
            className=" cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Subfooter;
