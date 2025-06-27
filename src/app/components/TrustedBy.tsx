import React from "react";
import Image from "next/image";
import company1 from "../../images/acme.png";
import company2 from "../../images/quantum.png";
import company3 from "../../images/echo.png";
import company4 from "../../images/celestial.png";
import company5 from "../../images/pulse.png";
import company6 from "../../images/apex.png";

const TrustedByImges = [
  { name: "Acme Corp", img: company1 },
  { name: "Quantum", img: company2 },
  { name: "Echo Valley", img: company3 },
  { name: "Celestial", img: company4 },
  { name: "Pulse", img: company5 },
  { name: "Apex", img: company6 },
];

const TrustedBy = () => {
  return (
    <section className="bg-black text-white py-[72px]">
        {/*   mx-auto flex flex-col justify-center items-center */}
      <div className="container">
        <h1 className="text-[#7A7A7A] font-meium ">
          Trusted by the world’s most innovative teams
        </h1>

        <div className="overflow-hidden">
          <div className="flex gap-16">
            {TrustedByImges.map(({ name, img }) => (
            <Image key={name} src={img} alt={name} className="flex-none h-8 w-auto " />
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
