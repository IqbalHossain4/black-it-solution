import React from "react";

const Sponsor = () => {
  return (
    <div>
      <div className="md:w-[1220px] w-fit py-12 bg-white rounded-3xl  drop-shadow-md">
        <div className="flex items-center justify-evenly">
          <div className="w-[150px] ">
            <img src={"sponsor1.png"} className="w-full h-full" alt="" />
          </div>
          <div className="w-[150px] ">
            <img src={"sponsor2.png"} className="w-full h-full" alt="" />
          </div>
          <div className="w-[150px] ">
            <img
              src={
                "https://www.pngkit.com/png/full/273-2733102_audi-r8-sponsor-logo.png"
              }
              className="w-full h-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
