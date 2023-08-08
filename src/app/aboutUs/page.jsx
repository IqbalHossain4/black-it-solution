"use client";
import AboutCompany from "@/components/AboutCompany/AboutCompany";
import CustomBtnTwo from "@/components/CustomBtn/CustomBtnTwo";
import Link from "next/link";
import CountUp, { useCountUp } from "react-countup";

// export const metadata = {
//   title: "About Us || IT Solutions",
//   description: "Black IT Solution",
// };

const AboutUs = () => {
  useCountUp({
    ref: "counter",
    end: 20,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <div className="mb-24">
      <div className="bg-[#141d38] py-8   text-white">
        <h1 className="font-bold text-center md:text-3xl text-lg mt-4">
          ABOUT US
        </h1>
        <p className="text-center mt-4">
          <Link href="/">Home </Link> : <Link href="aboutUs"> About Us</Link>
        </p>
      </div>
      <div className="mt-24">
        <AboutCompany />
      </div>
      <div className="bg-[#0060ff] w-full mt-[150px]">
        <div className="black__container relative  mb-24">
          <div className="w-full md:absolute top-[-10%] py-12 bg-[#E7F0FF] rounded-3xl  drop-shadow-md">
            <div className="md:flex items-center justify-evenly">
              <div>
                <h1 className="text-center md:mt-0 mt-8">
                  <CountUp
                    end={330}
                    enableScrollSpy
                    className="font-extrabold text-center text-5xl"
                  />
                  <span className="font-extrabold text-5xl">+</span>
                </h1>
                <h4 className="text-[#071cf9] text-center font-semibold text-sm">
                  ACTIVE CLIENTS
                </h4>
              </div>
              <div>
                <h1 className="text-center md:mt-0 mt-8">
                  <CountUp
                    end={850}
                    enableScrollSpy
                    className="font-extrabold text-center text-5xl"
                  />
                  <span className="font-extrabold text-5xl">+</span>
                </h1>
                <h4 className="text-[#071cf9] text-center font-semibold text-sm">
                  PROJECTS DONE
                </h4>
              </div>
              <div>
                <h1 className="text-center md:mt-0 mt-8">
                  <CountUp
                    end={25}
                    enableScrollSpy
                    className="font-extrabold text-center  text-5xl"
                  />
                  <span className="font-extrabold text-5xl">+</span>
                </h1>
                <h4 className="text-[#071cf9] text-center font-semibold text-sm">
                  TEAM ADVISORS
                </h4>
              </div>
              <div>
                <h1 className="text-center md:mt-0 mt-8">
                  <CountUp
                    end={10}
                    enableScrollSpy
                    className="font-extrabold text-center text-5xl"
                  />
                  <span className="font-extrabold text-5xl">+</span>
                </h1>
                <h4 className="text-[#071cf9] text-center font-semibold text-sm">
                  GLORIOUS YEARS
                </h4>
              </div>
            </div>
          </div>
          <div className="py-16 md:flex items-start gap-16">
            <div>
              <img
                src={
                  "https://expert-themes.com/html/globex/images/resource/about-5.jpg"
                }
                className="aboutImg md:w-[460px] w-full md:h-[600px] h-full md:mt-0 my-8 "
                alt=""
              />
            </div>
            <div className="md:mt-24 md:w-1/2">
              <h4 className="text-white font-semibold text-sm">
                ABOUT BLACK IT
              </h4>
              <h1 className="font-bold text-white md:text-3xl text-lg md:pe-16 my-4">
                Transform Your Business With The Leading IT Solution rovider.
              </h1>
              <p className="mt-4 text-slate-300">
                We listen. We advise. We design, together. Happy customers and
                ongoing relationships are what we strive for. Success is
                measured by results, the most important being how our clients
                feel about their experience with us.
              </p>
              <div className="mt-6">
                <p className="text-white text-sm mt-4">UI/UX Design</p>
                <input
                  type="range"
                  min={0}
                  max="100"
                  value="93"
                  className="range range-xs bg-white  h-[8px]"
                />
                <p className="text-white text-sm mt-4">App Development</p>
                <input
                  type="range"
                  min={0}
                  max="100"
                  value="80"
                  className="range range-xs bg-white  h-[8px]"
                />
                <p className="text-white text-sm mt-4">Web Development</p>
                <input
                  type="range"
                  min={0}
                  max="100"
                  value="73"
                  className="range range-xs bg-white  h-[8px]"
                />
              </div>
              <div className="mt-8">
                <CustomBtnTwo title={"Learn More"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
