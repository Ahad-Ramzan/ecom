import shop_list_0 from "@/public/images/shop_list/shop_list_0.png";
import shop_list_1 from "@/public/images/shop_list/shop_list_1.png";
import shop_list_2 from "@/public/images/shop_list/shop_list_2.png";
import shop_list_3 from "@/public/images/shop_list/shop_list_3.png";
import shop_list_4 from "@/public/images/shop_list/shop_list_4.png";
import shop_list_5 from "@/public/images/shop_list/shop_list_5.png";
import shop_list_6 from "@/public/images/shop_list/shop_list_6.png";
import star from "@/public/icons/star-filled.png";
import empty_star from "@/public/icons/star-empty.png";
import heart from "@/public/icons/blue_heart.png";
import plus_search from "@/public/icons/blue_search-plus.png";
import cart from "@/public/icons/blue_cart.png";
import Image from "next/image";

const ShopListDisplay = () => {
  const Shoplist = [
    {
      id: 1,
      image: shop_list_0,
      title: "Accumsan tincidunt",
      real_price: "$26.00",
      discount_price: "$52.00",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 2,
      image: shop_list_1,
      title: "In nulla",
      real_price: "$26.00",
      discount_price: "$52.00",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 3,
      image: shop_list_2,
      title: "Vel sem",
      real_price: "$26.00",
      discount_price: "$52.00",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 4,
      image: shop_list_3,
      title: "Porttitor cum",
      real_price: "$26.00",
      discount_price: "$52.00",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 5,
      image: shop_list_4,
      title: "Nunc in",
      real_price: "$26.00",
      discount_price: "$52.00",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 6,
      image: shop_list_5,
      title: "Vitae facilisis",
      real_price: "$26.00",
      discount_price: "$52.00",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 7,
      image: shop_list_6,
      title: "Curabitur lectus",
      real_price: "$26.00",
      discount_price: "$52.00",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
  ];
  return (
    <div className="container mx-auto py-10 ">
      {/* right side */}
      {Shoplist.map((product) => (
        <div
          key={product.id}
          className="flex flex-col md:flex-row bg-white shadow-md shadow-gray-100  rounded-md overflow-hidden mb-6 md:max-w-[1140px] md:h-[254px] p-6 pr-20 gap-8 "
        >
          {/* Image Section */}
          <div className="w-full md:w-1/3">
            <Image
              src={product.image}
              alt={product.title}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Content Section */}
          <div className="w-full  md:w-2/3 p-5 flex flex-col justify-between">
            {/* Product Title */}
            <div>
              <div className="flex gap-12">
                <h3 className="text-[22px] font-bold text-_lighttext2">
                  {product.title}
                </h3>
                <div className="flex gap-2 my-2">
                  <div className="w-[12px] h-[12px] bg-[#DE9034] rounded-full"></div>
                  <div className="w-[12px] h-[12px] bg-_pink rounded-full"></div>
                  <div className="w-[12px] h-[12px] bg-[#8568FF] rounded-full"></div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[16px] leading-5 font-semibold text-_lighttext2">
                  {product.real_price}
                </span>
                <span className="text-[14px] text-_pink line-through">
                  {product.discount_price}
                </span>
                <div className="flex gap-1">
                  <Image src={star} alt="Star Icon" width={12} height={12} />
                  <Image src={star} alt="Star Icon" width={12} height={12} />
                  <Image src={star} alt="Star Icon" width={12} height={12} />
                  <Image src={star} alt="Star Icon" width={12} height={12} />
                  <Image
                    src={empty_star}
                    alt="Star Icon"
                    width={12}
                    height={12}
                  />
                </div>
              </div>
              <p className="text-[#9295AA] text-[18px] mt-2 leading-[30px]">
                {product.text}
              </p>
            </div>

            {/* Action Icons */}
            <div className="flex gap-3 mt-4">
              <div className="p-2 bg-white rounded-full hover:scale-110 transition-transform cursor-pointer">
                <Image src={cart} alt="Cart Icon" width={20} height={20} />
              </div>
              <div className="p-2 bg-white rounded-full hover:scale-110 transition-transform cursor-pointer">
                <Image src={heart} alt="Heart Icon" width={20} height={20} />
              </div>
              <div className="p-2 bg-white rounded-full hover:scale-110 transition-transform cursor-pointer">
                <Image
                  src={plus_search}
                  alt="Zoom Icon"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopListDisplay;

// import shop_list_0 from "@/public/images/shop_list/shop_list_0.png";
// import shop_list_1 from "@/public/images/shop_list/shop_list_1.png";
// import shop_list_2 from "@/public/images/shop_list/shop_list_2.png";
// import shop_list_3 from "@/public/images/shop_list/shop_list_3.png";
// import shop_list_4 from "@/public/images/shop_list/shop_list_4.png";
// import shop_list_5 from "@/public/images/shop_list/shop_list_5.png";
// import shop_list_6 from "@/public/images/shop_list/shop_list_6.png";
// //import star from "@/public/icons/star-filled.png";
// //import empty_star from "@/public/icons/star-empty.png";
// import heart from "@/public/icons/blue_heart.png";
// import plus_search from "@/public/icons/blue_search-plus.png";
// import cart from "@/public/icons/blue_cart.png";
// import Image from "next/image";

// const ShopListDisplay = () => {
//   const Shoplist = [
//     {
//       id: 1,
//       image: shop_list_0,
//       title: "Accumsan tincidunt",
//       real_price: "$26.00",
//       discount_price: "$52.00",
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
//     },
//     {
//       id: 2,
//       image: shop_list_1,
//       title: "In nulla",
//       real_price: "$26.00",
//       discount_price: "$52.00",
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
//     },
//     {
//       id: 3,
//       image: shop_list_2,
//       title: "Vel sem",
//       real_price: "$26.00",
//       discount_price: "$52.00",
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
//     },
//     {
//       id: 4,
//       image: shop_list_3,
//       title: "Porttitor cum",
//       real_price: "$26.00",
//       discount_price: "$52.00",
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
//     },
//     {
//       id: 5,
//       image: shop_list_4,
//       title: "Nunc in",
//       real_price: "$26.00",
//       discount_price: "$52.00",
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
//     },
//     {
//       id: 6,
//       image: shop_list_5,
//       title: "Vitae facilisis",
//       real_price: "$26.00",
//       discount_price: "$52.00",
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
//     },
//     {
//       id: 7,
//       image: shop_list_6,
//       title: "Curabitur lectus",
//       real_price: "$26.00",
//       discount_price: "$52.00",
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
//     },
//   ];
//   return (
//     <div>
//       <div className="container ">
//         {Shoplist.map((product) => (
//           <div key={product.id} className="group flex flex-col justify-center">
//             {/* Product Card */}
//             <div className="bg-white rounded-lg overflow-hidden transition-shadow w-full max-w-[270px] h-[363px]">
//               {/* Product Image */}
//               <div className="relative w-full h-[269px] flex justify-center items-center bg-[#F7F7F7] group-hover:bg-[#EBF4F3]">
//                 <Image
//                   src={product.image}
//                   alt={product.title}
//                   width={150}
//                   height={150}
//                   className=""
//                 />

//                 {/* Overlay Icons */}
//                 <div className="hidden absolute top-[60%] left-3 group-hover:flex flex-col">
//                   {/* Cart Icon */}
//                   <Image
//                     src={cart}
//                     alt="Cart Icon"
//                     width={18}
//                     height={18}
//                     className="cursor-pointer hover:bg-white rounded-full p-[4px] w-[25px] h-[25px] hover:scale-110 transition-transform"
//                   />

//                   {/* Heart Icon */}
//                   <Image
//                     src={heart}
//                     alt="Heart Icon"
//                     width={16}
//                     height={16}
//                     className="cursor-pointer hover:bg-white rounded-full p-[4px] w-[25px] h-[25px] my-3 hover:scale-110 transition-transform"
//                   />

//                   {/* Plus Search Icon */}
//                   <Image
//                     src={plus_search}
//                     alt="Plus Search Icon"
//                     width={19}
//                     height={19}
//                     className="cursor-pointer hover:bg-white rounded-full p-[4px] w-[25px] h-[25px] hover:scale-110 transition-transform"
//                   />
//                 </div>
//               </div>

//               {/* Product Details */}
//               <div className="p-4">
//                 <div className="flex flex-col items-center">
//                   {/* Product Title */}
//                   <h3 className="text-[16px] text-nowrap leading-4 text-_lighttext font-bold">
//                     {product.title}
//                   </h3>
//                   <div className="flex gap-1 my-2">
//                     <div className="w-[10px] h-[10px] bg-[#DE9034] rounded-full" />
//                     <div className="w-[10px] h-[10px] bg-_pink rounded-full" />
//                     <div className="w-[10px] h-[10px] bg-[#8568FF] rounded-full" />
//                   </div>

//                   {/* Product Prices */}
//                   <div className="text-right flex items-center gap-1">
//                     <span className="text-[16px] font-normal leading-4 text-_lighttext">
//                       {product.discount_price}
//                     </span>
//                     <span className="text-[14px] text-_pink line-through">
//                       {product.real_price}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShopListDisplay;
