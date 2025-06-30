import React from "react";
import Feature from "./Feature";
interface Props {
  title: string;
  description: string;

}

const featureSections : Props[] = [
  {
   
    title: "🚀Lightning-Fast Deployment",
    description:
      `Next.js 14, TypeScript, Tailwind CSS, Framer Motion. Deploy to Vercel in 3 clicks. Go from download to live site faster than your competition can say "coming soon."`,
  },
  {
   
    title: "🎯Conversion Optimization Built-in",
    description:
      "Every element is split-tested. Every color is psychology-backed. Every word is revenue-optimized. We've cracked the code on SaaS conversions—now it's yours.",
  },
  {
   
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
      <div className="container px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {
            featureSections.map(({  title, description }, index) => (
              <Feature key={index} title={title} description={description}  />
            ))
            }
        </div>
      </div>
    </div>
  );
};

export default Features;