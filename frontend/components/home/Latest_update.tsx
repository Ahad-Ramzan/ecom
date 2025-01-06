import BG from "@/public/images/latest_update_bg.png";
import Button from "../Button";

// Functional component with no props
const LatestUpdate: React.FC = () => {
  return (
    <div
      className="w-full h-[462px] bg-no-repeat bg-cover my-4"
      style={{ backgroundImage: `url(${BG.src})` }}
    >
      <div className="flex items-center justify-center h-full text-center">
        <div>
          <h1 className="text-[35px] font-semibold text-_lighttext py-6 leading-10 max-w-[574px]">
            Get Latest Update By Subscribe Our Newsletter
          </h1>
          <Button>Shop Now</Button>
        </div>
      </div>
    </div>
  );
};

export default LatestUpdate;
