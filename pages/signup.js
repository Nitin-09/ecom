import React from "react";
import Image from "next/image";
import { useState } from "react";

function signup() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isOTPtabVisible, setIsOTPtabVisible] = useState(false);
  const handleGetOTP = (e) => {
    e.preventDefault();
    setIsOTPtabVisible(true);
  };
  return (
    <div className="text-white min-h-screen bg-black  w-full">
      <div className="bg-black pt-32 sm:pt-28 lg:pt-20 px-5 md:px-20">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="basis-1/2">
            <Image src="/unnamed1.jpg" width="2000" height="300" alt="" />
          </div>
          <div className="basis-1/2 md:p-10 pb-5 md:pb-0">
            <form
              method="Post"
              action=""
              className="flex flex-col justify-center gap-10"
            >
              <div>
                <h1 className="text-2xl">
                  Welcome! It seems like you're new here. You can register to
                  get started.
                </h1>
                <h4 className="text-sm text-gray-400 ">
                  Enter your details below to Signup
                </h4>
              </div>
              <div className="flex flex-col justify-center items-start group">
                <label
                  className="text-lg font-bold group-focus-within:text-blue-400 cursor-pointer"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full rounded-lg p-2 outline-none text-black"
                  type="email"
                  id="email"
                  name="email"
                />
                <button
                  onClick={(e) => {
                    handleGetOTP(e);
                  }}
                  className="text-sm text-gray-400 underline underline-offset-2 pt-2"
                >
                  Get OTP
                </button>
              </div>
              <div
                className={`justify-start items-center group gap-5 ${
                  isOTPtabVisible ? "flex" : "hidden"
                }`}
              >
                <label
                  className="text-lg font-bold group-focus-within:text-blue-400 cursor-pointer"
                  htmlFor="email"
                >
                  OTP :
                </label>
                <input
                  className="w-[30%] rounded-lg p-2 outline-none text-black"
                  type="email"
                  id="email"
                  name="email"
                />
              </div>
              <div className="flex flex-col justify-center items-start group">
                <label
                  className="text-lg font-bold group-focus-within:text-blue-400 cursor-pointer"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="w-full rounded-lg flex bg-white justify-center items-center">
                  <input
                    className="w-[88%] xl:w-[95%] rounded-lg p-2 outline-none text-black"
                    type={isPasswordVisible ? "text" : "password"}
                    id="password"
                    name="password"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIsPasswordVisible(true);
                    }}
                    className={`${
                      isPasswordVisible ? "hidden" : "block"
                    } text-black w-[12%] xl:w-[5%]`}
                  >
                    <i className=" fa-solid fa-eye"></i>
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIsPasswordVisible(false);
                    }}
                    className={`${
                      isPasswordVisible ? "block" : "hidden"
                    } text-black w-[12%] xl:w-[5%]`}
                  >
                    <i className="fa-solid fa-eye-slash"></i>
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start group">
                <label
                  className="text-lg font-bold group-focus-within:text-blue-400 cursor-pointer"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <div className="w-full rounded-lg flex bg-white justify-center items-center">
                  <input
                    className="w-[88%] xl:w-[95%] rounded-lg p-2 outline-none text-black"
                    type={isPasswordVisible ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIsPasswordVisible(true);
                    }}
                    className={`${
                      isPasswordVisible ? "hidden" : "block"
                    } text-black w-[12%] xl:w-[5%]`}
                  >
                    <i className=" fa-solid fa-eye"></i>
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIsPasswordVisible(false);
                    }}
                    className={`${
                      isPasswordVisible ? "block" : "hidden"
                    } text-black w-[12%] xl:w-[5%]`}
                  >
                    <i className="fa-solid fa-eye-slash"></i>
                  </button>
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <button className="w-full">
                  <input
                    type="submit"
                    value="Signup"
                    className="bg-[#e66940] font-bold text-black p-2 rounded-md w-full cursor-pointer"
                  />
                </button>
                <h4 className="text-sm text-gray-400 ">
                  Already have an account ?{" "}
                  <a href="/login" className="text-blue-500 py-2">
                    Log In{" "}
                  </a>
                </h4>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default signup;
