"use client";
import React, { useState } from "react";
import curt_1 from "@/public/images/curt/curt_1.png";
import curt_2 from "@/public/images/curt/curt_2.png";
import curt_3 from "@/public/images/curt/curt_3.png";
import curt_4 from "@/public/images/curt/curt_4.png";
import curt_5 from "@/public/images/curt/curt_5.png";
import Image, { StaticImageData } from "next/image";
import Button from "../Button";
import CartTotals from "./CartTotals";
import CalculateShopping from "./CalculateShoping";

import { increment, decrement } from "../redux/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

type CartItem = {
  image: StaticImageData;
  title: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
};

const Curt = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const initialCurtItems: CartItem[] = [
    {
      image: curt_1,
      title: "Ut diam consequat",
      color: "Brown",
      size: "XL",
      price: 32.0,
      quantity: 3,
    },
    {
      image: curt_2,
      title: "Vel faucibus posuere",
      color: "Brown",
      size: "XL",
      price: 32.0,
      quantity: 3,
    },
    {
      image: curt_3,
      title: "Ac vitae vestibulum",
      color: "Brown",
      size: "XL",
      price: 32.0,
      quantity: 3,
    },
    {
      image: curt_4,
      title: "Elit massa diam",
      color: "Brown",
      size: "XL",
      price: 32.0,
      quantity: 3,
    },
    {
      image: curt_5,
      title: "Proin pharetra elementum",
      color: "Brown",
      size: "XL",
      price: 32.0,
      quantity: 3,
    },
  ];

  // State for CurtItems
  const [curtItems, setCurtItems] = useState<CartItem[]>(initialCurtItems);

  // Calculate total cost
  const totalCost = curtItems.reduce(
    (acc, item) => acc + item.price * count,
    0
  );

  // Handler to clear curtItems
  const handleClearCurt = () => {
    setCurtItems([]); // Empty the curtItems array
  };

  // Handler to reverse curtItems
  const handleReverseCurt = () => {
    setCurtItems((prevItems) => [...prevItems].reverse()); // Reverse the order of curtItems
  };

  // Handler to Delete curtItems
  const handleDeleteCurt = (index: number) => {
    setCurtItems((Items) => Items.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col lg:flex-row container gap-10 my-20">
      <div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left text-[20px] leading-6 text-[#1D3178]">
              <th className="p-4">Product</th>
              <th className="p-4">Price</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Total</th>
              <th className="p-4">Delete</th>
            </tr>
          </thead>
          <tbody>
            {curtItems.map((item, index) => (
              <tr key={index} className="border-b">
                {/* Product Info */}
                <td className="p-4 flex items-center gap-4">
                  <Image
                    src={item.image.src}
                    alt={item.title}
                    width={64}
                    height={64}
                    className="object-cover rounded"
                  />
                  <div>
                    <p className="font-semibold text-[14px] leading-4 text-black">
                      {item.title}
                    </p>
                    <p className="text-sm text-_subtext">Color: {item.color}</p>
                    <p className="text-sm text-_subtext">Size: {item.size}</p>
                  </div>
                </td>

                {/* Price */}
                <td className="p-4 text-_lighttext text-sm font-semibold">
                  ${item.price.toFixed(2)}
                </td>

                {/* Quantity */}
                <td className="p-4">
                  <div className="flex items-center">
                    <button
                      onClick={() => dispatch(decrement())}
                      className="px-2 py-1 text-[#BEBFC2] bg-[#E7E7EF] border rounded"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 text-[#BEBFC2] bg-[#F0EFF2]">
                      {count}
                    </span>
                    <button
                      onClick={() => dispatch(increment())}
                      className="px-2 py-1 text-[#BEBFC2] bg-[#E7E7EF] border rounded"
                    >
                      +
                    </button>
                  </div>
                </td>

                {/* Total */}
                <td className="p-4 text-_lighttext text-sm font-semibold">
                  ${(item.price * count).toFixed(2)}
                </td>

                {/* Delete */}
                <td className="p-4">
                  <button
                    onClick={() => handleDeleteCurt(index)}
                    className="px-4 py-1 text-[#BEBFC2] hover:text-white bg-[#E7E7EF] hover:bg-red-600 border rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between mt-6">
          <Button onClick={handleReverseCurt}>Update Curt</Button>
          <Button onClick={handleClearCurt}>Clear Curt</Button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-col gap-5 mt-5">
        <CartTotals subtotal={totalCost} />
        <CalculateShopping />
      </div>
    </div>
  );
};

export default Curt;
