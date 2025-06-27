import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Arrow from "../../icons/arrow-w.svg";
import cursorImg from "../../images/cursor.png";
import messageImg from "../../images/message.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[linear-gradient(to_bottom,#000000,#200D42_34%,#4F21A1_65%,#A46EDB)] text-white min-h-screen relative overflow-hidden">
      <div className="container mt-20 max-w-4xl mx-auto flex flex-col justify-center items-center h-full">
        {/* Top Bar */}
        <Link href={"#"}>
          <div className="flex items-center justify-center border border-white/30  rounded-lg">
            <Button className=" ">
              <p className="bg-[linear-gradient(to_right,#F87BFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text">
                Version 2.0 is here
              </p>
              <p>Read More</p>

              <Arrow />
            </Button>
          </div>
        </Link>

        
        {/* Main Content */}
        <div className="mt-16 space-y-12 flex flex-col justify-center items-center mx-auto text-center">
          {/* Heading */}
          <div>
            <div className="inline-flex relative">
              <h1 className=" text-7xl sm:text-9xl md:text-[10rem] font-bold tracking-tighter leading-none ">
                One Task
                <br />
                at a Time
              </h1>
              <Image
                src={cursorImg}
                alt="cursorImg"
                className="hidden sm:flex absolute top-[178px] right-[570px] transition-transform duration-300 hover:-rotate-12"
                width={200}
                height={200}
              />
              <Image
                src={messageImg}
                alt="messageImg"
                className=" hidden sm:flex  absolute top-[108px] left-[676px] transition-transform duration-300 hover:-rotate-12 "
                width={200}
                height={200}
              />
            </div>
            {/* bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text */}
          </div>

          {/* Description */}
          <div className="max-w-3xl">
            <p className="text-lg sm:text-xl lg:text-2xl text-white/70 leading-relaxed px-4">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-8 relative flex items-center ">
            <Button
              size="lg"
              className=" overflow-hidden bg-gradient-to-r from-[#f53dff] to-[#FB92CF] text-white font-semibold text-lg rounded-md cursor-pointer absolute z-50 left-1/2 -translate-x-1/2 "
              href={"#"}
            >
              Get Started for free
              <Arrow className="w-10 h-10 " />
              {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-200" /> */}
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient element - Enhanced */}
      {/* <div className="absolute top-[80%] h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] rounded-[100%] left-1/2 -translate-x-1/2 bg-[radial-gradient(closest-side,#0f172a_60%,#1e1b4b_75%,#7c3aed_90%,#a855f7)] opacity-90" /> */}

      <div className="absolute  top-[80%] h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] rounded-[100%] left-1/2 bg-black border border-[#B48CDE] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_82%,#9560EB)]  "></div>

      {/* Additional subtle overlay for depth */}
      {/* <div className="absolute top-[82%] h-[300px] w-[600px] sm:w-[1200px] sm:h-[600px] rounded-[100%] left-1/2 -translate-x-1/2 bg-[radial-gradient(closest-side,transparent_40%,#6366f1_80%,#8b5cf6)] opacity-30" /> */}
    </section>
  );
};

export default Hero;
