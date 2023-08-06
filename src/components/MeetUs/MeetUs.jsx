import CustomBtnTwo from "../CustomBtn/CustomBtnTwo";

const MeetUs = () => {
  return (
    <div className="bg-[#0060ff] py-24 lg:mt-16 md:mt-[1150px]  mt-[1800px] mb-24   box-border">
      <div className="black__container">
        <div className="md:flex items-center justify-between">
          <div className="lg:px-24">
            <h1 className="text-white lg:font-bold md:font-semibold lg:text-4xl md:text-2xl text-sm lg:mb-0 md:mb-0 mb-4 ">
              Preparing For Your Business Success With IT Solution
            </h1>
          </div>
          <div className="lg:w-1/2">
            <CustomBtnTwo title={"Meet With Us"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetUs;
