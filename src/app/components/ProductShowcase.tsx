"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import AppScreen from "../../images/app-screen.png";
import { useScroll, motion, useTransform } from "framer-motion";

const ProductShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      console.log("Scroll progress:", value);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  // Improved transform ranges for smoother transitions
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [25, 5, 0, -5]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0.3, 0.8, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1.05]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, 0]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-black  to-[#9743ff] flex flex-col justify-center items-center py-12 sm:py-16 lg:py-20 relative overflow-hidden"
    >
      {/* Header Section */}
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <motion.h2
            className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tighter mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Start Building Empires
          </motion.h2>
          <motion.div
            className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl text-white/70 leading-relaxed px-2 sm:px-0">
              Every day you spend on design is a day competitors gain market
              share. Every week you code from scratch is a week you could be
              talking to customers. Every month you delay is revenue you&apos;ll
              never recover.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Image Showcase */}
      <div className="flex-1 flex items-center justify-center relative w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{
            opacity,
            rotateX,
            scale,
            y,
            transformPerspective: "800px",
            transform: "translateZ(0)",
          }}
          className="relative max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl w-full"
        >
          <div className="relative">
            {/* Background glow effect behind the image */}
            <div
              className="absolute bottom-6 inset-0 bg-white/30 blur-3xl rounded-3xl scale-110 -z-10 animate-pulse"
              style={{ animationDuration: "3s" }}
            />
            <div className="absolute inset-0 bg-[#9743ff] blur-3xl rounded-3xl scale-105 -z-10" />

            {/* App screen */}
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src={AppScreen}
                alt="App Screen Showcase"
                priority
                quality={100}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductShowcase;
