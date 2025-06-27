import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="bg-[linear-gradient(to_right,#fff1bf,#ffafd1,#fc32ff,#ff6c9d,#ffb499,#fc9ef9,#c824ff)] text-center flex justify-center items-center">
      <div>
        <Link href="/" className="block">
          <div className="font-medium text-white">
            <span className="hidden sm:inline">Introducing Brand New Feature✨ </span>
            <h1
              className="font-medium text-white bg-black px-5 
              transform transition-transform rotate-1 duration-300 
              hover:rotate-0 w-fit mx-auto my-1 inline-block"
            >
              Explore More
            </h1>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Banner;