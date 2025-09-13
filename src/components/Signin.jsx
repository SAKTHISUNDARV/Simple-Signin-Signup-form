import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function SignIn() {
  const [pass, SetPass] = useState(true);

  return (
    <div className="flex flex-col sm:flex-row rounded-xl w-full max-w-4xl mx-auto  sm:pt-20 justify-center items-stretch bg-gray-100">
      {/* Left side (form) */}
      <div className="bg-white flex flex-col flex-1 gap-6 px-6 py-8 sm:px-12 sm:py-20 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none min-w-0">
        <div className="flex flex-col justify-center items-center gap-2 mb-4">
          <h1 className="font-bold text-2xl sm:text-3xl hidden sm:block">Hello!</h1>
          <h1 className="font-bold text-xl sm:hidden">Welcome Back!</h1>
          <p className="text-gray-500 text-sm sm:text-base">Sign in to your account</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center text-2xl gap-2 rounded-lg py-2 px-4 shadow-md">
            <MdEmail className="text-[20px] text-violet-600" />
            <input
              type="email"
              className="flex-1 text-[16px] focus:outline-none"
              placeholder="E-mail"
              autoComplete="email"
            />
          </div>
          <div className="flex items-center text-2xl gap-2 rounded-lg py-2 px-4 shadow-md">
            <RiLockPasswordLine className="text-[20px] text-violet-600" />
            <input
              type={pass ? "password" : "text"}
              className="flex-1 text-[16px] focus:outline-none"
              placeholder="Password"
              autoComplete="current-password"
            />
            <button
              type="button"
              aria-label={pass ? "Show password" : "Hide password"}
              className="text-gray-500 hover:text-violet-600"
              onClick={() => SetPass(!pass)}
            >
              {pass ? (
                <FaEyeSlash className="w-5 h-5" />
              ) : (
                <FaEye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
        <div className="flex justify-between text-xs mt-2">
          <label className="flex items-center gap-1 cursor-pointer select-none">
            <input type="checkbox" className="cursor-pointer" />
            <span>Remember Me</span>
          </label>
          <button className="text-blue-600 underline cursor-pointer" type="button">
            Forget password?
          </button>
        </div>
        <div className="flex justify-center items-center mt-6">
          <button className="cursor-pointer px-12 py-2 text-white bg-gradient-to-r from-purple-600 to-blue-700 rounded-full w-full max-w-xs sm:max-w-none">
            SIGN IN
          </button>
        </div>
        <div className="flex justify-center gap-1 mt-4 text-xs">
          <p className="text-gray-600">Don't have an account?</p>
          <button className="cursor-pointer text-blue-600 underline" type="button">
            Sign up
          </button>
        </div>
      </div>

      {/* Right side (info) */}
      <div className="bg-gradient-to-b from-purple-600 to-blue-700 px-8 py-8 sm:py-10 sm:px-10 flex flex-col flex-1 items-center justify-center text-center rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none min-w-0">
        <h1 className="text-2xl text-white font-semibold hidden sm:block mb-2">
          Welcome Back!
        </h1>
        <p className="text-gray-300 text-sm sm:text-base mb-1">It's great to have you here again.</p>
        <p className="text-gray-300 text-sm sm:text-base mb-1">Sign in to continue where you left off.</p>
        <p className="text-gray-300 text-sm sm:text-base">
          Need Help? We're here to{" "}
          <button className="text-blue-400 underline cursor-pointer" type="button">
            contact support
          </button>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
