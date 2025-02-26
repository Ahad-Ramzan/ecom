import Image, { StaticImageData } from "next/image";
import curt_1 from "@/public/images/curt/curt_1.png";
import curt_2 from "@/public/images/curt/curt_2.png";
import curt_3 from "@/public/images/curt/curt_3.png";
import curt_4 from "@/public/images/curt/curt_4.png";
import curt_5 from "@/public/images/curt/curt_5.png";
import { lato } from "@/public/fonts/fonts";
import Button from "../Button";

// Update the CartItem interface to use StaticImageData for images
interface CartItem {
  image: StaticImageData; // Type for imported images
  title: string;
  color: string;
  size: string;
  price: number;
}

const RightSection = () => {
  const CurtItems: CartItem[] = [
    {
      image: curt_1,
      title: "Ut diam consequat",
      color: "Brown",
      size: "XL",
      price: 32.0,
    },
    {
      image: curt_2,
      title: "Vel faucibus posuere",
      color: "Brown",
      size: "XL",
      price: 32.0,
    },
    {
      image: curt_3,
      title: "Ac vitae vestibulum",
      color: "Brown",
      size: "XL",
      price: 32.0,
    },
    {
      image: curt_4,
      title: "Elit massa diam",
      color: "Brown",
      size: "XL",
      price: 32.0,
    },
    {
      image: curt_5,
      title: "Proin pharetra elementum",
      color: "Brown",
      size: "XL",
      price: 32.0,
    },
  ];

  const subtotal = 219.0; // Example subtotal
  const total = 325.0; // Example total

  return (
    <div className=" ">
      {CurtItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between border-b border-[#C7CEE4] pb-4 mb-4"
        >
          {/* Image */}
          <div className="flex items-center gap-4">
            <Image
              src={item.image}
              alt={item.title}
              width={60}
              height={60}
              className="rounded-md"
            />
            {/* Item Details */}
            <div>
              <h4 className="text-[14px] text-[#0B0B0B] font-medium">
                {item.title}
              </h4>
              <p className="text-[12px] text-[#A1A8C1] leading-4">
                Color: {item.color}
              </p>
              <p className="text-[12px] text-[#A1A8C1] leading-4">
                Size: {item.size}
              </p>
            </div>
          </div>

          {/* Price */}
          <div>
            <p className="text-[14px] leading-4 text-_lighttext font-semibold">
              ${item.price.toFixed(2)}
            </p>
          </div>
        </div>
      ))}

      {/* bottom Totals box */}

      <div
        className={`${lato.className} flex flex-col justify-center items-center `}
      >
        <div className="bg-[#F4F4FC] p-6 rounded-sm  w-full max-w-[370px] mx-auto">
          {/* Subtotals */}
          <div className="flex justify-between items-center border-b pb-2 mb-4">
            <span className="text-[18px] leading-[21px] text-_lighttext font-semibold">
              Subtotals:
            </span>
            <span className="text-[16px] leading-5 text-_lighttext font-normal">
              £{subtotal.toFixed(2)}
            </span>
          </div>

          {/* Totals */}
          <div className="flex justify-between items-center border-b pb-2 mb-4">
            <span className="text-[18px] leading-[21px] text-_lighttext font-semibold">
              Totals:
            </span>
            <span className="text-[16px] leading-5 text-_lighttext font-normal">
              £{total.toFixed(2)}
            </span>
          </div>

          {/* Shipping Info */}
          <p className="text-[12px] leading-[14.4px] text-[#8A91AB] flex items-center mb-6">
            <span className="bg-_green text-[8px] text-white px-[4px] mr-2 rounded-lg">
              ✔
            </span>
            Shipping & taxes calculated at checkout
          </p>

          {/* Checkout Button */}
          <Button color={"bg-_green"} className="w-full text-[14px] font-bold ">
            Proceed To Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
