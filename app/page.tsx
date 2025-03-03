import Discount_Item from "@/components/home/Discount_Item";
import Latest_blog from "@/components/home/Latest_blog";
import LatestProductComponent from "@/components/home/Latest_product";
import Latest_update from "@/components/home/Latest_update";
import Shopex_offer from "@/components/home/Shopex_offer";
import Slider from "@/components/home/Slider";
import UniqueFeatures from "@/components/home/UniqueFeatures";
const page = () => {
  return (
    <>
      <div className="hidden md:block">
        <Slider />
      </div>
      <LatestProductComponent />
      <Shopex_offer />
      <UniqueFeatures />
      <Discount_Item />
      <Latest_update />
      <Latest_blog />
    </>
  );
};

export default page;
