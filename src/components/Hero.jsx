import { ArrowRight } from "lucide-react";
import React from "react";
import Disney from "../assets/images/disney.png";
import Harley from "../assets/images/harley.png";
import HardRock from "../assets/images/hard-rock.png";
import Universal from "../assets/images/universal.png";
import Vid from "../assets/videos/vid.webm";

const Hero = () => {
  return (
    <div className="flex justify-center  min-h-[calc(100vh-120px)] bg-[linear-gradient(0deg,_#ffffff_30%,_rgba(255,203,142,0.66)_100%)] px-2 ">
      <div className="px-4.5 md:px-0 ">
        <h1
          data-aos="fade-up"
          data-aos-duration="500"
          className="text-center text-[30px] md:text-[40px] lg:text-[40px] xl:text-[72px] pt-12 md:pt-16 gilroy-b leading-snug"
        >
          <span className="hidden md:flex justify-center items-center">
            Subscription That Saves You
            <br /> $4000 a Month !
          </span>{" "}
          <span className="md:hidden">
            Subscription That Saves You $4000 a Month !
          </span>
        </h1>

        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-md md:text-lg xl:text-xl mt-5 gilroy-m leading-snug text-center md:w-1/2 flex justify-center mx-auto"
        >
          Get artwork services with unlimited revisions, predictable pricing,
          priority delivery, and your own secure artwork portal. Save time, cut
          costs, and never lose a file, all with zero hidden charges.
        </h2>

        <div className="flex items-center justify-center mt-13">
          <a
            href="#pricing"
            className="flex items-center lg:border-2 border-[#FF8419] bg-[#FF8419] text-[13px] md:text-[14px] lg:text-[17px] gilroy-sb text-white px-4 md:px-7 py-2.5 md:py-3.5 rounded-xl transition duration-300 hover:shadow-[0_0px_18px_#FF8419]/50"
          >
            Start Your Subscription
            <span className="ml-1 md:ml-3 flex items-center">
              <ArrowRight />
            </span>
          </a>

          <a
            href="#portfolio"
            className="ml-4 md:ml-6 gilroy-sb text-[13px] md:text-[14px] lg:text-[17px] border-2 border-black text-black px-4 md:px-7  py-2.5 md:py-3.5 rounded-xl  hover:bg-black hover:text-white transition"
          >
            View Works
          </a>
        </div>

        <div className="mt-10 flex flex-col justify-center items-center">
          <h3 className="gilroy-sb md:text-md lg:text-lg mb-4">
            Trusted By 500+ Leading Companies
          </h3>

          {/* Marquee Wrapper */}
          <div className="relative overflow-hidden w-5/6 lg:w-2/5 mt-8">
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

      {/* <div className="w-1/2 flex justify-center items-start pt-12 md:pt-20 ">
        <video
          className="w-[500px] h-[500px]"
          src={Vid}
          autoPlay
          muted
          loop
        ></video>
      </div> */}
    </div>
  );
};

export default Hero;
