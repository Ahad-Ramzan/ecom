//import Tick from "@/public/icons/Vector.svg";

const SidebarFilter = () => {
  const filters = {
    productBrand: [
      "Coaster Furniture",
      "Fusion Dot High Fashion",
      "Unique Furniture Restor",
      "Dream Furniture Flipping",
      "Young Repurposed",
      "Green DIY Furniture",
    ],
    discountOffer: ["20% Cashback", "5% Cashback Offer", "25% Discount Offer"],
    ratingItem: [
      { stars: 5, count: 2011 },
      { stars: 4, count: 701 },
      { stars: 3, count: 284 },
      { stars: 2, count: 25 },
    ],
    categories: [
      "Prestashop",
      "Magento",
      "Bigcommerce",
      "osCommerce",
      "3dCart",
      "Bags",
      "Accessories",
      "Jewellery",
      "Watches",
    ],
    priceFilter: [
      "$0.00 - $150.00",
      "$150.00 - $350.00",
      "$350.00 - $504.00",
      "$450.00+",
    ],
    filterByColor: [
      { color: "Blue", code: "bg-blue-500" },
      { color: "Orange", code: "bg-orange-500" },
      { color: "Brown", code: "bg-yellow-800" },
      { color: "Green", code: "bg-green-500" },
      { color: "Purple", code: "bg-purple-500" },
      { color: "Sky", code: "bg-sky-500" },
    ],
  };

  return (
    <div className="w-1/4 bg-white p-4 rounded-lg ">
      {/* Product Brand */}
      <div className="mb-6">
        <h3 className="text-[22px] leading-7 font-bold text-_lighttext mb-4 underline decoration-black underline-offset-4">
          Product Brand
        </h3>

        <div>
          {filters.productBrand.map((brand, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`brand-${index}`}
                className="mr-2 hidden peer"
              />
              <label
                htmlFor={`brand-${index}`}
                className="w-[18px] h-[18px] flex items-center justify-center peer-checked:bg-[#603EFF] bg-[#E5E0FC] peer-checked:text-white text-[#603EFF] "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 16.5l-4.5-4.5L5.5 11l3.5 3.5L18.5 5.5l1.5 1.5L9 16.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <label
                htmlFor={`brand-${index}`}
                className="text-[16px] text-[#7E81A2] leading-7 ml-2 cursor-pointer "
              >
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Discount Offer */}
      <div className="mb-6">
        <h3 className="text-[22px] leading-7 font-bold text-_lighttext mb-4 underline decoration-black underline-offset-4">
          Discount Offer
        </h3>
        {filters.discountOffer.map((offer, index) => (
          <div key={index} className="flex items-center mb-2">
            <input type="checkbox" id={`offer-${index}`} className="mr-2" />
            <label
              htmlFor={`offer-${index}`}
              className="text-[16px] text-[#7E81A2] leading-7"
            >
              {offer}
            </label>
          </div>
        ))}
      </div>

      {/* Rating Item */}
      <div className="mb-6">
        <h3 className="text-[22px] leading-7 font-bold text-_lighttext mb-4 underline decoration-black underline-offset-8">
          Rating Item
        </h3>
        {filters.ratingItem.map((rating, index) => (
          <div key={index} className="flex items-center mb-2">
            <input type="checkbox" id={`rating-${index}`} className="mr-2" />
            <label
              htmlFor={`rating-${index}`}
              className="flex items-center text-sm text-yellow-500"
            >
              {"★".repeat(rating.stars)}
              {"☆".repeat(5 - rating.stars)}
              <span className="ml-2">({rating.count})</span>
            </label>
          </div>
        ))}
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="text-[22px] leading-7 font-bold text-_lighttext mb-4 underline decoration-black underline-offset-8">
          Categories
        </h3>
        {filters.categories.map((category, index) => (
          <div key={index} className="flex items-center mb-2">
            <input type="checkbox" id={`category-${index}`} className="mr-2" />
            <label
              htmlFor={`category-${index}`}
              className="text-[16px] text-[#7E81A2] leading-7"
            >
              {category}
            </label>
          </div>
        ))}
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <h3 className="text-[22px] leading-7 font-bold text-_lighttext mb-4 underline decoration-black underline-offset-4">
          Price Filter
        </h3>
        {filters.priceFilter.map((price, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              name="price"
              id={`price-${index}`}
              className="mr-2 h-[16px] w-[16px] bg-[#FFDBF1] rounded-sm "
            />
            <label
              htmlFor={`price-${index}`}
              className="text-[16px] text-[#7E81A2] leading-7"
            >
              {price}
            </label>
          </div>
        ))}
        <input
          type="text"
          placeholder="Min - Max"
          className="border rounded-md w-full px-3 py-2 text-sm mt-2"
        />
      </div>

      {/* Filter By Color */}
      <div className="mb-6">
        <h3 className="text-[22px] leading-7 font-bold text-_lighttext mb-4 underline decoration-black underline-offset-8">
          Filter By Color
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-2">
          {filters.filterByColor.map((color, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`w-[14px] h-[14px] ${color.code} rounded-full mr-2 cursor-pointer`}
              />
              <p className="text-[16px] text-[#7E81A2] leading-7">
                {color.color}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarFilter;
