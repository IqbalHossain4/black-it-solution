"use client";
import {
  FaMailBulk,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaGlobe,
  FaGoogle,
} from "react-icons/fa";

const SubNavber = () => {
  return (
    <div className="navBer">
      <div className="black__container ">
        <div className="lg:flex items-center justify-between">
          {/* contact info */}
          <div className="hidden lg:flex items-center gap-6 text-white ">
            <span className="flex items-center gap-2">
              <FaMailBulk /> <p>info@blackmail.com</p>
            </span>
            <span className="flex items-center gap-2">
              <FaPhone />
              <p>+8801955236809</p>
            </span>
          </div>
          {/* social info */}
          <div className="flex items-center justify-center text-center  gap-4 text-white">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              {" "}
              <FaTwitter />
            </a>
            <a href="#">
              {" "}
              <FaGlobe />
            </a>
            <a href="#">
              <FaGoogle />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNavber;
