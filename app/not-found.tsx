"use client";
import Button from "@/components/Button";
import no_page from "@/public/images/no_page.png";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="container mx-auto h-screen flex flex-col items-center justify-center">
      <Image src={no_page} alt="No Page" />
      <Button onClick={() => (window.location.href = "/")}>Back to Home</Button>
    </div>
  );
};

export default NotFound;
