import Image, { StaticImageData } from "next/image";
import curt_1 from "@/public/images/curt/curt_1.png";
import curt_2 from "@/public/images/curt/curt_2.png";
import curt_3 from "@/public/images/curt/curt_3.png";
import curt_4 from "@/public/images/curt/curt_4.png";
import curt_5 from "@/public/images/curt/curt_5.png";

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

  return (
    <div className="bg-[#F8F8FD] p-6 rounded-md">
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
              <h4 className="text-[16px] text-[#0B0B0B] font-medium">
                {item.title}
              </h4>
              <p className="text-[14px] text-[#6B7280]">Color: {item.color}</p>
              <p className="text-[14px] text-[#6B7280]">Size: {item.size}</p>
            </div>
          </div>

          {/* Price */}
          <div>
            <p className="text-[16px] text-[#0B0B0B] font-semibold">
              ${item.price.toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RightSection;
