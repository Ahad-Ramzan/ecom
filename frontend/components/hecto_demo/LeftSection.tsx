import Button from "../Button";
import { lato } from "@/public/fonts/fonts";

const LeftSection = () => {
  return (
    <div className="bg-[#F8F8FD] p-6 py-14 rounded-md text-white">
      {/* Contact Information */}
      <div className="mb-20">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-[18px] font-semibold leading-5 text-_darktext">
            Contact Information
          </h4>
          <p className={`${lato.className} text-[14px] text-_subtext2`}>
            Already have an account?
            <span className=" cursor-pointer"> Log in</span>
          </p>
        </div>
        <input
          type="email"
          placeholder="Email or mobile phone number"
          className={`${lato.className} w-full bg-transparent border-b-[2px] border-[#BFC6E0] text-_darktext placeholder:text-_subtext2 py-2 mb-6 text-[14px] focus:outline-none`}
        />
        <div className="flex items-center gap-2 text-[14px] text-_subtext2">
          <input
            type="checkbox"
            id="updates"
            className="accent-_green text-white"
          />
          <label htmlFor="updates" className="cursor-pointer">
            Keep me up to date on news and exclusive offers
          </label>
        </div>
      </div>

      {/* Shipping Address */}
      <div>
        <h4 className="text-[18px] leading-5 font-semibold text-_darktext mb-8">
          Contact Information
        </h4>
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="First name (optional)"
            className={`${lato.className} w-full bg-transparent border-b-[2px] border-[#BFC6E0] text-_darktext placeholder:text-_subtext2 py-2 mb-3 text-[14px] focus:outline-none`}
          />
          <input
            type="text"
            placeholder="Last name"
            className={`${lato.className} w-full bg-transparent border-b-[2px] border-[#BFC6E0] text-_darktext placeholder:text-_subtext2 py-3 mb-4 text-[14px] focus:outline-none`}
          />
        </div>
        <input
          type="text"
          placeholder="Address"
          className={`${lato.className} w-full bg-transparent border-b-[2px] border-[#BFC6E0] text-_darktext placeholder:text-_subtext2 py-2 mb-3 text-[14px] focus:outline-none`}
        />
        <input
          type="text"
          placeholder="Apartment, suite, etc. (optional)"
          className={`${lato.className} w-full bg-transparent border-b-[2px] border-[#BFC6E0] text-_darktext placeholder:text-_subtext2 py-2 mb-3 text-[14px] focus:outline-none`}
        />
        <input
          type="text"
          placeholder="City"
          className={`${lato.className} w-full bg-transparent border-b-[2px] border-[#BFC6E0] text-_darktext placeholder:text-_subtext2 py-2 mb-3 text-[14px] focus:outline-none`}
        />
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Country"
            className={`${lato.className} w-full bg-transparent border-b-[2px] border-[#BFC6E0] text-_darktext placeholder:text-_subtext2 py-2 mb-6 text-[14px] focus:outline-none`}
          />
          <input
            type="text"
            placeholder="Postal Code"
            className={`${lato.className} w-full bg-transparent border-b-[2px] border-[#BFC6E0] text-_darktext placeholder:text-_subtext2 py-2 mb-6 text-[14px] focus:outline-none`}
          />
        </div>
      </div>

      {/* Button */}
      <div className="mt-6">
        <Button className="">Continue Shipping</Button>
      </div>
    </div>
  );
};

export default LeftSection;
