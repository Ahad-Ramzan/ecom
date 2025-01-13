import React from "react";
import Image from "next/image";
import { lato } from "@/public/fonts/fonts";
import first_image from "@/public/images/new_arrival/image_1.png";
import second_image from "@/public/images/new_arrival/image_2.png";
import third_image from "@/public/images/new_arrival/image_3.png";
import fourth_image from "@/public/images/new_arrival/image_4.png";
import fifth_image from "@/public/images/new_arrival/image_5.png";
import sixth_image from "@/public/images/new_arrival/image_6.png";

import heart from "@/public/icons/blue_heart.png";
import plus_search from "@/public/icons/blue_search-plus.png";
import cart from "@/public/icons/blue_cart.png";
import sale from "@/public/icons/sale.png";

const LatestProduct: React.FC = () => {
  const navItems = ["New Arrival", "Best Seller", "Featured", "Special Offer"];
  const NewArrivals = [
    {
      id: 1,
      image: first_image,
      title: "Comfort Handy Craft",
      real_price: "$65.00",
      discount_price: "$42.00",
    },
    {
      id: 2,
      image: second_image,
      title: "Comfort Handy Craft",
      real_price: "$65.00",
      discount_price: "$42.00",
    },
    {
      id: 3,
      image: third_image,
      title: "Comfort Handy Craft",
      real_price: "$65.00",
      discount_price: "$42.00",
    },
    {
      id: 4,
      image: fourth_image,
      title: "Comfort Handy Craft",
      real_price: "$65.00",
      discount_price: "$42.00",
    },
    {
      id: 5,
      image: fifth_image,
      title: "Comfort Handy Craft",
      real_price: "$65.00",
      discount_price: "$42.00",
    },
    {
      id: 6,
      image: sixth_image,
      title: "Comfort Handy Craft",
      real_price: "$65.00",
      discount_price: "$42.00",
    },
  ];

  return (
    <div className="py-10 lg:container sm:mx-5">
      {/* Header Section */}
      <h1 className="lg:text-[42px] md:text-[32px] text-[24px] font-bold text-center text-_lighttext my-6 leading-10">
        Latest Product
      </h1>
      <div className="flex justify-center mb-16 mt-10">
        <ul className="flex gap-5 md:gap-11 text-[12px] md:text-[18px] font-semibold leading-5 text-_lighttext">
          {navItems.map((item) => (
            <li
              key={item}
              className={`${lato.className} cursor-pointer hover:text-_pink transition-colors hover:underline`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Product Cards */}

      <div className=" container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-5 md:px-10 lg:px-20">
        {NewArrivals.map((product) => (
          <div key={product.id} className="group flex justify-center">
            {/* Product Card */}
            <div className="bg-white rounded-lg overflow-hidden transition-shadow w-full max-w-[360px]">
              {/* Product Image */}
              <div className="relative w-full h-[269px] flex justify-center items-center bg-[#F7F7F7] group-hover:bg-white">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={223}
                  height={229}
                  className=""
                />

                {/* Overlay Icons */}
                <div className="hidden absolute top-[60%] left-5 group-hover:flex flex-col ">
                  {/* Cart Icon */}
                  <Image
                    src={cart}
                    alt="Cart Icon"
                    width={21}
                    height={21}
                    className="cursor-pointer hover:bg-_shade rounded-full p-[5px] w-[30px] h-[30px] hover:scale-110 transition-transform"
                  />

                  {/* Heart Icon */}
                  <Image
                    src={heart}
                    alt="Heart Icon"
                    width={19}
                    height={19}
                    className="cursor-pointer  hover:bg-_shade rounded-full p-[5px] w-[30px] h-[30px] my-3 hover:scale-110 transition-transform "
                  />

                  {/* Plus Search Icon */}
                  <Image
                    src={plus_search}
                    alt="Plus Search Icon"
                    width={19}
                    height={19}
                    className="cursor-pointer  hover:bg-_shade rounded-full p-[5px] w-[30px] h-[30px] hover:scale-110 transition-transform"
                  />
                </div>

                {/* Sale Badge */}
                <div className="hidden group-hover:block absolute top-[-2] left-[-1]">
                  <Image
                    src={sale}
                    alt="Sale Badge"
                    width={84}
                    height={56}
                    className=""
                  />
                </div>
              </div>

              {/* Product Details */}
              <div className="p-4">
                <div className="flex justify-between items-center">
                  {/* Product Title */}
                  <h3 className="text-[16px] text-_lighttext border-b-2">
                    {product.title}
                  </h3>

                  {/* Product Prices */}
                  <div className="text-right flex gap-1">
                    <span className="text-[16px] font-normal leading-4 text-_lighttext">
                      {product.discount_price}
                    </span>
                    <br />
                    <span className="text-[14px] text-_pink line-through">
                      {product.real_price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProduct;
