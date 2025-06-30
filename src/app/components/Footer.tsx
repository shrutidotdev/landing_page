"use client";
import React, {  useState } from "react";
import Image from "next/image";
import Me from "../../images/me.png";
import Link from "next/link";
import toast, { Toaster } from 'react-hot-toast';


const Footer = () => {
  const [email, setEmail] = useState<string>("");


  function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    // console.log(e.target.value);
    setEmail(e.target.value)  

  }
  const handleEmailSubmit = () => {
    if(!email) {
      toast.error('Please enter your email address');
      return
    }

  toast.success('Email Subscribed Successfully');
    setEmail("");
  }
  return (
    <footer >
       <Toaster 
        position="top-center"
        toastOptions={{
          duration: 5000,
          style: {
            background: '#000',
            color: '#fff',
          },
        }}
       
      />
      <div className="bg-black min-h-[300px] sm:min-h-[400px] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="text-center max-w-4xl mx-auto z-10 relative">
          <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tighter mb-4 sm:mb-6 lg:mb-8">
            Get instant access
          </h2>
          <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
            <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl text-white font-semibold leading-relaxed px-4">
              LaunchKit doesn&apos;t just save you time—it gives you your unfair advantage back. Get in touch with us today and experience the power of LaunchKit.
            </p>
          </div>
        </div>

       
        
       
        <div className="flex flex-col sm:flex-row mt-6 sm:mt-8 lg:mt-10 gap-3 w-full max-w-sm sm:max-w-md mx-auto z-10 relative px-4">
          <input
            className="h-10 sm:h-9 flex-1 sm:w-auto bg-white/20 rounded-md py-2 text-white px-3 placeholder:text-white/60 text-sm sm:text-base border border-white/20 focus:border-white/40 focus:outline-none transition-colors"
            placeholder="name@gmail.com"
            type="email"
            onChange={handleSubmit}
            value={email}
          />
        <button 
          onClick={handleEmailSubmit}
          className="bg-white text-black h-10 sm:h-9 px-4 sm:px-6 rounded-md font-medium text-sm sm:text-base hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
          Get early access
        </button>
        </div>
      </div>

      {/* Footer bottom section */}
      <div className="bg-gradient-to-r from-black to-[#5D2CAB] px-4 sm:px-6 lg:px-8 xl:px-14 min-h-[60px] sm:min-h-[70px] flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 sm:gap-0 border-t border-white/20">
       <Link
       href={'https://shruti.dev/'}
       target="_blank"
       rel="noopener noreferrer"

       >
        <span className="text-white/45 font-medium text-sm sm:text-base flex items-center">
          &copy; {new Date().getFullYear()} By Shruti
          <Image
            className="inline-flex ml-2"
            src={Me}
            alt="Thats me"
            width={24}
            height={24}
          />
        </span>
       </Link>
        <span className="text-white/45 font-bold text-sm sm:text-base">
          All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;