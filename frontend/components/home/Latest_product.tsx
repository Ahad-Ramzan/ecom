import React from "react";
import { lato } from "@/public/fonts/fonts";

const LatestProduct: React.FC = () => {
  const navItems = ["New Arrival", "Best Seller", "Featured", "Special Offer"];

  return (
    <div className="py-10">
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
    </div>
  );
};

export default LatestProduct;
