import Grid_default from "@/components/Grid_default";
import Page_sort from "@/components/Page_sort";
import Grid_display from "@/components/shop_grid/Grid_display";

const page = () => {
  return (
    <div>
      <Grid_default text={"Shop Grid Default"} />
      <Page_sort />
      <Grid_display />
    </div>
  );
};

export default page;
