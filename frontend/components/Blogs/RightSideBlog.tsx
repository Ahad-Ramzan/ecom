import Search from "@/public/icons/search.png";
import recent_1 from "@/public/images/blogs/recentPosts/recent_1.png";
import recent_2 from "@/public/images/blogs/recentPosts/recent_2.png";
import recent_3 from "@/public/images/blogs/recentPosts/recent_3.png";
import recent_4 from "@/public/images/blogs/recentPosts/recent_4.png";
import Image, { StaticImageData } from "next/image";
import Button from "../Button";
import facebook from "@/public/icons/facebook_white.png";
import insta from "@/public/icons/insta_white.png";
import twitter from "@/public/icons/twitter_white.png";

type CategoriesProps = {
  name: string;
  quantity: number;
};

type RecentPostsProps = {
  image: StaticImageData;
  title: string;
  date: string;
  price: string;
};
const RightSideBlog = () => {
  const Tags = ["General", "Atsanil", "Bibsas", "Nulla"];
  const Categories: CategoriesProps[] = [
    {
      name: "Hobies",
      quantity: 5,
    },
    {
      name: "Travel",
      quantity: 15,
    },
    {
      name: "Hobies",
      quantity: 5,
    },
    {
      name: "Travel",
      quantity: 15,
    },
    {
      name: "Hobies",
      quantity: 5,
    },
    {
      name: "Travel",
      quantity: 15,
    },
  ];
  const RecentPosts: RecentPostsProps[] = [
    {
      image: recent_1,
      title: "It is a long established fact",
      date: "Jan 10 2025",
      price: "$12.00-$15.00",
    },
    {
      image: recent_2,
      title: "It is a long established fact",
      date: "Jan 10 2025",
      price: "$12.00-$15.00",
    },
    {
      image: recent_3,
      title: "It is a long established fact",
      date: "Jan 10 2025",
      price: "$12.00-$15.00",
    },
    {
      image: recent_4,
      title: "It is a long established fact",
      date: "Jan 10 2025",
      price: "$12.00-$15.00",
    },
  ];
  return (
    <div className="my-[60px] min-w-[300px] max-w-[400px]">
      {/* Search */}
      <div>
        <h3 className="text-[24px] leading-7 font-semibold text-_lighttext my-6">
          Search
        </h3>
        <div className="flex items-center justify-between border border-[#BDBDD8] py-2 mb-4 px-5">
          <input
            type="text"
            placeholder="Search For Posts"
            className="w-full text-[14px] outline-none mr-5 bg-transparent text-_lighttext2 placeholder:text-_subtext  "
          />
          <Image src={Search} alt="seach icon" width={20} height={20}></Image>
        </div>
      </div>

      {/* Categories */}

      <div>
        <h3 className="text-[24px] leading-7 font-semibold text-_lighttext my-6">
          Categories
        </h3>
        <div className="grid grid-cols-2 gap-4 ">
          {Categories.map((item, index) => (
            <div key={index} className="group flex items-center gap-2">
              <Button className="bg-transparent hover:bg-_pink rounded-md pl-2">
                <span className="text-[14px] text-[#3F509E] group-hover:text-white">
                  {item.name}
                </span>
                <span className="ml-1 text-[14px] text-[#3F509E] group-hover:text-white">
                  ({item.quantity})
                </span>
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Posts */}

      <div>
        <h3 className="text-[24px] leading-7 font-semibold text-_lighttext my-6">
          Categories
        </h3>
        <div className="grid grid-cols-1 gap-4 mr-5">
          {RecentPosts.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <Image
                src={item.image}
                alt="Recent Post"
                width={80}
                height={80}
              />
              <div className="flex-1">
                <h4 className="text-[14px] leading-5 font-medium text-[#3F509E] whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.title}
                </h4>
                <p className="text-[11px] leading-4 text-_subtext">
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sale Product */}

      <div>
        <h3 className="text-[24px] leading-7 font-semibold text-_lighttext my-6">
          Sale Product
        </h3>
        <div className="grid grid-cols-1 gap-4 mr-5">
          {RecentPosts.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <Image
                src={item.image}
                alt="Recent Post"
                width={80}
                height={80}
              />
              <div className="flex-1">
                <h4 className="text-[14px] leading-5 font-medium text-[#3F509E] whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.title}
                </h4>
                <p className="text-[11px] leading-4 text-_subtext">
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Offer Product */}
      <div>
        <h3 className="text-[24px] leading-7 font-semibold text-_lighttext my-6">
          Offer Product
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {RecentPosts.map((item, index) => (
            <div
              key={index}
              className="text-center flex flex-col items-center bg-white p-4 rounded-md shadow-sm"
            >
              <Image
                src={item.image}
                alt="Offer Product"
                width={150}
                height={150}
                className="rounded-md"
              />
              <h4 className="text-[14px] leading-4 font-semibold text-_lighttext mt-2">
                Duis lectus est.
              </h4>
              <p className="text-[12px] leading-4 text-_subtext mt-2">
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Follow */}

      <div>
        <h3 className="text-[24px] leading-7 font-semibold text-_lighttext my-6">
          Offer Product
        </h3>
        <div className="flex align-center gap-2 ml-7 ">
          <Image
            src={facebook}
            alt="facebook"
            width={25}
            height={25}
            className="relative w-[25px] h-[25px] bg-[#5625DF] rounded-full pr-[5px] "
          />
          <Image
            src={insta}
            alt="insta"
            width={25}
            height={25}
            className="w-[24px] h-[24px] bg-_pink rounded-full p-[3px] pr-[5px]"
          />
          <Image
            src={twitter}
            alt="twitter"
            width={16}
            height={16}
            className="w-[24px] h-[24px] bg-[#37DAF3] rounded-full p-[4px]"
          />
        </div>
      </div>

      {/* Tags */}

      <div>
        <h3 className="text-[24px] leading-7 font-semibold text-_lighttext my-6">
          Tags
        </h3>
        <div className=" grid grid-cols-2 gap-4 ">
          {Tags.map((item, index) => (
            <div key={index} className="group flex items-center gap-2">
              <button className="bg-transparent group-hover:text-_pink underline rounded-md pl-2">
                <span className="text-[16px] leading-7 text-_lighttext group-hover:text-_pink">
                  {item}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSideBlog;
