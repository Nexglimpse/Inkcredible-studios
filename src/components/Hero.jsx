import { ArrowRight } from "lucide-react";
import React from "react";
import Disney from "../assets/images/disney.png";
import Harley from "../assets/images/harley.png";
import HardRock from "../assets/images/hard-rock.png";
import Universal from "../assets/images/universal.png";
import Vid from "../assets/videos/vid.webm";

const Hero = () => {
  return (
    <section
      className="flex justify-center min-h-[calc(100vh-120px)] bg-[linear-gradient(0deg,_#ffffff_30%,_rgba(255,203,142,0.66)_100%)] px-2"
      aria-label="Hero section"
    >
      <div className="px-4.5 md:px-0">
        <h1
          data-aos="fade-up"
          data-aos-duration="500"
          className="text-center text-[30px] md:text-[40px] lg:text-[40px] xl:text-[72px] pt-12 md:pt-16 gilroy-b leading-snug"
        >
          <span className="hidden md:flex justify-center items-center">
            Subscription That Saves You
            <br /> $4000 a Month!
          </span>
          <span className="md:hidden">
            Subscription That Saves You $4000 a Month!
          </span>
        </h1>

        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-md md:text-lg xl:text-xl mt-5 gilroy-m leading-snug text-center md:w-1/2 xl:w-[700px] flex justify-center mx-auto"
        >
          Get artwork services with unlimited revisions, predictable pricing,
          priority delivery, and your own secure artwork portal. Save time, cut
          costs, and never lose a file, all with zero hidden charges.
        </p>

        <div
          className="flex items-center justify-center mt-13"
          role="navigation"
          aria-label="Primary actions"
        >
          <a
            href="#pricing"
            className="flex items-center lg:border-2 border-[#FF8419] bg-[#FF8419] text-[13px] md:text-[14px] lg:text-[17px] gilroy-sb text-white px-4 md:px-7 py-2.5 md:py-3.5 rounded-xl transition duration-300 hover:shadow-[0_0px_18px_#FF8419]/50"
            aria-label="View pricing and start your subscription"
          >
            Start Your Subscription
            <span className="ml-1 md:ml-3 flex items-center" aria-hidden="true">
              <ArrowRight />
            </span>
          </a>

          <a
            href="#portfolio"
            className="ml-4 md:ml-6 gilroy-sb text-[13px] md:text-[14px] lg:text-[17px] border-2 border-black text-black px-4 md:px-7 py-2.5 md:py-3.5 rounded-xl hover:bg-black hover:text-white transition"
            aria-label="View our portfolio of work"
          >
            View Works
          </a>
        </div>

        <div className="mt-10 flex flex-col justify-center items-center">
          <h2 className="gilroy-sb md:text-md lg:text-lg mb-4">
            Trusted By 500+ Leading Companies
          </h2>

          {/* Marquee Wrapper */}
          <div
            className="relative overflow-hidden w-5/6 lg:w-2/5 mt-8"
            aria-label="Trusted company logos"
          >
            {/* Left Gradient */}
            <div
              className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"
              aria-hidden="true"
            ></div>

            {/* Right Gradient */}
            <div
              className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"
              aria-hidden="true"
            ></div>

            <div className="flex space-x-12 animate-marquee-left">
              {/* Original Logos */}
              <img
                src={Disney}
                className="h-14 pt-2 object-contain"
                alt="Disney logo - trusted client"
                loading="lazy"
                width="auto"
                height="56"
              />
              <img
                src={Harley}
                className="h-16 object-contain"
                alt="Harley-Davidson logo - trusted client"
                loading="lazy"
                width="auto"
                height="64"
              />
              <img
                src={HardRock}
                className="h-16 object-contain"
                alt="Hard Rock Cafe logo - trusted client"
                loading="lazy"
                width="auto"
                height="64"
              />
              <img
                src={Universal}
                className="h-16 object-contain"
                alt="Universal Studios logo - trusted client"
                loading="lazy"
                width="auto"
                height="64"
              />

              {/* Duplicate Logos for seamless scrolling */}
              <img
                src={Disney}
                className="h-16 object-contain"
                alt=""
                aria-hidden="true"
                loading="lazy"
                width="auto"
                height="64"
              />
              <img
                src={Harley}
                className="h-16 object-contain"
                alt=""
                aria-hidden="true"
                loading="lazy"
                width="auto"
                height="64"
              />
              <img
                src={HardRock}
                className="h-16 object-contain"
                alt=""
                aria-hidden="true"
                loading="lazy"
                width="auto"
                height="64"
              />
              <img
                src={Universal}
                className="h-16 object-contain"
                alt=""
                aria-hidden="true"
                loading="lazy"
                width="auto"
                height="64"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-1/2 flex justify-center items-start pt-12 md:pt-20">
        <video
          className="w-[500px] h-[500px]"
          src={Vid}
          autoPlay
          muted
          loop
          aria-label="Promotional video showcasing our services"
        ></video>
      </div> */}
    </section>
  );
};

export default Hero;
