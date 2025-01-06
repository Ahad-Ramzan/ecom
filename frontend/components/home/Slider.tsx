import React from "react";
import { lato } from "@/public/fonts/fonts";
const Slider = () => {
  return (
    <div className="w-full h-[764px] bg-_shade my-2">
      <div className="container mx-auto h-full flex">
        {/* Left side */}
        <div>
          <h3
            className={`${lato.className} text-[16px] font-bold text-_pink leading-7`}
          >
            Best Furniture For Your Castle....
          </h3>
          <h1 className="text-[53px] leading-[81.98px] text-black tracking-[1.5%]">
            New Furniture Collection Trends in 2025
          </h1>
        </div>

        {/* Right side */}
        <div className="w-[400px] h-[400px]">
          <div className="w-[300px] h-[300px] bg-#ECD2FA rounded-full  ">
            <div className="w-[200px] h-[200px] bg-green-300 relative left-0 top-0 z-30  "></div>
            <div className="w-[200px] h-[200px] bg-yellow-300 left-0 top-0 z-40"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
