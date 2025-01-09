import { lato } from "@/public/fonts/fonts";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
const HektoMain = () => {
  return (
    <div className="container my-20">
      {/* Heading bar */}
      <div>
        <h3 className="text-[24px] leading-7 font-semibold text-_darktext mb-4">
          Hekto Demo
        </h3>
        <p className={`${lato.className} text-[14.4px] text-_darktext`}>
          Cart/ Information/ Shipping/ Payment
        </p>
      </div>
      <div className="flex gap-10 mt-5">
        {/* Left Section */}
        <LeftSection />

        {/* Right Section */}

        <RightSection />
      </div>
    </div>
  );
};

export default HektoMain;
