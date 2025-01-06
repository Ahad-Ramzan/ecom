import Discount_Item from "@/components/home/Discount_Item";
import Latest_blog from "@/components/home/Latest_blog";
import Latest_update from "@/components/home/Latest_update";
import Shopex_offer from "@/components/home/Shopex_offer";
import Slider from "@/components/home/Slider";
import UniqueFeatures from "@/components/home/UniqueFeatures";
const page = () => {
  return (
    <>
      <Latest_blog />
      <Latest_update />
      <Discount_Item />
      <UniqueFeatures />
      <Slider />

      <Shopex_offer />
    </>
  );
};

export default page;
