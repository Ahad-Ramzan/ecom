import About from "@/public/images/about/about_card.png";
import Button from "../Button";
import Image from "next/image";
import { lato } from "@/public/fonts/fonts";

const AboutCard = () => {
  return (
    <div className="container group flex flex-col md:flex-row items-center bg-white rounded-lg  p-6 md:p-10 gap-6 my-16">
      {/* Image Section */}
      <div className="flex-1 bg-[#2B3CAB] rounded-lg">
        <Image
          src={About}
          alt="About Us"
          className="rounded-lg shadow-lg transform transition-all duration-300 ease-in-out group-hover:translate-x-3 group-hover:-translate-y-3"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-[32px] font-bold text-_lighttext mb-4">
          Know About Our Ecommerce Business, History
        </h2>
        <p
          className={`${lato.className}text-_subtext mb-10 text-[16px] leading-6 font-semibold`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
          ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
          amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
          quis bibendum quam.
        </p>
        <Button className="">Contact Us</Button>
      </div>
    </div>
  );
};

export default AboutCard;
