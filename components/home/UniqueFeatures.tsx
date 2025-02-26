import Image from "next/image";
import sofaBg from "@/public/images/sofa_bg.png";
import Button from "../Button";
import { lato } from "@/public/fonts/fonts";

const UniqueFeatures: React.FC = () => {
  const features = [
    {
      text: "All frames constructed with hardwood solids and laminates",
      dotColor: "bg-_pink", // Specific color for the dot
    },
    {
      text: "Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails",
      dotColor: "bg-blue-600",
    },
    {
      text: "Arms, backs and seats are structurally reinforced",
      dotColor: "bg-green-500",
    },
  ];

  return (
    <div className="w-full bg-_shade my-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col md:flex-row items-center justify-center">
        {/* Left Side: Image */}
        <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[550px] mx-auto mb-6 md:mb-0 md:mr-10">
          <Image
            src={sofaBg}
            alt="Sofa Background"
            className="object-contain"
          />
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left ">
          <h3 className="text-[24px] sm:text-[28px] md:text-[35px] font-semibold text-_lighttext mb-6 leading-[32px] sm:leading-[36px] md:leading-[46px] tracking-[1.5%]">
            Unique Features Of Latest & Trending Products
          </h3>

          {/* Features List */}
          <ul className="mb-6 space-y-4 w-full sm:w-auto text-left">
            {features.map((feature, index) => (
              <li
                key={index}
                className={`flex items-center gap-2 text-_subtext text-[14px] sm:text-[16px] leading-6 font-medium ${lato.className}`}
              >
                <span
                  className={`w-3 h-3 rounded-full ${feature.dotColor}`}
                ></span>
                {feature.text}
              </li>
            ))}
          </ul>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button color="bg-_pink">Add to Cart</Button>
            <div className="text-center sm:text-left">
              <h4 className="text-[14px] sm:text-[16px] leading-[16.41px] font-normal text-_darktext">
                B&B Italian Sofa
              </h4>
              <p className="text-[14px] sm:text-[16px] leading-[16.41px] font-normal text-_darktext">
                $32.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueFeatures;
