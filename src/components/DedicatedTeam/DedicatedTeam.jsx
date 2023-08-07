import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const DedicatedTeam = () => {
  const options = [
    {
      name: "Jenifer Garcie",
      title: "Consultant Officer",
      image: "https://expert-themes.com/html/globex/images/resource/team-1.jpg",
    },
    {
      name: "Robert Liam",
      title: "Web Designer",
      image: "https://expert-themes.com/html/globex/images/resource/team-2.jpg",
    },
    {
      name: "Jessica Ethan",
      title: "Project Manager",
      image: "https://expert-themes.com/html/globex/images/resource/team-3.jpg",
    },
    {
      name: "Adaim Mrala",
      title: "IT Service Officer",
      image: "https://expert-themes.com/html/globex/images/resource/team-4.jpg",
    },
  ];
  return (
    <div className="py-24 bg-[#F5F5F5]">
      <div className="black__container">
        <div className="flex-1">
          <div>
            <h4 className="font-bold text-sm text-[#0060ff]">
              OUR DEDICATED TEAM
            </h4>
            <h1 className="font-bold md:text-3xl text-lg md:pe-16 mt-4">
              We have Large No of Expert Team Member
            </h1>
          </div>
          <div>
            <p>
              Our goal is to help our companies maintain or achieve best-
              in-class positions in their respective industries and our team
              works.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DedicatedTeam;
// facebook: <FaFacebook />,
// twitter: <FaTwitter />,
// instagram: <FaInstagram />,
