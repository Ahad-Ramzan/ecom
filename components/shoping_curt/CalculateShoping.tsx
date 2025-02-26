"use client";
import { useState } from "react";
import Button from "../Button";

const CalculateShopping = () => {
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-[20px] font-bold text-_darkblue mb-6 ">
        Calculate Shopping
      </h2>
      <div className="bg-[#F4F4FC] p-6 rounded-sm  w-full max-w-[370px] mx-auto">
        {/* Country Input */}
        <input
          type="text"
          placeholder="Bangladesh"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full text-[14px] border-b border-[#C7CEE4] bg-transparent text-[#C5CBE3] py-2 mb-4 focus:outline-none"
        />

        {/* Address Input */}
        <input
          type="text"
          placeholder="Mirpur Dhaka - 1200"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full text-[14px] border-b border-[#C7CEE4] bg-transparent text-[#C7CBE3] py-2 mb-4 focus:outline-none"
        />

        {/* Postal Code Input */}
        <input
          type="text"
          placeholder="Postal Code"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          className="w-full text-[14px] border-b border-[#C7CEE4] bg-transparent text-[#C7CBE3] py-2 mb-4 focus:outline-none"
        />

        {/* Calculate Shipping Button */}
        <Button className="text-[16px]">Calculate Shiping</Button>
      </div>
    </div>
  );
};

export default CalculateShopping;
