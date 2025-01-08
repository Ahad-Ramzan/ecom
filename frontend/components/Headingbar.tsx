"use client";
import Image from "next/image";
import React, { useState } from "react";

// Icon imports
import dropdownIcon from "@/public/icons/dropdown.png";
import userIcon from "@/public/icons/carbon_user.png";
import cartIcon from "@/public/icons/cart.png";
import heartIcon from "@/public/icons/heart.png";
import mailIcon from "@/public/icons/mail_box.png";
import phoneIcon from "@/public/icons/phone_call.png";

const Headingbar = () => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);

  // Toggle dropdown functions
  const toggleLanguageDropdown = () =>
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  const toggleCurrencyDropdown = () =>
    setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen);

  // Dropdown options
  const languages = ["English", "Spanish", "French"];
  const currencies = ["USD", "EUR", "GBP"];

  return (
    <div className="bg-_violet">
      <div className="container text-white h-11 flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <Image
              src={mailIcon}
              alt="Mail Icon"
              width={16}
              height={16}
              className="mr-2 "
            />
            <span className="font-semibold">ahadramzan584@gmail.com</span>
          </div>
          <div className="flex items-center">
            <Image
              src={phoneIcon}
              alt="Phone Icon"
              width={16}
              height={16}
              className="mr-2 "
            />
            <span className="font-semibold">(12345) 67890</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={toggleLanguageDropdown}
              className="flex items-center focus:outline-none"
            >
              <span className="mr-2">English</span>
              <Image
                src={dropdownIcon}
                alt="Dropdown Icon"
                width={16}
                height={16}
              />
            </button>
            {isLanguageDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg">
                <ul>
                  {languages.map((language) => (
                    <li
                      key={language}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => setIsLanguageDropdownOpen(false)}
                    >
                      {language}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Currency Dropdown */}
          <div className="relative">
            <button
              onClick={toggleCurrencyDropdown}
              className="flex items-center focus:outline-none"
            >
              <span className="mr-2">USD</span>
              <Image
                src={dropdownIcon}
                alt="Dropdown Icon"
                width={16}
                height={16}
              />
            </button>
            {isCurrencyDropdownOpen && (
              <div className="absolute z-100 right-0 mt-2 w-32 bg-white text-black rounded shadow-lg">
                <ul>
                  {currencies.map((currency) => (
                    <li
                      key={currency}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => setIsCurrencyDropdownOpen(false)}
                    >
                      {currency}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Login */}
          <div className="flex items-center cursor-pointer">
            <span className="font-semibold mr-2">Login</span>
            <Image src={userIcon} alt="User Icon" width={16} height={16} />
          </div>

          {/* Wishlist */}
          <div className="flex items-center cursor-pointer">
            <span className="font-semibold mr-2">Wishlist</span>
            <Image src={heartIcon} alt="Heart Icon" width={16} height={16} />
          </div>

          {/* Cart */}
          <div className="cursor-pointer">
            <Image
              src={cartIcon}
              alt="Cart Icon"
              width={24}
              height={24}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headingbar;
