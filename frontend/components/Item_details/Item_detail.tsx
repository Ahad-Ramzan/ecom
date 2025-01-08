import React from "react";
import product_1 from "@/public/images/product_details/product_1.png";
import product_2 from "@/public/images/product_details/product_2.png";
import product_3 from "@/public/images/product_details/product_3.png";
import product_4 from "@/public/images/product_details/product_4.png";
import Image from "next/image";
import blue_heart from "@/public/icons/blue_heart.png";
import facebook from "@/public/icons/facebook_white.png";
import insta from "@/public/icons/insta_white.png";
import twitter from "@/public/icons/twitter_white.png";

const ItemDetail = () => {
  return (
    <div className="bg-white container max-w-[1170px] h-[600px] flex gap-5 p-5 my-14 rounded-lg shadow-[0_0_20px_5px_#F6F4FD]">
      {/* Left Section - Image Grid */}
      <div className="w-1/2 grid grid-cols-3 grid-rows-3 gap-x-2 gap-y-2 ">
        {/* Small Images */}
        <div className="row-span-1 col-span-1">
          <Image
            src={product_1}
            alt="Product 1"
            layout="responsive"
            className="rounded-sm "
          />
        </div>
        <div className="row-span-3 col-span-2">
          <Image
            src={product_4}
            alt="Product 2"
            layout="responsive"
            width={100}
            height={100}
            className="rounded-sm my-10 object-cover"
          />
        </div>
        <div className="row-span-1 col-span-1">
          <Image
            src={product_3}
            alt="Product 3"
            layout="responsive"
            width={100}
            height={100}
            className="rounded-lg object-cover"
          />
        </div>

        <div className="col-span-1 row-span-1">
          <Image
            src={product_2}
            alt="Product 4 (Main)"
            layout="responsive"
            width={100}
            height={100}
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Right Section - Product Details */}
      <div className="w-1/2 flex flex-col gap-5 bg-white p-5 pt-10">
        <h1 className="text-[36px] font-semibold leading-[42px] text-[#0D134E]">
          Playwood arm chair
        </h1>

        {/* Stars */}
        <label className="flex items-center text-[14px] text-yellow-500">
          {"★".repeat(5)}
          <span className="ml-2 text-_lighttext">({"20"})</span>
        </label>

        {/* Prices */}
        <div>
          <span className="text-[16px] leading-5 font-semibold text-_lighttext2">
            {"$32.00"}
          </span>
          <span className="text-[14px] ml-5 text-_pink line-through">
            {"$40.00"}
          </span>
        </div>

        <h3 className="text-[16px] font-medium leading-5 text-_darktext">
          Color
        </h3>

        <p className="text-_subtext text-[16px] leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus
          porttitor purus, et volutpat sit.
        </p>

        <div className="text-[16px] font-medium leading-7 text-_lighttext flex items-center ml-20">
          <h3>Add to Cart</h3>
          <Image
            src={blue_heart}
            alt="Heart Icon "
            width={18}
            height={16}
            className="w-[31px] h-[31px]  p-2 ml-7 "
          />
        </div>

        <h3 className="text-[16px] font-medium leading-7 text-_lighttext">
          Categories:
        </h3>

        <h3 className="text-[16px] font-medium leading-7 text-_lighttext">
          Tags
        </h3>

        <div className="flex items-center">
          <h3 className="text-[16px] font-medium leading-7 text-_lighttext">
            Share
          </h3>
          <div className="flex align-center gap-2 ml-7">
            <Image
              src={facebook}
              alt="facebook"
              width={18}
              height={16}
              className="relative w-[24px] h-[24px] bg-_lighttext rounded-full pr-[5px] hover:bg-_pink "
            />
            <Image
              src={insta}
              alt="insta"
              width={18}
              height={18}
              className="w-[24px] h-[24px] bg-_lighttext rounded-full p-[3px] pr-[5px] hover:bg-_pink "
            />
            <Image
              src={twitter}
              alt="twitter"
              width={16}
              height={16}
              className="w-[24px] h-[24px] bg-_lighttext rounded-full p-[4px] hover:bg-_pink  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
