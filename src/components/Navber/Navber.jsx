"use client";
import Link from "next/link";
import { useState } from "react";
const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const navOptions = (
    <>
      <li className="text-white">HOME</li>
      <li className="text-white">ABOUT</li>
      <li className="text-white">SERVICES</li>
      <li className="text-white">PROJECTS</li>
      <li className="text-white">SHOP</li>
      <li className="text-white">BLOG</li>
      <li className="text-white">CONTACT US</li>
    </>
  );

  return (
    <div>
      <nav className="black__container">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-lg">
            <div className="flex flex-col items-center">
              <div className="w-[60px] h-[60px]">
                <img src={"logo.png"} alt="black_it_solutions" />
              </div>
              <p className="text-xs">IT Service & Technology </p>
            </div>
          </div>
          <button
            className="text-white focus:outline-none lg:hidden"
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
          <div className="hidden lg:flex space-x-4">{navOptions}</div>
        </div>
        {/* Responsive Dropdown */}
        {isOpen && <div className="lg:hidden mt-4">{navOptions}</div>}
      </nav>
    </div>
  );
};

export default Navber;
