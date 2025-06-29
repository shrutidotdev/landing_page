import React from "react";
import Image from "next/image";
import AppScreen from "../../images/app-screen.png"

const ProductShowcase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#5D2CAB] bg-black   justify-center items-center py-12 sm:py-16 lg:py-20">
      {/* Header Section */}
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tighter mb-4 sm:mb-6">
            Start Building Empires {" "}
          </h2>
          <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
            <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl text-white/70 leading-relaxed px-2 sm:px-0">
              Every day you spend on design is a day competitors gain market share. Every week you code from scratch is a week you could be talking to customers. Every month you delay is revenue you'll never recover.

            </p>
          </div>
        </div>
      </div>


      {/* Image */}
      <div className="container mx-auto text-center max-w-6xl">
        <Image src={AppScreen} alt="App Screen Showcase" />
      </div>
    </div>
  );
};

export default ProductShowcase;
