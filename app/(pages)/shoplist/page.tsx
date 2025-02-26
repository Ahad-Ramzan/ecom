import Grid_default from "@/components/Grid_default";
import Page_sort from "@/components/Page_sort";
import ShopListDisplay from "@/components/shop_list/ShopListDisplay";
import React from "react";

const page = () => {
  return (
    <div>
      <Grid_default text={"Shop List"} />
      <Page_sort />
      <ShopListDisplay />
    </div>
  );
};

export default page;
