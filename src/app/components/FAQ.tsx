"use client";
import React, { useState } from "react";
import Plus from "../../icons/plus.svg";
import Minus from "../../icons/minus.svg";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

const items = [
  {
    question: "💰Is $97 really worth it vs free templates?",
    answer:
      "Free templates cost you customers. Our founders see 2-5x conversion increases. One extra signup pays for LaunchKit 10x over. Plus, you get lifetime updates and our private Slack community.",
  },
  {
    question: "⚡How fast can I actually launch?",
    answer:
      "Download to live site: 3-6 hours if you're new to code. 30 minutes if you know what you're doing. Our record holder went live in 11 minutes (we have the screenshot).",
  },
  {
    question: "🛠️ What if I can't code?",
    answer:
      "LaunchKit includes video tutorials, deployment guides, and access to our founder community. Plus, we'll connect you with vetted developers who know the template inside-out.",
  },
  {
    question: "🚀 Can this handle my specific SaaS idea?",
    answer:
      "LaunchKit powers everything from AI tools to project management apps. The modular design adapts to any SaaS vertical. If it processes payments and has users, LaunchKit can sell it.",
  },
];

const AccordionItems = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="text-white border-b border-white/30 flex flex-col py-4 sm:py-5 lg:py-6 cursor-pointer group hover:bg-white/5 transition-all duration-300 ease-in-out rounded-lg px-4"
    >
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-lg sm:text-xl transition-colors duration-300 group-hover:text-purple-200">
          {question}
        </h3>
        <div
          className={clsx("transition-all duration-300 ease-in-out transform", {
            "rotate-45": isOpen,
            "rotate-0": !isOpen,
          })}
        >
          <Plus className="w-5 h-5" />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: "16px" }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ 
              duration: 0.3, 
              ease: "easeInOut",
              height: { duration: 0.3 },
              opacity: { duration: 0.2 },
              marginTop: { duration: 0.3 }
            }}
          >
            <div className="text-sm sm:text-base text-white/70 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-black to-[#9743ff] flex flex-col justify-center items-center py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="w-full">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tighter mb-4 sm:mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="container px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="space-y-2">
            {items.map(({ question, answer }, index) => (
              <AccordionItems key={index} question={question} answer={answer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;