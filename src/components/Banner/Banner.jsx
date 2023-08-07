import Image from "next/image";
import CustomBtn from "../CustomBtn/CustomBtn";

const Banner = () => {
  return (
    <div className="carousel w-full lg:mt-0 mt-12 rounded ">
      <div id="slide1" className=" carousel-item relative md:h-[500px]  w-full">
        <img src={"banner1.jpeg"} className="w-full  rounded" />

        <div className=" absolute left-0  h-full  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className=" text-white ms-24 md:mt-24 mt-4">
            <h4 className="md:my-4 my-2 md:font-semibold font-normal ">
              IT Business Consulting
            </h4>
            <h1 className="lg:font-extrabold md:mt-4 mt-2 md:font-semibold font-normal lg:text-6xl mg:text-3xl text-sm text-white">
              Our Agency Provide
            </h1>
            <h1 className="lg:font-extrabold md:mt-4 mt-2 md:font-semibold font-normal lg:text-6xl mg:text-3xl text-sm text-white">
              Best IT Solution
            </h1>
            <div className="md:block hidden">
              <p className="md:text-md text-xs md:my-4  my-2">
                we are 100+ professional software engineers with more than
                <br />
                10 years of experience in delivering superior products
              </p>
            </div>
            <p className="mt-8">
              <CustomBtn title={"Learn More"} />
            </p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative md:h-[500px] w-full">
        <img src={"banner2.jpg"} className="w-full rounded" />
        <div className=" absolute left-0  h-full  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className=" text-white ms-24 md:mt-24 mt-4">
            <h4 className="md:my-4 my-2 md:font-semibold font-normal ">
              IT Business Consulting
            </h4>
            <h1 className="lg:font-extrabold md:mt-4 mt-2 md:font-semibold font-normal lg:text-6xl mg:text-3xl text-sm text-white">
              Our Agency Provide
            </h1>
            <h1 className="lg:font-extrabold md:mt-4 mt-2 md:font-semibold font-md lg:text-6xl mg:text-3xl text-2xl text-white">
              Best IT Solution
            </h1>
            <div className="md:block hidden">
              <p className="md:text-md text-xs md:my-4  my-2">
                we are 100+ professional software engineers with more than
                <br />
                10 years of experience in delivering superior products
              </p>
            </div>
            <p className="mt-8">
              <CustomBtn title={"Learn More"} />
            </p>
          </div>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative md:h-[500px] w-full">
        <img src={"banner3.jpg"} className="w-full rounded" />
        <div className=" absolute left-0  h-full  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className=" text-white ms-24 md:mt-24 mt-4">
            <h4 className="md:my-4 my-2 md:font-semibold font-normal ">
              IT Business Consulting
            </h4>
            <h1 className="lg:font-extrabold md:mt-4 mt-2 md:font-semibold font-normal lg:text-6xl mg:text-3xl text-sm text-white">
              Our Agency Provide
            </h1>
            <h1 className="lg:font-extrabold md:mt-4 mt-2 md:font-semibold font-md lg:text-6xl mg:text-3xl text-2xl text-white">
              Best IT Solution
            </h1>
            <div className="md:block hidden">
              <p className="md:text-md text-xs md:my-4  my-2">
                we are 100+ professional software engineers with more than
                <br />
                10 years of experience in delivering superior products
              </p>
            </div>
            <p className="mt-8">
              <CustomBtn title={"Learn More"} />
            </p>
          </div>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
