import Link from "next/link";
//import dropdown from "@/public/icons/dropdown.png";
import { lato } from "@/public/fonts/fonts";
import search_icon from "@/public/icons/search_icon.png";
import Image from "next/image";

const Navbar = () => {
  const Navlinks = ["Home", "Pages", "Products", "Blog", "Shop", "Contact"];
  return (
    <div className="bg-white mt-2">
      <div className="container flex justify-between items-center h-10">
        {/* Left: Logo */}
        <div className="flex items-center">
          <span className={" text-[34px] font-bold text-_darkblue mr-5"}>
            Hekto
          </span>
        </div>

        {/* Middle: Navbar Links */}
        <div>
          <ul className="flex space-x-4 ">
            {Navlinks.map((link) => (
              <li key={link}>
                <Link
                  href="#"
                  className={`${lato.className} text-_darkblue hover:text-_pink font- text-base leading-5`}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Right: Search Bar */}
        <div className="flex items-center h-10  rounded-sm overflow-hidden">
          <input
            type="text"
            className="pl-2 w-50 h-10 border-r-0 border-[1.5px] text-gray-600 focus:outline-none"
          />
          <button className="bg-_pink w-12 h-full flex items-center justify-center">
            <Image src={search_icon} alt="Search Icon" width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
