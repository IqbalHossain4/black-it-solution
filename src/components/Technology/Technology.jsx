import React from "react";
import {
  FaAndroid,
  FaAppleAlt,
  FaClock,
  FaCode,
  FaNetworkWired,
  FaTv,
} from "react-icons/fa";

const Technology = () => {
  const options = [
    {
      icon: <FaCode />,
      title: "WEB",
    },
    {
      icon: <FaAndroid />,
      title: "ANDROID",
    },
    {
      icon: <FaAppleAlt />,
      title: "IOS",
    },
    {
      icon: <FaNetworkWired />,
      title: "LOt",
    },
    {
      icon: <FaClock />,
      title: "WEARABLES",
    },
    {
      icon: <FaTv />,
      title: "TV",
    },
  ];
  return (
    <div className="md:mt-[180px] mt-24">
      <div
        style={{
          backgroundImage: "url('fff.jpg')",
        }}
        className="w-full  h-fit bg-cover bg-center"
      >
        <div
          className="w-full h-full bg-gradient-to-r from-[rgba(21,21,21,0.5)]
          to-[rgba(21,21,21,0.5)] p-10 text-white"
        >
          <div className="black__container lg:flex items-start justify-between gap-8 py-16">
            <div>
              <h4 className="text-white font-semibold text-sm">
                TECHNOLOGY INDEX
              </h4>
              <h1 className="font-bold md:text-3xl text-lg md:pe-16 mt-4">
                We Deliver Solutions with the Goal of Trusting Workships
              </h1>
            </div>
            <div>
              <div className="grid-2 lg:mt-0 mt-16">
                {options.map(({ icon, title }) => (
                  <div className="lg:w-[200px] h-[200px] flex items-center justify-center p-8 techBox">
                    <div>
                      <p className="flex items-center justify-center text-4xl text-[#0060ff]">
                        {icon}
                      </p>
                      <h4 className="font-semibold text-sm mt-4">{title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
