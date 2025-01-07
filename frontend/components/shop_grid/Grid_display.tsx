import grid_1 from "@/public/images/grid_shop/grid_1.png";
import grid_2 from "@/public/images/grid_shop/grid_2.png";
import grid_3 from "@/public/images/grid_shop/grid_3.png";
import grid_4 from "@/public/images/grid_shop/grid_4.png";
import grid_5 from "@/public/images/grid_shop/grid_5.png";
import grid_6 from "@/public/images/grid_shop/grid_6.png";
import grid_7 from "@/public/images/grid_shop/grid_7.png";
import grid_8 from "@/public/images/grid_shop/grid_8.png";
import grid_9 from "@/public/images/grid_shop/grid_9.png";
import grid_10 from "@/public/images/grid_shop/grid_10.png";
import grid_11 from "@/public/images/grid_shop/grid_11.png";
import grid_12 from "@/public/images/grid_shop/grid_12.png";
import Image from "next/image";
import heart from "@/public/icons/blue_heart.png";
import plus_search from "@/public/icons/blue_search-plus.png";
import cart from "@/public/icons/blue_cart.png";

const Grid_display = () => {
  const Gridshop = [
    {
      id: 1,
      image: grid_1,
      title: "Jonathan adler chair",
      real_price: "$65.00",
      discount_price: "$42.00",
    },
    {
      id: 2,
      image: grid_2,
      title: "Ultrici condiment imperd",
      real_price: "$65.00",
      discount_price: "$42.00",
    },
    {
      id: 3,
      image: grid_3,
      title: "Vitae suspendisse",
      real_price: "$65.00",
      discount_price: "$42.00",
    },
    {
      id: 4,
      image: grid_4,
      title: "Sed at fermentum",
      real_price: "$65.00",
      discount_price: "$42.00",
    },
    {
      id: 5,
      image: grid_5,
      title: "Fusce pellentesque at",
      real_price: "$65.00",
      discount_price: "$42.00",
    },
    {
      id: 6,
      image: grid_6,
      title: "Vesti magna laoreet",
      real_price: "$65.00",
      discount_price: "$42.00",
    },
    {
      id: 7,
      image: grid_7,
      title: "Sollicitudin amet orci",
      real_price: "$65.00",
      discount_price: "$42.00",
    },
    {
      id: 8,
      image: grid_8,
      title: "Ultrices mauris sit",
      real_price: "$65.00",
      discount_price: "$42.00",
    },
    {
      id: 9,
      image: grid_9,
      title: "Pellentes condimentum",
      real_price: "$65.00",
      discount_price: "$42.00",
    },
    {
      id: 10,
      image: grid_10,
      title: "Cras scelerisque veli",
      real_price: "$65.00",
      discount_price: "$42.00",
    },
    {
      id: 11,
      image: grid_11,
      title: "Lectus vulputate fauci",
      real_price: "$65.00",
      discount_price: "$42.00",
    },
    {
      id: 12,
      image: grid_12,
      title: "Purus risus, ut",
      real_price: "$65.00",
      discount_price: "$42.00",
    },
  ];

  return (
    <div>
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-5 md:px-10 lg:px-20">
        {Gridshop.map((product) => (
          <div key={product.id} className="group flex justify-center">
            {/* Product Card */}
            <div className="bg-white rounded-lg overflow-hidden transition-shadow w-full max-w-[270px] h-[363px]">
              {/* Product Image */}
              <div className="relative w-full h-[269px] flex justify-center items-center bg-[#F7F7F7] group-hover:bg-[#EBF4F3]">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={150}
                  height={150}
                  className=""
                />

                {/* Overlay Icons */}
                <div className="hidden absolute top-[60%] left-3 group-hover:flex flex-col">
                  {/* Cart Icon */}
                  <Image
                    src={cart}
                    alt="Cart Icon"
                    width={18}
                    height={18}
                    className="cursor-pointer hover:bg-white rounded-full p-[4px] w-[25px] h-[25px] hover:scale-110 transition-transform"
                  />

                  {/* Heart Icon */}
                  <Image
                    src={heart}
                    alt="Heart Icon"
                    width={16}
                    height={16}
                    className="cursor-pointer hover:bg-white rounded-full p-[4px] w-[25px] h-[25px] my-3 hover:scale-110 transition-transform"
                  />

                  {/* Plus Search Icon */}
                  <Image
                    src={plus_search}
                    alt="Plus Search Icon"
                    width={19}
                    height={19}
                    className="cursor-pointer hover:bg-white rounded-full p-[4px] w-[25px] h-[25px] hover:scale-110 transition-transform"
                  />
                </div>
              </div>

              {/* Product Details */}
              <div className="p-4">
                <div className="flex flex-col items-center">
                  {/* Product Title */}
                  <h3 className="text-[16px] text-nowrap leading-4 text-_lighttext font-bold">
                    {product.title}
                  </h3>
                  <div className="flex gap-1 my-2">
                    <div className="w-[10px] h-[10px] bg-[#DE9034] rounded-full" />
                    <div className="w-[10px] h-[10px] bg-_pink rounded-full" />
                    <div className="w-[10px] h-[10px] bg-[#8568FF] rounded-full" />
                  </div>

                  {/* Product Prices */}
                  <div className="text-right flex items-center gap-1">
                    <span className="text-[16px] font-normal leading-4 text-_lighttext">
                      {product.discount_price}
                    </span>
                    <span className="text-[14px] text-_pink line-through">
                      {product.real_price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid_display;
