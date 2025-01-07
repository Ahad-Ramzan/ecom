import Image from "next/image";
import logo_bar from "@/public/images/logo_bar.png";

const Logo_bar = () => {
  return (
    <div className="container mx-auto flex justify-center items-center">
      <Image
        src={logo_bar}
        alt="Logo Bar"
        className="my-10 py-2 px-20 max-w-[900px] h-24 "
      />
    </div>
  );
};

export default Logo_bar;
