import { Button } from "@/components/ui/button";
import React from "react";
import Arrow from "../../icons/arrow-w.svg";
import cursorImg from "../../images/cursor.png";
import messageImg from "../../images/message.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,#000000,#200D42_34%,#4F21A1_65%,#A46EDB)] text-white min-h-screen relative overflow-hidden ">
      <div className="container absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] justify-center items-center flex top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="container  max-w-4xl mx-auto flex flex-col justify-center items-center h-full mt-20">
          {/* Top Bar */}
          <Button className="mt-5  border border-white/30  rounded-lg ">
            <p className="bg-[linear-gradient(to_right,#B48CDE,#A550FF,#EFAEFF,#F7D8FF,#E374FF)] text-transparent bg-clip-text">
              Only 47 copies left at this price.
            </p>
            <p>Buy Now</p>

            <Arrow />
          </Button>


          {/* Main Content */}
          <div className="mt-5 space-y-8 flex flex-col justify-center items-center mx-auto text-center">
            {/* Heading */}

            <div className=" relative">
              <h1 className=" text-5xl sm:text-6xl md:text-[6rem] font-bold tracking-tighter leading-none ">
                One Template.
                <br />
                Infinite Startup.
              </h1>
              <Image
                src={cursorImg}
                alt="cursorImg"
                className="hidden sm:flex absolute top-[178px] right-[650px] rotate-12 transition-transform duration-300 hover:-rotate-12"
                width={200}
                height={200}
              />
              <Image
                src={messageImg}
                alt="messageImg"
                className=" hidden sm:flex  absolute top-[108px] left-[676px] transition-transform duration-300 rotate-12 hover:-rotate-12"
                width={200}
                height={200}
              />
            </div>
           

            {/* Description */}
      <div className="max-w-xs mt-2 sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
              <p className="text-md sm:text-sm md:text-lg lg:text-xl text-white/70 leading-relaxed px-4 ">
               LaunchKit isn&apos;t just another template—it&apos;s your unfair advantage in the SaaS arms race. While competitors spend 6 months on landing pages, you&apos;ll ship in 6 hours. While they hire $200/hour developers, you&apos;ll build like a Silicon Valley veteran.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-20 relative flex items-center ">
              <Button
                size="lg"
                className=" overflow-hidden bg-gradient-to-r from-[#f53dff] to-[#FB92CF] text-white font-semibold text-lg rounded-md cursor-pointer absolute z-50 left-1/2 -translate-x-1/2"
              >
                 Launch your Empire just for <Arrow className="w-10 h-10 " /> $97 ONLY
                
              </Button>
            </div>
          </div>
        </div>
        <div
          className="absolute -z-20 
    hidden sm:flex
    h-[200px] w-[120%] 
    xs:h-[950px] xs:w-full
    sm:h-[375px] sm:w-[1536px] 
    md:h-[768px] md:w-[1536px] 
    bg-black 
    left-1/2 -translate-x-1/2 
    border border-[#B48CDE] 
    rounded-[100%] 
   
    bg-[radial-gradient(closest-side,#000_82%,#9560EB)]
    top-[calc(100%-40px)]
    xs:top-[calc(100%-160px)]
    sm:top-[calc(100%-80px)] 
    md:top-[calc(100%-120px)] 
    lg:top-[calc(100%-240px)] 
    xl:top-[calc(100%-260px)]"
        ></div>
      </div>
    </div>
  );
};

export default Hero;
