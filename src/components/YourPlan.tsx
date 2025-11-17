import React from "react";
import { ArrowRight } from "lucide-react";

const YourPlan = () => {
  return (
    <section id="whyUs">
      <div className="mt-15 md:mt-20 lg:mt-30 px-4.5 md:px-10 xl:px-15">
        <div>
          <h1 className="text-center text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] gilroy-sb leading-snug text-orange-500">
            THE RIGHT PLAN
          </h1>
          <h2 className="text-center text-[26px] md:text-[34px] lg:text-[38px] xl:text-[40px] mt-3 gilroy-b leading-snug ">
            Find the Plan That Suits You
          </h2>
          <p className="text-black text-md max-w-3xl mx-auto md:text-[18px] lg:text-lg xl:text-xl gilroy-m mt-2 text-center ">
            Confused about the right plan? Our guidance helps you decide, making
            your selection smooth and effortless
          </p>
        </div>

        <div className="container w-full mx-auto mt-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              className="bg-purple-300 p-6 rounded-2xl h-[270px] lg:h-[285px] relative  overflow-hidden lg:w-1/3"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-full bg-black w-10 h-10 flex items-center justify-center">
                  <h3 className="gilroy-b text-[20px] md:text-[22px] xl:text-[27px] text-white w-fit ">
                    1
                  </h3>
                </div>
                <h3 className="text-[20px] lg:text-[21px] xl:text-[29px] font-bold text-gray-800 m gilroy-b">
                  Vector Service
                </h3>
              </div>
              <p className="text-[14px] xl:text-[16px] gilroy-m">
                The Vector Redraw Plan focuses on delivering accurate vector
                outputs, ideal for logos, print artwork, and files needing sharp
                detail. Whether it’s client-supplied images, scans, or
                low-resolution logos, our team redraws everything with precision
                so it’s ready for proofs, templates, or production
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              className="bg-orange-300 p-6 rounded-2xl h-[270px] lg:h-[285px] relative  overflow-hidden lg:w-1/3"
            >
              <div className="flex lg:justify-center justify-start items-center lg:items-start gap-3 mb-3">
                <div className="rounded-full bg-black min-w-10 h-10 flex items-center justify-center mt-0.5">
                  <h3 className="gilroy-b text-[20px] md:text-[22px] xl:text-[27px] text-white w-fit ">
                    2
                  </h3>
                </div>

                <h3 className="text-[20px] lg:text-[21px] xl:text-[29px] font-bold text-gray-800 m gilroy-b">
                  Redraw & Template Placement
                </h3>
              </div>
              <p className="text-[14px] xl:text-[16px] gilroy-m">
                The Redraw & Template Placement Plan is perfect for distributors
                who need more than just vector outputs. Along with clean
                redraws, you also get ready-to-show template placements, making
                client presentations smoother and ensuring artwork is ready for
                production.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="bg-green-300 p-6 rounded-2xl h-[270px] lg:h-[285px] relative  overflow-hidden lg:w-1/3"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-full bg-black w-10 h-10 flex items-center justify-center">
                  <h3 className="gilroy-b text-[20px] md:text-[22px] xl:text-[27px] text-white w-fit ">
                    3
                  </h3>
                </div>
                <h3 className="text-[20px] lg:text-[21px] xl:text-[29px] font-bold text-gray-800 m gilroy-b">
                  Production Ready
                </h3>
              </div>
              <p className="text-[14px] xl:text-[16px] gilroy-m">
                The Production Ready Plan is designed for high-volume businesses
                that need all artwork services in one package. From vector
                redraws and template placements to final production-ready files
                for medals, awards, lapel pins and other custom products,
                everything meets strict production standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourPlan;
