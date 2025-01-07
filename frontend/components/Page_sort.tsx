import { lato } from "@/public/fonts/fonts";
import List from "@/public/icons/fa_solid_list.png";
import Grid from "@/public/icons/grid_view_solid.png";
import Image from "next/image";
const Page_sort = () => {
  return (
    <div className="container flex gap-4 justify-between my-14 ">
      <div className="flex flex-col">
        <h5 className="text-[22px] leading-6 text-_lighttext font-semibold">
          Ecommerce Acceories & Fashion item
        </h5>
        <p className={`${lato.className} text-[12px] leading-4 text-_subtext`}>
          About 9,620 results (0.62 seconds)
        </p>
      </div>
      {/* Right side */}
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <p
            className={`${lato.className} text-[16px] leading-5 text-_saleTage`}
          >
            Per Page:
          </p>
          <input type="text" className="w-[55px] h-[25px] border" />
        </div>
        <div className="flex items-center gap-2">
          <p
            className={`${lato.className} text-[16px] leading-5 text-_saleTage`}
          >
            Sort By:
          </p>
          {/* sort */}
          {/* <input type="text" className="w-[96px] h-[28px] border" /> */}
          <select
            id="items"
            className="w-[96px] h-[28px] border text-_saleTage"
          >
            <option value=""></option>
            <option value="id">By Id</option>
            <option value="name">By name</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <p
            className={`${lato.className} text-[16px] leading-5 text-_saleTage flex items-center gap-1`}
          >
            View:
            <span>
              <Image src={Grid} alt="grid icon " width={14} height={14} />
            </span>
            <span>
              <Image src={List} alt="list icon" width={14} height={14} />
            </span>
          </p>
          <input type="text" className="w-[162px] h-[30px] border" />
        </div>
      </div>
    </div>
  );
};

export default Page_sort;
