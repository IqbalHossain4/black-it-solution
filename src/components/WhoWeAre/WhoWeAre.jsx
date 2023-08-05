import {
  FaArrowRight,
  FaCode,
  FaDatabase,
  FaDesktop,
  FaLaptop,
} from "react-icons/fa";

const WhoWeAre = () => {
  const box = [
    {
      icon: <FaDesktop />,
      title: "IT Soluations",
      desc: "Sed ut perspiciatis unde omnis iste natus error volup validate your ideas.",
    },
    {
      icon: <FaLaptop />,
      title: "Security System",
      desc: "Sed ut perspiciatis unde omnis iste natus error volup validate your ideas.",
    },
    {
      icon: <FaCode />,
      title: "Web Development",
      desc: "Sed ut perspiciatis unde omnis iste natus error volup validate your ideas.",
    },
    {
      icon: <FaDatabase />,
      title: "Database Security",
      desc: "Sed ut perspiciatis unde omnis iste natus error volup validate your ideas.",
    },
  ];
  return (
    <div style={{ backgroundImage: "url('whoweare.jpg')" }} className="">
      <div className=" w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
        <div className="black__container pt-20">
          <h4 className="text-white font-semibold text-md text-center">
            Who We Are
          </h4>
          <h1 className="font-bold md:text-4xl text-lg text-white my-4 text-center md:px-60 px-2 ">
            We deal with the aspects of professional IT Services
          </h1>
          <div className="grid-1">
            {box.map(({ icon, title, desc }) => (
              <div className="bg-white customBox p-8 text-center">
                <p className="flex items-center justify-center text-4xl text-black">
                  {icon}
                </p>
                <h5 className="my-4 font-semibold text-[#0060ff]">{title}</h5>
                <p>{desc}</p>
                <button className="btnWho">
                  <FaArrowRight />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
