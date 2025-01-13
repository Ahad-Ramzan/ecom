"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import dropdown from "@/public/icons/pink_dropdown.png";
import search_icon from "@/public/icons/search_icon.png";
import { lato } from "@/public/fonts/fonts";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", src: "#" },
    { name: "Pages", src: "#" },
    { name: "Products", src: "/griddefault" },
    { name: "Blogs", src: "/Blogs" },
    { name: "Shop", src: "/shoplist" },
    { name: "Contact", src: "/Contactus" },
  ];

  const homeDropdown = ["Sub Home 1", "Sub Home 2", "Sub Home 3"];
  const pagesDropdown = [
    { name: "Blogs", src: "/Blogs" },
    { name: "FAQ", src: "/FAQ" },
    { name: "Grid Default", src: "/griddefault" },
  ];

  return (
    <header className="bg-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-[24px] md:text-[34px] font-bold text-_darkblue"
        >
          Hekto
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group flex items-center">
                <Link
                  href={link.src}
                  className={`${lato.className} text-_darkblue group-hover:text-_pink font-medium text-base`}
                >
                  {link.name}
                </Link>
                {["Home", "Pages"].includes(link.name) && (
                  <Image
                    src={dropdown}
                    alt="Dropdown Icon"
                    className="opacity-0 group-hover:opacity-100 w-[12px] h-[10px] ml-2 mt-1"
                  />
                )}

                {/* Dropdown Menu */}
                {link.name === "Home" && (
                  <div className="absolute left-0 top-4 mt-2 w-40 hidden group-hover:block bg-white shadow-md rounded-md">
                    <ul>
                      {homeDropdown.map((sublink) => (
                        <li key={sublink}>
                          <Link
                            href="#"
                            className={`${lato.className} block px-4 py-2 text-_darkblue hover:text-_pink hover:bg-gray-100`}
                          >
                            {sublink}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {link.name === "Pages" && (
                  <div className="absolute left-0 top-4 mt-2 w-40 hidden group-hover:block bg-white shadow-md rounded-md">
                    <ul>
                      {pagesDropdown.map((sublink) => (
                        <li key={sublink.name}>
                          <Link
                            href={sublink.src}
                            className={`${lato.className} block px-4 py-2 text-_darkblue hover:text-_pink hover:bg-gray-100`}
                          >
                            {sublink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="pl-2 w-40 md:w-60 h-10 border-[1.5px] border-r-0 text-gray-600 focus:outline-none"
          />
          <button
            aria-label="Search"
            className="bg-_pink w-12 h-10 flex items-center justify-center"
          >
            <Image src={search_icon} alt="Search Icon" width={24} height={24} />
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-2xl text-_darkblue focus:outline-none"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <nav
            role="navigation"
            className="flex flex-col items-center space-y-4 py-4"
          >
            {navLinks.map((link) => (
              <div key={link.name} className="w-full text-center">
                <Link
                  href={link.src}
                  className={`${lato.className} text-_darkblue hover:text-_pink font-medium text-base`}
                >
                  {link.name}
                </Link>
                {link.name === "Home" && (
                  <div className="mt-2 w-full bg-gray-100">
                    <ul>
                      {homeDropdown.map((sublink) => (
                        <li key={sublink}>
                          <Link
                            href="#"
                            className={`${lato.className} block px-4 py-2 text-_darkblue hover:text-_pink`}
                          >
                            {sublink}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Search Bar */}
          <div className="flex items-center px-4 py-2">
            <input
              type="text"
              placeholder="Search"
              className="pl-2 w-full h-10 border-[1.5px] text-gray-600 focus:outline-none"
            />
            <button
              aria-label="Search"
              className="bg-_pink w-12 h-10 flex items-center justify-center"
            >
              <Image
                src={search_icon}
                alt="Search Icon"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
