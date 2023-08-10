import CustomBtn from "@/components/CustomBtn/CustomBtn";
import { FaArrowRight, FaSearch } from "react-icons/fa";

const Projects = () => {
  const caseBox = [
    {
      images: "https://img.lovepik.com//photo/50084/9672.jpg_300.jpg",
      title: "Social Media Trend",
      subTitle: "Ideas/Technology",
    },
    {
      images:
        "https://www.messagingservice.com/wp-content/uploads/2015/06/Hosted-PBX-vs-Traditional-PBX-600x394.jpg",
      title: "Social Media App",
      subTitle: "Ideas/Technology",
    },
    {
      images:
        "https://images.squarespace-cdn.com/content/v1/598b477817bffc79a0cb1a64/1536959864470-R166SSXSGS7R3FRIZZQL/Estate+Planning+for+Entrepreneurs+-+Postic+%26+Bates.jpg",
      title: "Marketing Plan",
      subTitle: "Ideas/Technology",
    },
    {
      images:
        "https://e1.pxfuel.com/desktop-wallpaper/707/263/desktop-wallpaper-digital-marketing-online-marketing.jpg",
      title: "Suucess Trads",
      subTitle: "Ideas/Technology",
    },
    {
      images:
        "https://zenmedia.com/wp-content/uploads/2021/12/shutterstock_1084540781.jpg",
      title: "Tranding Social",
      subTitle: "Ideas/Technology",
    },
    {
      images:
        "https://baalspots.com/wp-content/uploads/2022/09/seo-inflation@2x.webp",
      title: "Business Trads",
      subTitle: "Ideas/Technology",
    },
  ];

  return (
    <div className="py-24">
      <h4 className="text-[#0060ff] font-semibold text-md text-center ">
        Latest Case Studies
      </h4>
      <div>
        <div className="my-4 text-center  lg:px-72 md:px-34 px-2">
          <h1 className="font-bold md:text-3xl text-lg">
            Reads Now Our Recent Projects Studies
          </h1>
        </div>
      </div>
      <div className="black__container">
        <div className="grid-2 mt-16">
          {caseBox.map(({ images, title, subTitle }) => (
            <div
              style={{ backgroundImage: `url(${images})` }}
              className="caseBox h-[350px] bg-cover bg-center"
            >
              <div className="caseWrap">
                <div className="w-full h-full flex items-center justify-center">
                  <FaSearch className=" text-4xl bg-white rounded-full p-2" />
                </div>
                <div className="caseChild">
                  <div className="text-white">
                    <h3>{title}</h3>
                    <p>{subTitle}</p>
                  </div>
                  <button>
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <h4 className="text-[#0060ff] font-semibold text-xs mb-4">
            We Have Done More Than 1K Projects in Last 3 Years, With 100%
            Satisfaction.
          </h4>
          <div className="mt-8">
            <CustomBtn title={"View All"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
