import React from "react";
import Image from "next/image";
import { lato } from "@/public/fonts/fonts";
import first_image from "@/public/images/new_arrival/image_1.png";
import second_image from "@/public/images/new_arrival/image_2.png";
import third_image from "@/public/images/new_arrival/image_3.png";
import fourth_image from "@/public/images/new_arrival/image_4.png";
import fifth_image from "@/public/images/new_arrival/image_5.png";
import sixth_image from "@/public/images/new_arrival/image_6.png";

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
    <div className="py-10 container">
      {/* Header Section */}
      <h1 className="text-[42px] font-bold text-center text-_lighttext my-6 leading-10">
        Latest Product
      </h1>
      <div className="flex justify-center">
        <ul className="flex gap-6 text-[18px] font-normal text-_lighttext">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-5 md:px-10 lg:px-20">
        {NewArrivals.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Product Image */}
            <div className="relative w-full h-[300px]">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Product Details */}
            <div className="p-4">
              <h3
                className={`${lato.className} text-[18px] font-medium text-_lighttext hover:text-_pink transition-colors`}
              >
                {product.title}
              </h3>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-[18px] font-bold text-_pink">
                  {product.discount_price}
                </span>
                <span className="text-[16px] text-_subtext line-through">
                  {product.real_price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProduct;
