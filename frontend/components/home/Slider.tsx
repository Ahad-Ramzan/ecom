import React from "react";
import { lato } from "@/public/fonts/fonts";
import Button from "../Button";
import discount from "@/public/images/home/discount.png";
import Ellipse from "@/public/images/home/Ellipse.png";
import Shell_Chair from "@/public/images/home/Shell_Shaped_Chair.png";
import Image from "next/image";
const Slider = () => {
  return (
    <div className=" h-[764px] bg-_shade my-2">
      <div className="container mx-auto h-full flex flex-col-reverse md:flex-row md:flex-col-2 gap-24">
        {/* Left side */}
        <div className="flex flex-col justify-center">
          <h3
            className={`${lato.className} text-[14px] lg:text-[16px] font-bold text-_pink leading-7`}
          >
            Best Furniture For Your Castle....
          </h3>
          <h1 className="text-[32px] lg:text-[53px] leading-[48px] lg:leading-[81.98px] text-black tracking-[1.5%] my-4">
            New Furniture Collection Trends in 2025
          </h1>
          <p
            className={`${lato.className} text-[14px] lg:text-[16px] font-bold leading-6 lg:leading-7 text-_subtext mb-6`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <Button className="w-[160]">Shop Now</Button>
        </div>

        {/* Right side */}
        <div className="relative w-[400px] h-[400px] items-center justify-center flex">
          <Image
            src={Ellipse}
            alt="Ellipse"
            className="absolute -left-0 top-48"
            height={650}
            width={650}
          />
          <Image
            src={Ellipse}
            alt="Another Ellipse"
            className="absolute -left-10 top-52"
            height={650}
            width={650}
          />
          <Image
            src={Shell_Chair}
            alt="Shell chair"
            height={630}
            width={630}
            className="absolute -left-10 top-52 z-50"
          />
          <Image
            src={discount}
            alt="discount"
            height={100}
            width={100}
            className="absolute -right-8 top-48"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
