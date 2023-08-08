import CustomBtn from "../CustomBtn/CustomBtn";

const ContactUs = () => {
  return (
    <div>
      <div className="black__container">
        <div>
          <div className="hero py-24 bg-base-100 rounded-md">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100  md:w-1/2">
                <div className="card-body">
                  <h1 className="font-bold text-black md:text-xl text-lg md:pe-16 my-4">
                    You Don't Hesitate To Contact With Us, Now Say Hello......
                  </h1>
                  <div className="form-control ">
                    <div className="flex-1">
                      <div>
                        <input
                          type="text"
                          placeholder="Name"
                          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                          focus:outline-none focus:border-[#0060ff] focus:ring-1 focus:ring-sky-500
                          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                          invalid:border-pink-500 invalid:text-pink-600
                          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Email"
                          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                          focus:outline-none focus:border-[#0060ff] focus:ring-1 focus:ring-sky-500
                          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                          invalid:border-pink-500 invalid:text-pink-600
                          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-control ">
                    <div className="flex-1">
                      <div className="mt-4">
                        <input
                          type="text"
                          placeholder="Phone NO"
                          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                          focus:outline-none focus:border-[#0060ff] focus:ring-1 focus:ring-sky-500
                          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                          invalid:border-pink-500 invalid:text-pink-600
                          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        />
                      </div>
                      <div className="mt-4">
                        <input
                          type="text"
                          placeholder="Department"
                          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                          focus:outline-none focus:border-[#0060ff] focus:ring-1 focus:ring-sky-500
                          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                          invalid:border-pink-500 invalid:text-pink-600
                          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <textarea
                      className="w-full mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                      focus:outline-none focus:border-[#0060ff] focus:ring-1 focus:ring-sky-500
                      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                      invalid:border-pink-500 invalid:text-pink-600
                      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="form-control mt-6">
                    <CustomBtn title={"Send Message"} />
                  </div>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <img
                  src={
                    "https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg"
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
