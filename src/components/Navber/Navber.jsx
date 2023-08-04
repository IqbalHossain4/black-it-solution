"use client";
import Link from "next/link";
import { useState } from "react";
import { FaMinus } from "react-icons/fa";
const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const navOptions = (
    <>
      <li>HOME</li>
      <li>ABOUT</li>
      <li>SERVICES</li>
      <li>PROJECTS</li>
      <li>SHOP</li>
      <li>BLOG</li>
      <li>CONTACT US</li>
    </>
  );
  if (isOpen == true) {
    document.body.style.backgroundColor = "#191919";
  } else {
    document.body.style.backgroundColor = "white";
  }
  return (
    <div>
      <nav className="black__container">
        <div className="flex items-center justify-between">
          <div
            className={`lg:flex text-black ${
              isOpen == true ? " hidden" : "block"
            }`}
          >
            <div className="flex flex-col items-center">
              <div className="w-[50px] h-[50px]">
                <img src={"logo.png"} alt="black_it_solutions" />
              </div>
              <p className="text-xs text-black font-semibold">
                IT Service & Technology{" "}
              </p>
            </div>
          </div>
          <button
            className={`focus:outline-none lg:hidden ${
              isOpen == true ? " hidden" : "block"
            }`}
            onClick={toggleDropdown}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          <ul className="hidden lg:flex space-x-4">{navOptions}</ul>
        </div>
        {/* Responsive Dropdown */}
        {isOpen && (
          <div className="absolute w-2/3 h-screen right-0 text-black bg-white">
            <div className="flex items-center justify-around">
              <div className="flex flex-col items-center">
                <div className="w-[60px] h-[60px]">
                  <img src={"logo.png"} alt="black_it_solutions" />
                </div>
                <p className="text-xs text-black">IT Service & Technology </p>
              </div>
              <button onClick={() => setIsOpen(false)} className="">
                <FaMinus />
              </button>
            </div>
            <ul className="lg:hidden  mt-4 text-right px-2 ">{navOptions}</ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navber;
