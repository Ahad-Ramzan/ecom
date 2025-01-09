import Button from "../Button";
import { lato } from "@/public/fonts/fonts";
const CartTotals = () => {
  const subtotal = 219.0; // Example subtotal
  const total = 325.0; // Example total

  return (
    <div
      className={`${lato.className} flex flex-col justify-center items-center `}
    >
      <h2 className="text-[20px] font-bold text-_darkblue mb-6 ">
        Cart Totals
      </h2>
      <div className="bg-[#F4F4FC] p-6 rounded-sm  w-full max-w-[370px] mx-auto">
        {/* Subtotals */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <span className="text-[18px] leading-[21px] text-_darkblue font-semibold">
            Subtotals:
          </span>
          <span className="text-[16px] leading-5 text-_lighttext font-normal">
            £{subtotal.toFixed(2)}
          </span>
        </div>

        {/* Totals */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <span className="text-[18px] leading-[21px] text-_darkblue font-semibold">
            Totals:
          </span>
          <span className="text-[16px] leading-5 text-_lighttext font-normal">
            £{total.toFixed(2)}
          </span>
        </div>

        {/* Shipping Info */}
        <p className="text-[12px] leading-4 text-[#8A91AB] flex items-center mb-6">
          <span className="bg-_green text-[8px] text-white px-[4px] mr-2 rounded-lg">
            ✔
          </span>
          Shipping & taxes calculated at checkout
        </p>

        {/* Checkout Button */}
        <Button color={"bg-_green"} className="w-full text-[14px] font-bold ">
          Proceed To Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartTotals;
