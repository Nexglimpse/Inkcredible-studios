import React from "react";
import Ppai from "../assets/images/ppai.png";
import Asi from "../assets/images/asi.png";
const About = () => {
  return (
    <div className="px-4.5 md:px-10 xl:px-15 lg:flex justify-start">
      <div className="lg:w-1/2 ">
        <h1 className="text-center lg:text-start text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] gilroy-sb leading-snug text-orange-500">
          ABOUT US
        </h1>
        <h2 className="text-center lg:text-start text-[26px] md:text-[34px] lg:text-[38px] xl:text-[40px] mt-3 gilroy-b leading-snug ">
          About Inkcredible Studios
        </h2>
        <p className="text-justify md:text-center lg:text-start text-md md:text-lg xl:text-[20px] mt-3 gilroy-m leading-snug text-black">
          Since 2011, Inkcredible Studios has partnered with U.S. promotional
          product manufacturers, completing 1M+ jobs with precision and speed.
          We specialize in vector artwork, mockups, patches, pins, and
          more—often delivering in just 1 hour. As PPAI and ASI members, we know
          your industry’s pace. With transparent pricing, personalized service,
          and a secure portal, we ensure reliability without hidden costs or
          headaches.
        </p>
        <div className="mt-10 flex justify-center lg:justify-start space-x-4 md:space-x-12 lg:space-x-8">
          <div className="border-r md:border-r-2 pr-4 xl:pr-10 text-center md:text-start">
            <h2 className="gilroy-b text-[32px] md:text-[38px] lg:text-[42px] xl:text-5xl">
              15+
            </h2>
            <p className="gilroy-m text-md xl:text-lg">Years of Experience</p>
          </div>
          <div className="border-r md:border-r-2 pr-4 xl:pr-10 text-center md:text-start">
            <h2 className="gilroy-b text-[32px] md:text-[38px] lg:text-[42px] xl:text-5xl">
              500+
            </h2>
            <p className="gilroy-m text-md xl:text-lg">Satisfied Clients</p>
          </div>
          <div className=" text-center md:text-start">
            <h2 className="gilroy-b text-[32px] md:text-[38px] lg:text-[42px] xl:text-5xl">
              1M+
            </h2>
            <p className="gilroy-m text-md xl:text-lg">Orders Processed</p>
          </div>
        </div>
      </div>
      <div className="mt-15 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end items-center space-x-6 xl:space-x-10 ">
        <div className="border-r pr-10 flex flex-col items-center">
          <img
            src={Ppai}
            className="h-[50px] md:h-[70px] xl:h-[110px]"
            alt=""
          />
          <p className="pt-10 gilroy-sb text-center lg:text-lg xl:text-xl">
            PPAI Membership no: 895883
          </p>
        </div>
        <div className="flex flex-col  items-center">
          <img src={Asi} className="h-[50px] md:h-[70px] xl:h-[110px]" alt="" />
          <p className="pt-10 gilroy-sb text-center lg:text-lg xl:text-xl">
            ASI Membership no: 232758
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
