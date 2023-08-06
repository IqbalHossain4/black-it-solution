import {
  FaArrowRight,
  FaCode,
  FaDatabase,
  FaDesktop,
  FaItchIo,
  FaLaptop,
  FaMobile,
  FaPaintBrush,
  FaQuestion,
  FaTeamspeak,
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

  const boxTwo = [
    {
      icon: <FaCode />,
      title: "Web Development",
      desc: "We carry more than just good coding skills. Our experience makes us stand out from other web development.",
    },
    {
      icon: <FaMobile />,
      title: "Mobile Development",
      desc: "Create complex enterprise software, ensure reliable software integration, modernise your legacy system.",
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design ",
      desc: "Build the product you need on time with an experienced team that uses a clear and effective design process.",
    },
    {
      icon: <FaQuestion />,
      title: "QA & Testing",
      desc: "Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software.",
    },
    {
      icon: <FaItchIo />,
      title: "IT Counsultancy",
      desc: "Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app portfolios.",
    },
    {
      icon: <FaTeamspeak />,
      title: "Dedicated Team",
      desc: "Over the past decade, our customers succeeded by leveraging Intellectsoft’s process of building, motivating.",
    },
  ];
  return (
    <div>
      <div
        style={{
          backgroundImage: "url('rm378-08.jpg')",
        }}
        className="relative bg-[#141d38] mt-64 w-full md:h-[1000px] h-auto md:pb-0 pb-20 md:mb-[700px] mb-24 bg-cover bg-center box-content"
      >
        <div className="flex items-ceter justify-center ">
          <div className="absolute -top-[20%]  lg:w-[1220px] flex-1">
            <div
              style={{
                backgroundImage: "url('a.jpg')",
              }}
              className="w-full h-[350px] lg:mb-0 md:mb-0 mb-[15px] lg:mr-[25px] md:mr-[25px] mr-0  bg-cover bg-center clientBox"
            >
              <div className="w-full h-full bg-gradient-to-r from-[rgba(21,21,21,0.5)] to-[rgba(21,21,21,0.5)] p-10 text-white">
                <h1 className="mt-3 font-extrabold text-5xl">35+</h1>
                <h3 className="mt-3 font-semibold text-2xl">
                  Worldwide Work Pair
                </h3>
                <p className="mt-3 text-sm">
                  To succeed, every software solution must be deeply integrated
                  into the existing tech environment..
                </p>
              </div>
            </div>
            <div
              style={{ backgroundImage: "url('b.jpg')" }}
              className="w-full h-[350px]  bg-cover bg-center clientBox"
            >
              <div className="w-full h-full bg-gradient-to-r from-[rgba(21,21,21,0.5)] to-[rgba(21,21,21,0.5)] p-10 text-white">
                <h1 className="mt-3 font-extrabold text-5xl">40k</h1>
                <h3 className="mt-3 font-semibold text-2xl">Happy Clients</h3>
                <p className="mt-3 text-sm">
                  To succeed, every software solution must be deeply integrated
                  into the existing tech environment..
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* manage Who we are middle box */}
        <div className="absolute lg:top-[2%] md:top-[5%] w-full flex items-center justify-center">
          <div className="black__container   lg:pt-64 md:pt-44 pt-16">
            <h4 className="text-white font-semibold text-md text-center">
              Who We Are
            </h4>
            <h1 className="font-bold md:text-3xl text-lg text-white my-4 text-center lg:px-72 md:px-34 px-2 ">
              We deal with the aspects of professional IT Services
            </h1>
            <div className="grid-1 mt-16 px-16 lg:mb-[350px] md:mb-24">
              {box.map(({ icon, title, desc }) => (
                <div className="bg-white customBox  py-16 px-8 text-center">
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
        {/* manage Who we are last box */}

        <div className="md:flex items-center justify-center box-border">
          <div className="absolute lg:top-[90%] md:top-[100%]  lg:w-[1400px] md:w-auto w-auto lg:h-[450px] md:h-auto  bg-[#0060FF] p-16  rounded-md box-border">
            <h4 className="text-white font-semibold  text-md text-center">
              Special Services
            </h4>
            <h1 className="font-semibold md:text-3xl text-lg text-white my-4 text-center md:px-40 px-2 ">
              We deal with the aspects of professional IT Services
            </h1>

            <div className="grid-2 mt-16 lg:py-8 lg:px-16">
              {boxTwo.map(({ icon, title, desc }) => (
                <div className="bg-[#F5F5F5] serviceBox  p-8 text-left">
                  <p className="text-4xl  text-[#0060FF]">{icon}</p>
                  <h5 className="my-4 font-semibold">{title}</h5>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
