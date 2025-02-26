import { lato } from "@/public/fonts/fonts";
import Button from "../Button";
import tick from "@/public/icons/Tick.png";
import Image from "next/image";
import Soft_chair from "@/public/images/sofa_bg_2.png";

const DiscountItem: React.FC = () => {
  // Define types for the discount items and details
  const discountItems: string[] = [
    "Wood Chair",
    "Plastic Chair",
    "Sofa Collection",
  ];
  const discountDetails: string[] = [
    "Material exposed like metals",
    "Clear lines and geometric figures",
    "Simple neutral colors",
    "Material exposed like metals",
  ];

  return (
    <div className="container px-4 sm:px-6 lg:px-8">
      {/* Discount Section Title */}
      <div className="flex flex-col items-center">
        <h1 className="text-[32px] sm:text-[42px] font-bold text-center text-_lighttext my-6 leading-10">
          Discount Item
        </h1>
        <ul
          className={`${lato.className} flex flex-wrap justify-center gap-3 sm:gap-5`}
        >
          {discountItems.map((item) => (
            <li
              key={item}
              className="relative text-[16px] sm:text-[18px] leading-[21.6px] font-normal text-_lighttext hover:text-_pink transition-colors hover:underline cursor-pointer after:content-['.'] after:absolute after:top-1/2 after:left-full after:-translate-y-1/2 after:translate-x-[5px] after:text-_pink after:opacity-0 hover:after:opacity-100 after:transition-opacity after:font-extrabold"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Area: Left and Right Sections */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-10 gap-10">
        {/* Left Side: Product Description and Benefits */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-[28px] sm:text-[35px] leading-[36px] sm:leading-[46px] font-semibold text-_lighttext">
            20% Discount Of All Products
          </h3>
          <p className="text-[18px] sm:text-[21px] leading-[24px] sm:leading-[27.72px] tracking-wide text-_pink mt-3">
            Eams Sofa Compact
          </p>
          <p
            className={`text-[15px] sm:text-[17px] leading-[24px] sm:leading-[30px] text-_subtext font-normal ${lato.className} mt-3`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>

          {/* Discount Details List */}
          <ul className="flex flex-col  items-start max-w-[400px] mx-auto md:mx-0 mb-4">
            {discountDetails.map((detail) => (
              <li
                key={detail}
                className={`flex items-center text-[14px] sm:text-[16px] leading-[24px] sm:leading-[30px] text-_subtext font-normal ${lato.className} my-2`}
              >
                <Image src={tick} alt="tick" width={20} height={20} />
                <span className="ml-2">{detail}</span>
              </li>
            ))}
          </ul>

          {/* Shop Now Button */}
          <div className="flex justify-center md:justify-start">
            <Button>Shop Now</Button>
          </div>
        </div>

        {/* Right Side: Product Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={Soft_chair}
            alt="Soft chair"
            width={700}
            height={600}
            className="object-contain max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountItem;
