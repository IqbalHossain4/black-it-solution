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
        <div className="flex items-center justify-between">
          {/* contact info */}
          <div className="text-white flex items-center gap-6">
            <span className="flex items-center gap-2">
              <FaMailBulk /> <p>info@blackmail.com</p>
            </span>
            <span className="flex items-center gap-2">
              <FaPhone />
              <p>+8801955236809</p>
            </span>
          </div>
          {/* social info */}
          <div className="text-white flex items-center gap-4">
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
