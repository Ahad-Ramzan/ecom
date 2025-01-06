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
    <div className="w-full h-[579px] bg-_shade my-6">
      <div className="container w-[1050px] mx-auto h-full flex items-center justify-center">
        {/* Left Side: Image */}
        <div className="w-[550px] h-[550px] ml-[-9px]">
          <Image src={sofaBg} alt="Sofa Background" />
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col justify-center ml-10">
          <h3 className="text-[35px] font-semibold text-_lighttext mb-6 leading-[46px] tracking-[1.5%]">
            Unique Features Of Latest & Trending Products
          </h3>

          {/* Features List */}
          <ul className="mb-6 space-y-4">
            {features.map((feature, index) => (
              <li
                key={index}
                className={`flex items-center gap-2 text-_subtext text-[16px] leading-6 font-medium font ${lato.className} `}
              >
                <span
                  className={`w-3 h-3 rounded-full ${feature.dotColor}`}
                ></span>
                {feature.text}
              </li>
            ))}
          </ul>

          {/* Call to Action */}
          <div className="flex items-center gap-4">
            <Button color="bg-_pink">Add to Cart</Button>
            <div>
              <h4 className="text-[14px] leading-[16.41px]  font-normal text-_darktext ">
                B&B Italian Sofa
              </h4>
              <p className="text-[14px] leading-[16.41px]  font-normal text-_darktext ">
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
