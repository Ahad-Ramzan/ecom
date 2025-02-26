import Clock from "@/public/images/order_complete/clock.png";
import Checklist from "@/public/images/order_complete/checklist.png";
import Vector from "@/public/icons/Vector_pink.png";
import Image from "next/image";
import Button from "../Button";
import { lato } from "@/public/fonts/fonts";
const OrderComplete = () => {
  return (
    <div className="container px-[10%]">
      <div className="px-20 flex justify-center my-24 relative border-l-2 border-dotted border-[#D2D1D1] border-b-2">
        <div
          className="flex flex-col gap-5 items-center max-w-[625px] max-h-[326px] px-6 my-10
        "
        >
          <Image
            src={Vector}
            alt="vector"
            width={45}
            height={35}
            className="bg-white  rounded-full p-1 py-2 shadow-[0_0_20px_5px_#d9dee3]"
          />
          <h2 className="text-[34px] leading-10 font-semibold text-_darktext">
            Your Order is Completed
          </h2>
          <p
            className={`${lato.className} text-[16px] leading-7 font-medium text-_subtext items-center`}
          >
            Thank you for your order! Your order is being processed and will be
            completed within 3-6 hours. You will receive an email confirmation
            when your order is completed.
          </p>
          <Button>Continue Shopping</Button>
        </div>
        <Image
          src={Clock}
          alt="clock"
          width={94}
          height={94}
          className="absolute top-0 -left-12"
        />
        <Image
          src={Checklist}
          alt="clock"
          width={94}
          height={94}
          className="absolute -right-8 -bottom-12"
        />
      </div>
    </div>
  );
};

export default OrderComplete;
