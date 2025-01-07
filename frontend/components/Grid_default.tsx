import { lato } from "@/public/fonts/fonts";

type Textprop = {
  text: string;
};

const Grid_default = ({ text }: Textprop) => {
  return (
    <div className="w-full h-[286px] bg-[#f6f5ff] flex  items-center">
      <div className=" container">
        <h3 className="text-[36px] leading-[42px] text-[#101750] font-semibold">
          {text}
        </h3>
        <p
          className={`${lato.className} text-[16px] font-medium leading-5 text-black`}
        >
          Home . Pages . <span className="text-_pink ml-1">{text}</span>
        </p>
      </div>
    </div>
  );
};

export default Grid_default;
