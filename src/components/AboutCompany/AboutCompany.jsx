import { FaAward, FaSurprise } from "react-icons/fa";
import CustomBtn from "../CustomBtn/CustomBtn";

const AboutCompany = () => {
  return (
    <div>
      <div className="black__container">
        <div className="flex-1 my-20 gap-8">
          <div>
            <h4 className="text-[#0060ff] font-semibold text-md">
              About Company
            </h4>
            <h1 className="font-bold mt-4">You Can not Use Up Creativity.</h1>
            <p className="text-sm my-4">
              Does any industry face a more complex audience journey and
              marketing sales process than B2B technology? Consider the number
              of people who influence a sale, the length of the decision-making
              cycle, the competing interests of the people who purchase,
              implement, manage, and use the technology. It’s a lot meaningful
              content here.
            </p>
            <div className="my-4">
              <div className="flex gap-4 items-start my-4">
                <FaAward className="text-4xl text-[#0060ff]" />
                <span>
                  <h5 className="font-bold">Experience</h5>
                  <p className="text-sm mt-2">
                    Our great team of more than 1400 software experts.
                  </p>
                </span>
              </div>
              <div className="flex gap-4 items-start mb-8">
                <FaSurprise className="text-4xl text-[#0060ff]" />
                <span>
                  <h5 className="font-bold">Quick Support</h5>
                  <p className="text-sm mt-2">
                    We’ll help you test bold new ideas while sharing your..
                  </p>
                </span>
              </div>
              <CustomBtn title={"Intro video"} />
            </div>
          </div>

          <div>
            <img
              src={
                "https://i.pinimg.com/originals/0c/91/b6/0c91b6a2f5b1277570285c55f4cff17a.png"
              }
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
