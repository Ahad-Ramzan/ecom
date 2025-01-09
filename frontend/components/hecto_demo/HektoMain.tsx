import { lato } from "@/public/fonts/fonts";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
const HektoMain = () => {
  return (
    <div className="container">
      <div>
        {/* Heading bar */}
        <div>
          <h3 className="text-[24px] leading-7 font-semibold text-_darktext">
            Hekto Demo
          </h3>
          <p className={`${lato.className} text-[14.4px] text-_darktext`}>
            Cart/ Information/ Shipping/ Payment
          </p>
        </div>
        <div className="flex">
          {/* Left Section */}
          <LeftSection />

          {/* Right Section */}

          <RightSection />
        </div>
      </div>
    </div>
  );
};

export default HektoMain;
