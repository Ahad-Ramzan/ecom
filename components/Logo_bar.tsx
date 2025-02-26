import Image from "next/image";
import logo_bar from "@/public/images/logo_bar.png";

const Logo_bar = () => {
  return (
    <div className="container mx-auto flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <Image
        src={logo_bar}
        alt="Logo Bar"
        className="my-6 py-2 px-4 md:px-20 w-full max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[900px] h-auto"
      />
    </div>
  );
};

export default Logo_bar;
