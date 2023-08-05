"use client";
import {
  FaFacebook,
  FaGoogle,
  FaLinkedin,
  FaMailchimp,
  FaMap,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div style={{ backgroundImage: "url('footer.jpeg" }}>
      <div className="black__container pt-20">
        <div className="grid-1">
          <div className="flex flex-col gap-6 text-white">
            <div className="flex flex-col">
              <div className="w-[50px] h-[50px]">
                <img src={"logo.png"} alt="black_it_solutions" />
              </div>
              <p className="text-xs font-semibold">IT Service & Technology </p>
            </div>
            <p>
              We are the best world Information Technology Company. Providing
              the highest quality in hardware & Network solutions. About more
              than 25 years of experience and 1000 of innovative achievements.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="py-4 px-4 bg-[#0060ff] transition-all duration-100 hover:bg-black rounded"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="py-4 px-4 bg-[#0060ff] transition-all duration-100 hover:bg-black rounded"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="py-4 px-4 bg-[#0060ff] transition-all duration-100 hover:bg-black rounded"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="py-4 px-4 bg-[#0060ff] transition-all duration-100 hover:bg-black rounded"
              >
                <FaGoogle />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6 text-white">
            <h4>Quick Links</h4>
            <ul>
              <li>&gt;&gt; Managed IT services</li>
              <li className="mt-2">&gt;&gt; Cloud Services</li>
              <li className="mt-2">&gt;&gt; IT support & helpdesk</li>
              <li className="mt-2">&gt;&gt; Cyber security</li>
              <li className="mt-2">&gt;&gt; Custom Software</li>
              <li className="mt-2">&gt;&gt; Free Consultation</li>
              <li className="mt-2">&gt;&gt; Our Business Growth</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 text-white">
            <h4>Resent Post</h4>
            <div className="flex items-center gap-6 text-white">
              <img
                src={"post1.jpg"}
                className="w-[80px] h-[80px]"
                alt="post_logo"
              />
              <div>
                <h5>Define World Best IT Solution Technology</h5>
                <p>05/08/2023</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-white">
              <img
                src={"post2.jpg"}
                className="w-[80px] h-[80px]"
                alt="post_logo"
              />
              <div>
                <h5>PHP Frameworks You Need To Use Anywhere</h5>
                <p>05/08/2023</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 text-white">
            <h4>Contact Us</h4>
            <div className="flex items-center gap-6 text-white">
              <FaMap className="w-[40px] h-[40px]" />
              <div>
                <h4>Address</h4>
                <p className="text-white transition-all duration-100 hover:text-[#0060ff]">
                  Dhaka/Bangladesh
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-white">
              <FaPhone className="w-[40px] h-[40px]" />
              <div>
                <h4>Phone</h4>
                <p className="text-white transition-all duration-100 hover:text-[#0060ff]">
                  +8801955236709
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-white">
              <FaMailchimp className="w-[40px] h-[40px]" />
              <div>
                <h4>E-mail</h4>
                <p className="text-white transition-all duration-100 hover:text-[#0060ff]">
                  support@black.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28 ">
          <hr />
          <div className="md:flex items-center justify-between text-white mt-4 pb-8">
            <p>Copyright © 2023 by expert-themes. All Rights Reserved.</p>
            <ul className="flex items-center gap-4">
              <li className="border-e-2 pe-2">
                <a href="#">About Us</a>
              </li>
              <li className="border-e-2 pe-2">
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
