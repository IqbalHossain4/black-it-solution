import Image from "next/image";
import CustomBtn from "../CustomBtn/CustomBtn";

const Banner = () => {
  return (
    <div className="carousel w-full mt-12 rounded ">
      <div id="slide1" className=" carousel-item relative md:h-[500px] w-full">
        <img src={"banner1.jpeg"} className="w-full  rounded" />

        <div className=" absolute left-0  h-full  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className=" text-white ms-24 md:mt-24 mt-4">
            <h4 className="my-4 font-semibold">IT Business Consulting</h4>
            <h1 className="font-extrabold md:text-6xl text-2xl text-white">
              Our Agency Provide
            </h1>
            <h1 className="font-extrabold md:text-6xl text-2xl text-white my-4">
              Best IT Solution
            </h1>
            <p>
              we are 100+ professional software engineers with more than
              <br />
              10 years of experience in delivering superior products
            </p>
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
            <h4 className="my-4 font-semibold">IT Business Consulting</h4>
            <h1 className="font-extrabold md:text-6xl text-2xl text-white">
              Our Agency Provide
            </h1>
            <h1 className="font-extrabold md:text-6xl text-2xl text-white my-4">
              Best IT Solution
            </h1>
            <p>
              we are 100+ professional software engineers with more than
              <br />
              10 years of experience in delivering superior products
            </p>
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
            <h4 className="my-4 font-semibold">IT Business Consulting</h4>
            <h1 className="font-extrabold md:text-6xl text-2xl text-white">
              Our Agency Provide
            </h1>
            <h1 className="font-extrabold md:text-6xl text-2xl text-white my-4">
              Best IT Solution
            </h1>
            <p>
              we are 100+ professional software engineers with more than
              <br />
              10 years of experience in delivering superior products
            </p>
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
