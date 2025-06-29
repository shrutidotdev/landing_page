import React from "react";
import Ecosystem from "../../icons/ecosystem.svg";

const featureSections = [
  {
    id: 1,
    title: "🚀Lightning-Fast Deployment",
    description:
      `Next.js 14, TypeScript, Tailwind CSS, Framer Motion. Deploy to Vercel in 3 clicks. Go from download to live site faster than your competition can say "coming soon."`,
  },
  {
    id: 2,
    title: "🎯Conversion Optimization Built-in",
    description:
      "Every element is split-tested. Every color is psychology-backed. Every word is revenue-optimized. We've cracked the code on SaaS conversions—now it's yours.",
  },
  {
    id: 3,
    title: "Developer Expirience Nirvana",
    description:
      "Clean code that doesn't make you cry. Documentation that actually helps. Components so modular, customization feels like playing with Lego blocks.",
  },
];

const Features = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center py-10 sm:py-16 lg:py-20">
      {/* Header Section */}
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tighter mb-4 sm:mb-6">
            Everything You Need
          </h2>
          <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
            <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl text-white/70 leading-relaxed px-2 sm:px-0">
             Forget cookie-cutter designs that scream "template." LaunchKit delivers Silicon Valley-grade aesthetics with conversion rates that make marketing teams weep tears of joy.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {featureSections.map(({ id, title, description }) => {
            return (
              <div
                key={id}
                className="border border-white/30 p-6 sm:p-8 lg:p-10 rounded-lg flex flex-col items-center text-center space-y-4 sm:space-y-5 lg:space-y-6 transition-all duration-300 hover:border-white hover:bg-white/10 min-h-[280px] sm:min-h-[300px] lg:min-h-[320px]"
              >
                {/* Icon Container */}
                <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 bg-[#7e4ad1] text-white justify-center items-center rounded-ss-4xl rounded-ee-4xl flex-shrink-0">
                  <Ecosystem className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
                </div>
                
                {/* Title */}
                <h3 className="font-bold text-white text-lg sm:text-xl lg:text-2xl leading-tight">
                  {title}
                </h3>
                
                {/* Description */}
                <p className="text-white/70 text-sm sm:text-base lg:text-md leading-relaxed max-w-xs sm:max-w-sm">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;