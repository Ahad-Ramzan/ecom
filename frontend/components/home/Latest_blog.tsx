import Image from "next/image";
import frame1 from "@/public/images/latest_blog/Frame_1.png";
import frame2 from "@/public/images/latest_blog/Frame_2.png";
import frame3 from "@/public/images/latest_blog/Frame_3.png";
import calender from "@/public/icons/calendar.png";
import pen from "@/public/icons/pen.png";
import { lato } from "@/public/fonts/fonts";

// Define the type for the card data
type Card = {
  name: string;
  image: HTMLImageElement;
  pen_icon: HTMLImageElement;
  cal_icon: HTMLImageElement;

  date: string;
  title: string;
  text: string;
  id: number;
};

const Latest_blog = () => {
  const Cards: Card[] = [
    {
      id: 1,
      image: frame1,
      pen_icon: pen,
      name: "Ahad Ramzan",
      cal_icon: calender,
      date: "6 January 2025",
      title: "Top essential Trends of 2025",
      text: "More off this less hello samlande lied much over tightly circa horse taped mightly",
    },
    {
      id: 2,
      image: frame2,
      pen_icon: pen,
      name: "Mudasir Awan",
      cal_icon: calender,
      date: "6 January 2025",
      title: "Top essential Trends of 2025",
      text: "More off this less hello samlande lied much over tightly circa horse taped mightly",
    },
    {
      id: 3,
      image: frame3,
      pen_icon: pen,
      name: "Waqar Javed",
      cal_icon: calender,
      date: "6 January 2025",
      title: "Top essential Trends of 2025",
      text: "More off this less hello samlande lied much over tightly circa horse taped mightly",
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-[42px] font-bold text-center text-_lighttext my-6 leading-10">
        Latest Blog
      </h1>

      <div className="container flex gap-8 flex-wrap justify-center">
        {Cards.map((card) => (
          <div
            key={card.id}
            className="w-[370px] bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            <Image
              src={card.image}
              alt={card.title}
              className="w-full h-[200px] object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center">
                  <p className="text-[14px] leading-4 text-_lighttext flex items-center gap-2">
                    <Image
                      src={card.cal_icon}
                      alt="calendar"
                      className="w-4 h-4"
                    />
                    {card.date}
                  </p>
                  <p className="ml-[24px] text-sm text-gray-500 flex items-center gap-2">
                    <Image
                      src={card.pen_icon}
                      alt="author"
                      className="w-4 h-4"
                    />
                    {card.name}
                  </p>
                </div>
                <h3 className="text-[18px] font-bold leading-5 text-_lighttext my-5 hover:text-_pink">
                  {card.title}
                </h3>

                <p
                  className={`${lato.className} text-[16px] leading-8 text-_subtext`}
                >
                  {card.text}
                </p>
                <button
                  className={`${lato.className} text-[16px] leading-8 text-_lighttext hover:text-_pink transition-colors underline cursor-pointer mt-5`}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest_blog;
