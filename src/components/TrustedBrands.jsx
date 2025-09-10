import React from "react";
import Disney from "../assets/images/disney.png";
import Harley from "../assets/images/harley.png";
import HardRock from "../assets/images/hard-rock.png";
import Universal from "../assets/images/universal.png";

const TrustedBrands = () => {
  return (
    <div className=" mt-30 px-4.5 md:px-10 xl:px-15">
      <div>
        <h1 className="text-center text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] gilroy-sb leading-snug text-orange-500">
          TRUSTED BRANDS
        </h1>
        <h2 className="text-center text-[26px] md:text-[34px] lg:text-[38px] xl:text-[40px] mt-3 gilroy-b leading-snug ">
          Trusted by World’s Leading Brands
        </h2>
        <p className="text-black text-md max-w-3xl mx-auto lg:text-lg xl:text-xl gilroy-m mt-2 text-center ">
          Delivering unique and impactful vector art trusted by brands
          worldwide.
        </p>
      </div>

      <div className="hidden lg:flex mt-17 justify-between items-center lg:px-18 xl:px-30">
        <img className="lg:w-[150px] xl:w-[170px]" src={Disney} alt="" />
        <img className="lg:w-[150px] xl:w-[170px]" src={Harley} alt="" />
        <img className="lg:w-[150px] xl:w-[170px]" src={HardRock} alt="" />
        <img className="lg:w-[150px] xl:w-[170px]" src={Universal} alt="" />
      </div>

      <div className="lg:hidden mt-10 flex flex-col space-y-12">
        <div className="flex justify-center items-center space-x-22">
          <img className="w-[120px] md:w-[130px]" src={Disney} alt="" />
          <img className="w-[120px] md:w-[130px]" src={Harley} alt="" />
        </div>
        <div className="flex justify-center items-center space-x-22">
          <img className="w-[120px] md:w-[130px]" src={HardRock} alt="" />
          <img className="w-[120px] md:w-[130px]" src={Universal} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TrustedBrands;
