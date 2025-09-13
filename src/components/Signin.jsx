import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

function Signin() {
  const [pass,SetPass]=useState(true);
  return (
    <div className="flex  rounded-xl">
        <div className='bg-white flex flex-col gap-8 px-20 py-20 rounded-l-lg'>
            <div className='flex flex-col justify-center items-center gap-2'>
              <h1 className='font-bold text-2xl'>Hello!</h1>
              <p className='text-gray-500 text-'>Sign in to your account</p>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='flex text-2xl gap-1  rounded-lg py-2 px-2 shadow-md '>
                <MdEmail className='text-[20px] text-violet-600 '/>
                <input type="text" className='text-[16px] focus:outline-none '  placeholder='E-mail'/>
              </div>
              <div className='flex text-2xl gap-1  rounded-lg py-2 px-2 shadow-md '>
                <RiLockPasswordLine className='text-[20px] text-violet-600'/>
                <input type={pass?"text":"password"} className='text-[16px] focus:outline-none '  placeholder='Password'/>
                <div className='justify-end hover:cursor-pointer' onClick={()=>SetPass(!pass)}>
                   {!pass &&  <FaEye className='w-5 h-5'/>}
                   {pass &&  <FaEyeSlash className='w-5 h-5'/>}
                </div>
                
              </div>
            </div>
            <div className='flex justify justify-between text-xs'>
              <div className='flex gap-1'>
                <input type='checkbox' className='cursor-pointer'/>
                <p>Remember Me</p>
              </div>
              <p className='cursor-pointer'>Forget password? </p>
            </div>
            <div className='flex justify-center items-center'>
              <button className='cursor-pointer px-14 py-2 text-white bg-gradient-to-r from-purple-600  to-blue-700 rounded-full'>SIGN IN</button>
            </div>
            <div className='flex gap-1'>
                <p className='text-gray-600 text-xs'>Don't have an account?</p>
                < button className='cursor-pointer text-blue-600 text-xs underline'>Sign up</button>
            </div>
        </div>
        <div className='bg-gradient-to-b from-purple-600 px-10 to-blue-700 flex flex-col items-center justify-center rounded-r-lg gap-5'>
            <h1 className='text-2xl text-white font-semibold'>Welcome Back!</h1>
            <p className='text-gray-300'>It's great to have you here again.</p>
            <p className='text-gray-300'>Sign in to continue where you left off.</p>
            <p className='text-gray-300'>Need assistance? We're here to <span className='text-blue-500 underline cursor-pointer'>help?</span></p>
        </div>
    </div>
  )
}

export default Signin;
