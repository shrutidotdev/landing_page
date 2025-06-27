"use client";
import logosaas from "../../images/logosaas.png";
import Image from "next/image";
import MenuIcon from "../../icons/menu.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const NavLinks = [
  {
    name: "About",
    link: "Features",
  },
  {
    name: "Features",
    link: "Features",
  },
  {
    name: "Updates",
    link: "Features",
  },
  {
    name: "Help",
    link: "help",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="bg-black">
      <div className="flex justify-between items-center py-4 px-8">
        {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md rounded"></div> */}

        {/* Logo */}
        <div className="relative">
          <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur"></div>
          <Image src={logosaas} alt="logosaas" className="h-12 w-12 relative" />
        </div>

        {/* <div className="border border-gradient border-opacity-30 h-10 w-10 inline-flex justify-between items-center rounded-lg ">
          <MenuIcon className="text-white " />
        </div> */}
        <div className="border border-white  border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
          {/* { click && <div className="bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur"></div>} */}
          <MenuIcon className="text-white w-5 h-5 mb-1" />
        </div>

        <div className="hidden sm:flex gap-10 items-center">
          <nav className="text-white flex gap-6 font-medium">
            {NavLinks.map(({ name, link }) => (
              <Link key={name} href={link}>
                {name}
              </Link>
            ))}
          </nav>

          <Button className="bg-gradient-to-r from-[#f53dff] to-[#FB92CF] text-white">
            Get Started for free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
