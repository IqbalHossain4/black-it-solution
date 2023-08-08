import ContactUs from "@/components/ContactUs/ContactUs";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Services || IT Solutions",
  description: "Black IT Solution",
};

const services = () => {
  return (
    <div>
      <div className="bg-[#141d38] py-8   text-white">
        <h1 className="font-bold text-center md:text-3xl text-lg mt-4">
          SERVICES
        </h1>
        <p className="text-center mt-4">
          <Link href="/">Home </Link> : <Link href="services"> Services</Link>
        </p>
      </div>
      <div className="md:mt-[300px]">
        <WhoWeAre />
      </div>
      <div className="relative bg-[#0060ff] lg:mt-[850px] md:mt-[1400px] pt-24 w-full mt-[150px] md:h-[650px] h-fit md:mb-[500px] mb-24 ">
        <div className="black__container">
          <h4 className="text-white text-center font-semibold text-sm">
            CONTACT US
          </h4>
          <h1 className="font-bold text-white text-center md:text-3xl text-lg md:pe-16 my-4">
            Join Us To Get IT Free Consultations
          </h1>
          <div className="md:absolute bottom-[-65%] ">
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default services;
