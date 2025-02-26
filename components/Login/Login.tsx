import React from "react";
import { lato } from "@/public/fonts/fonts";
import Button from "../Button";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex justify-center items-center bg-white">
      <div className="bg-white my-28 p-8 rounded-lg shadow-[0_0_20px_5px_#F6F4FD] w-full max-w-md">
        {/* Header */}
        <h1 className=" text-[32px] leading-9 font-bold text-[#0B0B0B] mb-2 text-center ">
          Login
        </h1>
        <p
          className={`${lato.className} text-[17px] text-[#9096B2] leading-5 text-center mb-6`}
        >
          Please login using account details below.
        </p>

        {/* Input Fields */}
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border border-[#C7CEE4] rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-[#C7CEE4] rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        {/* Forgot Password */}
        <p
          className={`${lato.className} text-[17px] text-[#9096B2] hover:underline focus:outline-none mt-4 block`}
        >
          Forgot your password?
        </p>

        {/* Sign In Button */}
        <Button className="w-full mt-6">Sign In</Button>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p
            className={`${lato.className} text-[17px] leading-5 text-[#9096B2]`}
          >
            Don’t have an Account?
            <Link
              href="/Signup"
              className="hover:text-pink-500 hover:underline focus:outline-none"
            >
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
