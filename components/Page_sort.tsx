import { lato } from "@/public/fonts/fonts";
import List from "@/public/icons/fa_solid_list.png";
import Grid from "@/public/icons/grid_view_solid.png";
import Image from "next/image";

const Page_sort = () => {
  return (
    <div className="container flex flex-wrap gap-4 justify-between my-14">
      {/* Left Side */}
      <div className="flex flex-col w-full md:w-auto">
        <h5 className="text-[22px] leading-6 text-_lighttext font-semibold">
          Ecommerce Acceories & Fashion item
        </h5>
        <p className={`${lato.className} text-[12px] leading-4 text-_subtext`}>
          About 9,620 results (0.62 seconds)
        </p>
      </div>

      {/* Right Side */}
      <div className="flex flex-wrap gap-4 w-full md:w-auto justify-between md:justify-end">
        {/* Per Page */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <p
            className={`${lato.className} text-[16px] leading-5 text-_saleTage`}
          >
            Per Page:
          </p>
          <input
            type="text"
            className="w-[55px] h-[25px] border text-sm sm:text-base"
          />
        </div>

        {/* Sort By */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <p
            className={`${lato.className} text-[16px] leading-5 text-_saleTage`}
          >
            Sort By:
          </p>
          <select
            id="items"
            className="w-[96px] h-[28px] border text-_saleTage text-sm sm:text-base"
          >
            <option value=""></option>
            <option value="id">By Id</option>
            <option value="name">By name</option>
          </select>
        </div>

        {/* View */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <p
            className={`${lato.className} text-[16px] leading-5 text-_saleTage flex items-center gap-1`}
          >
            View:
            <span>
              <Image src={Grid} alt="grid icon" width={14} height={14} />
            </span>
            <span>
              <Image src={List} alt="list icon" width={14} height={14} />
            </span>
          </p>
          <input
            type="text"
            className="w-full sm:w-[162px] h-[30px] border text-sm sm:text-base"
          />
        </div>
      </div>
    </div>
  );
};

export default Page_sort;
