import item_1 from "@/public/images/product_details/related_product/item_1.png";
import item_2 from "@/public/images/product_details/related_product/item_2.png";
import item_3 from "@/public/images/product_details/related_product/item_3.png";
import item_4 from "@/public/images/product_details/related_product/item_4.png";
import { StaticImageData } from "next/image";

// Define the type for the product items
type ProductItem = {
  image: StaticImageData;
  title: string;
  stars: number;
  price: string;
};

const RelatedProducts = () => {
  // Array of product items
  const items: ProductItem[] = [
    {
      image: item_1,
      title: "Men's Fashion Wear",
      stars: 4,
      price: "$43.00",
    },
    {
      image: item_2,
      title: "Women's Fashion",
      stars: 5,
      price: "$67.00",
    },
    {
      image: item_3,
      title: "Wolx Dummy Fashion",
      stars: 4,
      price: "$67.00",
    },
    {
      image: item_4,
      title: "Top Wall Decoration",
      stars: 3,
      price: "$51.00",
    },
  ];

  return (
    <div className="container my-24">
      {/* Section Heading */}
      <h2 className="text-[36px] leading-10 font-bold text-_darkblue mb-6">
        Related Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <article key={index} className="rounded-sm">
            {/* Product Image */}
            <div
              className="min-h-[340px] bg-cover"
              style={{ backgroundImage: `url(${item.image.src})` }}
              role="img"
              aria-label={item.title}
            />

            {/* Product Details */}
            <div className="p-4">
              <div className="flex justify-between items-center">
                {/* Product Title */}
                <h3 className="text-[16px] font-semibold text-_lighttext">
                  {item.title}
                </h3>

                {/* Star Ratings */}
                <label
                  htmlFor={`rating-${index}`}
                  className="flex items-center text-sm text-yellow-500"
                >
                  {"★".repeat(item.stars)}
                  {"☆".repeat(5 - item.stars)}
                </label>
              </div>

              {/* Product Price */}
              <p className="text-[16px] font-semibold text-_lighttext">
                {item.price}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
