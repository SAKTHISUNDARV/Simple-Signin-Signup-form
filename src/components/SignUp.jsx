import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEye, FaEyeSlash,FaUser } from "react-icons/fa";
const SignUp = () => {
    const [pass, SetPass] = useState(true);
  return (
    <div className="flex flex-col sm:flex-row rounded-xl w-full max-w-4xl mx-auto  sm:pt-20 justify-center items-stretch bg-gray-100">
          {/* Left side (form) */}
          <div className="bg-white flex flex-col flex-1 gap-6 px-6 py-8 sm:px-12 sm:py-20 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none min-w-0">
            <div className="flex flex-col justify-center items-center gap-2 mb-4">
              <h1 className="font-bold text-xl ">Hello,Welcome!</h1>
              <p className="text-gray-500 text-sm sm:text-base">Enter the details to create account</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center text-2xl gap-2 rounded-lg py-2 px-4 shadow-md">
                <FaUser className="text-[20px] text-violet-600" />
                <input
                  type="text"
                  className="flex-1 text-[16px] focus:outline-none"
                  placeholder="User Name"
                />
              </div>
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
            <div className="flex justify-center items-center mt-6">
              <button className="cursor-pointer px-12 py-2 text-white bg-gradient-to-r from-purple-600 to-blue-700 rounded-full w-full max-w-xs sm:max-w-none">
                CREATE ACCOUNT
              </button>
            </div>
            <div className="flex justify-center gap-1 mt-4 text-xs">
              <p className="text-gray-600">Do you have an account?</p>
              <button className="cursor-pointer text-blue-600 underline" type="button">
                Sign in
              </button>
            </div>
          </div>
    
          {/* Right side (info) */}
          <div className="bg-gradient-to-b from-purple-600 to-blue-700 px-8 py-8 sm:py-10 gap-3 sm:px-10 flex flex-col flex-1 items-center justify-center text-center rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none min-w-0">
            <h1 className="text-2xl text-white font-semibold ">
              Glad to see you!
            </h1>
            <p className="text-gray-300 text-sm sm:text-base mb-1">Welcome! Let's get you started.</p>
            <p className="text-gray-300 text-sm sm:text-base mb-1">Create your account to join us.</p>
            <p className="text-gray-300 text-sm sm:text-base">
              Need Help? We're here to{" "}
              <button className="text-blue-400 underline cursor-pointer" type="button">
                contact support
              </button>
            </p>
          </div>
        </div>
  )
}

export default SignUp
