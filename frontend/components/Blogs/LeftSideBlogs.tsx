import Image from "next/image";
import frame1 from "@/public/images/blogs/blogs_1.png";
import frame2 from "@/public/images/blogs/blogs_2.png";
import frame3 from "@/public/images/blogs/blogs_3.png";

import calender from "@/public/icons/calendar.png";
import pen from "@/public/icons/pen.png";
import { lato } from "@/public/fonts/fonts";
import { StaticImageData } from "next/image";

// Define the type for the card data
type Card = {
  id: number;
  name: string;
  image: StaticImageData;
  pen_icon: StaticImageData;
  cal_icon: StaticImageData;
  date: string;
  title: string;
  text: string;
};

const LeftSideBlog = () => {
  const Cards: Card[] = [
    {
      id: 1,
      image: frame1,
      pen_icon: pen,
      name: "Surf Auction",
      cal_icon: calender,
      date: "Aug 09 2020",
      title: "Mauris at orci non vulputate diam tincidunt nec.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    },
    {
      id: 2,
      image: frame2,
      pen_icon: pen,
      name: "Surf Auction",
      cal_icon: calender,
      date: "Aug 09 2020",
      title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    },
    {
      id: 3,
      image: frame3,
      pen_icon: pen,
      name: "Surf Auction",
      cal_icon: calender,
      date: "Aug 09 2020",
      title: "Sit nam congue feugiat nisl, mauris amet nisl.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    },
  ];

  return (
    <div className="my-20">
      <div className="container mx-auto flex flex-col gap-8 max-w-[870px] ">
        {Cards.map((card) => (
          <div
            key={card.id}
            className="group flex flex-col bg-white  rounded-lg "
          >
            <Image
              src={card.image}
              alt={card.title}
              className="w-full max-h-[450px]  object-fill"
            />
            <div className="p-6">
              <div className="flex items-center gap-4 mb-3">
                <p className="  flex items-center gap-2">
                  <Image
                    src={card.pen_icon}
                    alt="author"
                    className="w-4 h-4 "
                  />
                  <div className="bg-[#FFE7F9] text-[14px] font-semibold leading-4 text-_lighttext py-1 px-8">
                    {card.name}
                  </div>
                </p>
                <p className=" flex items-center gap-2">
                  <Image
                    src={card.cal_icon}
                    alt="calendar"
                    className="w-4 h-4"
                  />
                  <div className="bg-[#FFECE2] text-[14px] leading-4 text-_lighttext font-bold py-1 px-8">
                    {card.date}
                  </div>
                </p>
              </div>
              <h3 className="text-[30px] font-bold text-_lighttext mb-3">
                {card.title}
              </h3>
              <p
                className={`${lato.className} text-[16px] leading-6 text-_subtext mb-4`}
              >
                {card.text}
              </p>
              <button
                className={`${lato.className} text-[18px] text-_lighttext font-semibold leading-5 flex items-center gap-2`}
              >
                Read More <div className="bg-_pink w-2 h-2 rounded-full" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBlog;
