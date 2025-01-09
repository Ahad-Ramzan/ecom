import Grid_default from "@/components/Grid_default";
import Page_sort from "@/components/Page_sort";
import Shop_left_sidebar from "@/components/Left_shop_sidebar/Shop_left_sidebar";
import SidebarFilter from "@/components/Left_shop_sidebar/Filter_bar";
import React from "react";

const page = () => {
  return (
    <div>
      <Grid_default text={"Shop Left Sidebar"} />
      <Page_sort />
      <div className="flex gap-3">
        <SidebarFilter />
        <Shop_left_sidebar />
      </div>
    </div>
  );
};

export default page;
