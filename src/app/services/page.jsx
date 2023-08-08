import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import React from "react";

const services = () => {
  return (
    <div>
      <div className="bg-[#141d38] py-8   text-white">
        <h1 className="font-bold text-center md:text-3xl text-lg mt-4">
          ABOUT US
        </h1>
        <p className="text-center mt-4">
          <Link href="/">Home </Link> : <Link href="services"> SERVICES</Link>
        </p>
      </div>
      <WhoWeAre />
      <div className="bg-[#0060ff] w-full mt-[150px]">
        <div className="black__container"></div>
      </div>
    </div>
  );
};

export default services;
