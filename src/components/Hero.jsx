import { ArrowRight } from "lucide-react";
import React from "react";
import Disney from "../assets/images/disney.png";
import Harley from "../assets/images/harley.png";
import HardRock from "../assets/images/hard-rock.png";
import Universal from "../assets/images/universal.png";

const Hero = () => {
  return (
    <div className="h-screen bg-[linear-gradient(0deg,_#ffffff_30%,_rgba(255,203,142,0.66)_100%)]">
      <div className="lg:w-1/2 px-4.5 md:px-10 lg:px-0 lg:pl-10 xl:pl-15">
        <h1 className="text-center lg:text-start text-[30px] md:text-[40px] lg:text-[40px] xl:text-[52px] pt-12 md:pt-20 gilroy-b leading-snug">
          Subscription That Saves You $4000 a Month !
        </h1>

        <h2 className="text-md md:text-lg xl:text-xl mt-5 gilroy-m leading-snug text-center lg:text-start">
          Get artwork services with unlimited revisions, predictable pricing,
          priority delivery, and your own secure artwork portal. Save time, cut
          costs, and never lose a file, all with zero hidden charges.
        </h2>

        <div className="flex items-center justify-center lg:justify-start mt-13">
          <button className="flex items-center border-2 border-[#FF8419] bg-[#FF8419] text-[14px] lg:text-[17px] gilroy-sb text-white px-4 md:px-7 py-2.5 md:py-3.5 rounded-xl transition duration-300 hover:shadow-[0_0px_18px_#FF8419]/50">
            Start Your Subscription
            <span className="ml-3 flex items-center">
              <ArrowRight />
            </span>
          </button>

          <button className="ml-4 md:ml-6 gilroy-sb text-[14px] lg:text-[17px] border-2 border-black text-black px-4 md:px-7  py-2.5 md:py-3.5 rounded-xl  hover:bg-black hover:text-white transition">
            View Plans
          </button>
        </div>

        <div className="mt-10 flex flex-col justify-center items-center lg:items-start">
          <h3 className="gilroy-sb md:text-md lg:text-lg mb-4">
            Trusted By 500+ Leading Companies
          </h3>

          {/* Marquee Wrapper */}
          <div className="relative overflow-hidden w-5/6 lg:w-3/5 mt-8">
            {/* Left Gradient */}
            <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>

            {/* Right Gradient */}
            <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>

            <div className="flex space-x-12 animate-marquee-left">
              {/* Original Logos */}
              <img
                src={Disney}
                className="h-14 pt-2 object-contain"
                alt="Disney"
              />
              <img src={Harley} className="h-16 object-contain" alt="Harley" />
              <img
                src={HardRock}
                className="h-16 object-contain"
                alt="Hard Rock"
              />
              <img
                src={Universal}
                className="h-16 object-contain"
                alt="Universal"
              />

              {/* Duplicate Logos */}
              <img src={Disney} className="h-16 object-contain" alt="Disney" />
              <img src={Harley} className="h-16 object-contain" alt="Harley" />
              <img
                src={HardRock}
                className="h-16 object-contain"
                alt="Hard Rock"
              />
              <img
                src={Universal}
                className="h-16 object-contain"
                alt="Universal"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
