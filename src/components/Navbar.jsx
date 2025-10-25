import React from "react";
import Logo from "../assets/images/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      {/* Sticky top notification bar */}
      <div className="w-full px-3.5 sm:px-10 lg:px-20 xl:px-40 flex justify-between items-center py-2 bg-[#FE9E49]">
        <h2 className="hidden md:flex md:text-[15px] lg:text-[18px] gilroy-sb text-black">
          Start your subscription today and save $4000 each month!
        </h2>
        <h2 className="md:hidden text-[12px] gilroy-sb text-black">
          Start saving $4000/month!
        </h2>
        <div className="flex items-center justify-center space-x-0">
          <a
            href="#pricing"
            className="bg-black text-[10px] md:text-[12px] lg:text-[15px] gilroy-sb border-2 border-black text-white px-2.5 sm:px-4 md:px-7 py-1.5 md:pb-2 rounded-full  transition"
          >
            Get Started
          </a>
          <a
            href="#portfolio"
            className="ml-1.5 md:ml-4 gilroy-sb text-[10px] md:text-[12px] lg:text-[15px] border-2 border-black text-black px-2.5 sm:px-4 md:px-7 py-1.5 md:pb-2 rounded-full hover:bg-black hover:text-white transition"
          >
            View Works
          </a>
        </div>
      </div>
      {/* End of top notification bar */}

      {/* Navbar Starts */}
      <div className="w-full px-4.5 sm:px-6 md:px-10 xl:px-15 flex justify-between items-center py-4 bg-black relative">
        {/* Logo */}
        <div>
          <a href="#">
            <img src={Logo} className="w-[130px] md:w-[160px]" alt="" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <ul className="flex gap-1 xl:gap-4">
            <li className="inline-block text-white text-[15px] gilroy-m mx-6 hover:text-[#FE9E49] transition cursor-pointer">
              <a href="#about">About Us</a>
            </li>
            <li className="inline-block text-white text-[15px] gilroy-m mx-6 hover:text-[#FE9E49] transition cursor-pointer">
              <a href="#whyUs"> Why Us</a>
            </li>
            <li className="inline-block text-white text-[15px] gilroy-m mx-6 hover:text-[#FE9E49] transition cursor-pointer">
              <a href="#pricing">Pricing</a>
            </li>
            <li className="inline-block text-white text-[15px] gilroy-m mx-6 hover:text-[#FE9E49] transition cursor-pointer">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="inline-block text-white text-[15px] gilroy-m mx-6 hover:text-[#FE9E49] transition cursor-pointer">
              <a href="#testimonials">Testimonials</a>
            </li>
          </ul>
        </div>

        {/* Desktop Get Started Button */}
        <div className="hidden lg:block">
          <a
            href="#pricing"
            className="bg-[#FF8419] text-md gilroy-sb text-white px-7 py-2.5 pb-3 rounded-xl transition duration-300 hover:shadow-[0_0px_18px_#FF8419]/60"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="lg:hidden flex items-center justify-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-[#FE9E49] transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out mt-1 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out mt-1 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={toggleMenu}
        ></div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-black z-50 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-800">
            <div>
              <a href="#">
                <img src={Logo} className="w-[160px]" alt="" />
              </a>
            </div>
            <button
              onClick={toggleMenu}
              className="text-white hover:text-[#FE9E49] transition-colors duration-200"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="px-6 py-8">
            <ul className="space-y-6">
              <li>
                <a
                  href="#about"
                  className="block text-white text-lg gilroy-m hover:text-[#FE9E49] transition-colors duration-200 py-2"
                  onClick={toggleMenu}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#whyUs"
                  className="block text-white text-lg gilroy-m hover:text-[#FE9E49] transition-colors duration-200 py-2"
                  onClick={toggleMenu}
                >
                  Why Us
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="block text-white text-lg gilroy-m hover:text-[#FE9E49] transition-colors duration-200 py-2"
                  onClick={toggleMenu}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="block text-white text-lg gilroy-m hover:text-[#FE9E49] transition-colors duration-200 py-2"
                  onClick={toggleMenu}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="block text-white text-lg gilroy-m hover:text-[#FE9E49] transition-colors duration-200 py-2"
                  onClick={toggleMenu}
                >
                  Testimonials
                </a>
              </li>
            </ul>

            {/* Mobile Get Started Button */}
            <div className="mt-8 pt-6 border-t border-gray-800">
              <a
                href="#pricing"
                className="w-full bg-[#FF8419] text-lg gilroy-sb text-white  px-7 py-2.5 rounded-xl hover:bg-orange-500 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
