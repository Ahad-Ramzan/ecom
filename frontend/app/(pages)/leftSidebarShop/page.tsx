import Grid_default from "@/components/Grid_default";
import Page_sort from "@/components/Page_sort";
import Shop_left_sidebar from "@/components/Left_shop_sidebar/Shop_left_sidebar";
import Test from "@/components/Test";
import React from "react";

const page = () => {
  return (
    <div>
      <Grid_default text={"Shop Left Sidebar"} />
      <Page_sort />
      <div className="flex gap-3">
        <Test />
        <Shop_left_sidebar />
      </div>
    </div>
  );
};

export default page;
