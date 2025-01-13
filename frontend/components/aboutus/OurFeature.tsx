import Image from "next/image";
import Support from "@/public/images/shopex_offer/24-hours-support.png";
import Cashback from "@/public/images/shopex_offer/cashback.png";
import Freedelivery from "@/public/images/shopex_offer/free-delivery.png";
import Premium from "@/public/images/shopex_offer/premium-quality.png";

const OurFeatures = () => {
  const offers = [
    {
      title: "24/7 Support",
      image: Support,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      title: "Cashback",
      image: Cashback,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      title: "Free Delivery",
      image: Freedelivery,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      title: "Premium Quality",
      image: Premium,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
  ];

  return (
    <section className="py-16">
      {/* Heading */}
      <h1 className="text-[42px] leading-6 font-bold text-center text-black mb-12">
        Our Features
      </h1>

      {/* Cards Section */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="flex flex-col items-center  p-6  transition-shadow shadow-[0_0_20px_5px_#F6F4FD] hover:border-b-4 hover:border-[#FF9100]"
          >
            {/* Image */}
            <Image
              src={offer.image}
              alt={offer.title}
              width={80}
              height={80}
              className="mb-4"
            />

            {/* Title */}
            <h3 className="text-xl font-semibold text-_lighttext mb-2">
              {offer.title}
            </h3>

            {/* Text */}
            <p className="text-sm text-_subtext text-center">{offer.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurFeatures;
