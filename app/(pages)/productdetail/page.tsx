import Grid_default from "@/components/Grid_default";
import Item_detail from "@/components/Item_details/Item_detail";
import ProductDetailsTab from "@/components/Item_details/ProductDetailsTab";
import RelatedProducts from "@/components/Item_details/RelatedProducts";
import React from "react";

const page = () => {
  return (
    <div>
      <Grid_default text={"Product Details"} />
      <Item_detail />
      <ProductDetailsTab />
      <RelatedProducts />
    </div>
  );
};

export default page;
