"use client";
import { useEffect, useRef } from "react";
import Ecosystem from "../../icons/ecosystem.svg";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

interface Props {
  title: string;
  description: string;
}

const Feature = ({ title, description }: Props) => {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(120px 120px at ${offsetX}px ${offsetY}px, black, transparent)`;
  const border = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMouseEvent = (e: MouseEvent) => {
      if (!border.current) return;
      const borderRect = border.current.getBoundingClientRect();
      offsetX.set(e.clientX - borderRect.left);
      offsetY.set(e.clientY - borderRect.top);
    };
    
    window.addEventListener("mousemove", updateMouseEvent);
    return () => {
      window.removeEventListener("mousemove", updateMouseEvent);
    };
  }, [offsetX, offsetY]);

  return (
    <motion.div 
      className="border border-white/20 rounded-xl rounded-ee-4xl relative overflow-hidden group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {/* Animated border overlay */}
      <motion.div
        style={{
          maskImage,
          WebkitMaskImage: maskImage
        }}
        ref={border}
        className="absolute inset-0 border-2 border-purple-400 rounded-xl rounded-ee-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl rounded-ee-4xl" />
      
      {/* Content */}
      <div className="relative flex flex-col items-center text-center p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-4 lg:space-y-5 min-h-[200px] sm:min-h-[220px] lg:min-h-[240px] justify-center">
        
        {/* Icon Container */}
        <motion.div 
          className="inline-flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 bg-[#7e4ad1] text-white justify-center items-center rounded-xl rounded-ee-4xl flex-shrink-0 shadow-lg"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Ecosystem className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
        </motion.div>

        {/* Title */}
        <h3 className="font-bold text-white text-base sm:text-lg lg:text-xl xl:text-2xl leading-tight px-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-white/70 text-xs sm:text-sm lg:text-base leading-relaxed max-w-[250px] sm:max-w-[280px] lg:max-w-[320px] px-2">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default Feature;