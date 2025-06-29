"use client";
import logosaas from "../../images/logosaas.png";
import Image from "next/image";
import MenuIcon from "../../icons/menu.svg";
import X from "../../icons/x.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const NavLinks = [
  {
    name: "About",
    link: "#about", // Fixed: Changed from "Features" to proper anchor
  },
  {
    name: "Features",
    link: "#features", // Fixed: Made consistent with name
  },
  {
    name: "Updates",
    link: "#updates", // Fixed: Changed from "Features" to proper anchor
  },
  {
    name: "Help",
    link: "#help", // Fixed: Made consistent with lowercase
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  // Close menu when clicking outside (optional enhancement)
  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <section className="bg-black relative">
      <div className="flex justify-between items-center py-4 px-8 relative z-10">
        {open && (
          <div className="absolute top-full left-0 right-0 bg-black border-t border-white border-opacity-30 sm:hidden z-50 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col p-4 space-y-4">
              {NavLinks.map(({ name, link }) => (
                <Link
                  key={name}
                  href={link}
                  className="text-white font-bold hover:bg-[#FB92CF] hover:text-[#251a37] rounded-xl px-5  transition-colors py-2 block"
                  onClick={closeMenu}
                >
                  {name}
                </Link>
              ))}
              <Button
                className="bg-gradient-to-r from-[#f53dff] to-[#FB92CF] text-white hover:opacity-90 transition-opacity mt-4 w-full"
                onClick={closeMenu}
              >
                Get Started for free
              </Button>
            </nav>
          </div>
        )}
        {/* Logo */}
        <div className="relative">
          <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur"></div>
          <Image src={logosaas} alt="logosaas" className="h-12 w-12 relative" />
        </div>

        {/* Mobile Navigation */}
        <button
          onClick={toggleMenu}
          className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden transition-all duration-300 ease-in-out hover:rotate-3 bg-gradient-to-r from-[#f53dff] to-[#FB92CF] text-white hover:bg-[#FB92CF] hover:text-[#251a37] hover:scale-105"
          aria-label="Toggle mobile menu"
        >
          <div className="relative w-5 h-5">
            <MenuIcon
              className={`w-5 h-5 absolute transition-all duration-300 ease-in-out ${
                open
                  ? "rotate-90 opacity-0 scale-75"
                  : "rotate-0 opacity-100 scale-100"
              }`}
            />
            <X
              className={`w-5 h-5 absolute transition-all duration-300 ease-in-out ${
                open
                  ? "rotate-0 opacity-100 scale-100"
                  : "rotate-90 opacity-0 scale-75"
              }`}
            />
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex gap-10 items-center">
          <nav className="text-white flex gap-6 font-medium">
            {NavLinks.map(({ name, link }) => (
              <Link
                key={name}
                href={link}
                className="hover:text-gray-300 transition-colors"
              >
                {name}
              </Link>
            ))}
          </nav>

          <Button className="bg-gradient-to-r from-[#f53dff] to-[#FB92CF] text-white hover:opacity-90 transition-opacity">
            Get Started for free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
