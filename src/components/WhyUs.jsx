import React from "react";
import Rocket from "../assets/images/rocket.png";
import Invoice from "../assets/images/invoice.png";
import Task from "../assets/images/tasks.png";
import Money from "../assets/images/money.png";
import Time from "../assets/images/time.png";
import Portal from "../assets/images/portal.png";
import { ArrowRight } from "lucide-react";

const WhyUs = () => {
  return (
    <section id="whyUs" aria-labelledby="whyus-heading">
      <div className="mt-15 md:mt-20 lg:mt-30 px-4.5 md:px-10 xl:px-15">
        <div>
          <p className="text-center text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] gilroy-sb leading-snug text-orange-500">
            WHY CHOOSE US
          </p>
          <h2
            id="whyus-heading"
            className="text-center text-[26px] md:text-[34px] lg:text-[38px] xl:text-[40px] mt-3 gilroy-b leading-snug"
          >
            Why to Choose Our Subscription
          </h2>
          <p className="text-black text-md max-w-3xl mx-auto md:text-[18px] lg:text-lg xl:text-xl gilroy-m mt-2 text-center">
            Our subscription saves time, cuts overhead, and keeps costs
            predictable, making your creative process smooth and hassle-free.
          </p>
        </div>

        <div className="container w-full mx-auto mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1.5fr_1fr] gap-4">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <article
                data-aos="fade-down"
                data-aos-duration="500"
                className="bg-purple-300 p-6 rounded-2xl h-[220px] lg:h-[270px] relative overflow-hidden"
              >
                <h3 className="text-[20px] lg:text-[22px] xl:text-[29px] font-bold text-gray-800 mb-3 gilroy-b">
                  Simplified Admin & Invoicing
                </h3>
                <p className="text-[14px] xl:text-[16px] w-5/7 xl:w-3/5 gilroy-m">
                  One invoice per billing cycle, no tracking dozens of small
                  transactions. Easy accounting for your finance team.
                </p>
                <img
                  src={Invoice}
                  className="w-[125px] md:w-[130px] xl:w-[150px] rotate-6 absolute -bottom-10 -right-3"
                  alt="Invoice document illustration"
                  loading="lazy"
                  width="150"
                  height="auto"
                  aria-hidden="true"
                />
              </article>

              <article
                data-aos="fade-up"
                data-aos-duration="500"
                className="bg-pink-200 p-6 rounded-2xl h-[220px] lg:h-[320px] relative overflow-hidden"
              >
                <h3 className="text-[20px] lg:text-[22px] xl:text-[29px] font-bold text-gray-800 mb-3 gilroy-b">
                  Unlimited Briefs, One Price
                </h3>
                <p className="text-[14px] xl:text-[16px] w-5/7 xl:w-3/5 gilroy-m">
                  Send as many job requests as your quota allows. Whether
                  they're big or small. Unlike per-job billing, small requests
                  don't feel like a waste of money.
                </p>
                <img
                  src={Task}
                  className="w-[130px] md:w-[130px] xl:w-[170px] rotate-6 absolute -bottom-10 -right-3"
                  alt="Task checklist illustration"
                  loading="lazy"
                  width="170"
                  height="auto"
                  aria-hidden="true"
                />
              </article>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <article
                data-aos="fade-down"
                data-aos-duration="500"
                className="bg-orange-300 p-6 rounded-2xl h-[220px] lg:h-[350px] relative overflow-hidden flex flex-col justify-between items-start"
              >
                <div>
                  <h3 className="text-[20px] lg:text-[22px] xl:text-[29px] font-bold text-gray-800 mb-3 gilroy-b">
                    Personal Artwork Portal for every client
                  </h3>
                  <p className="text-[14px] xl:text-[16px] w-5/7 xl:w-3/5 gilroy-m">
                    Access your personal artwork portal anytime. Upload files,
                    track jobs, and view your complete history so nothing gets
                    lost.
                  </p>
                  <img
                    src={Portal}
                    className="w-[125px] md:w-[130px] lg:w-[190px] xl:w-[230px] rotate-6 absolute -bottom-10 -right-6 md:-bottom-5 lg:-bottom-10 md:-right-3 lg:-right-6"
                    alt="Client portal interface illustration"
                    loading="lazy"
                    width="230"
                    height="auto"
                    aria-hidden="true"
                  />
                </div>
                <a
                  href="#pricing"
                  className="hidden lg:flex gilroy-sb text-md text-white bg-black px-6 py-3 rounded-xl md:text-md xl:text-md items-center hover:bg-gray-800 transition"
                  aria-label="Start your subscription and get pricing details"
                >
                  <span className="xl:hidden">Get Started</span>
                  <span className="hidden xl:inline">
                    Start Your Subscription
                  </span>
                  <span className="ml-2" aria-hidden="true">
                    <ArrowRight />
                  </span>
                </a>
              </article>

              <article
                data-aos="fade-up"
                data-aos-duration="500"
                className="bg-green-200 p-6 rounded-2xl h-[220px] lg:h-[240px] relative overflow-hidden"
              >
                <h3 className="text-[20px] lg:text-[22px] xl:text-[29px] font-bold text-gray-800 mb-3 gilroy-b">
                  Predictable Costs = No Budget Surprises
                </h3>
                <p className="text-[14px] xl:text-[16px] w-5/7 xl:w-3/5 gilroy-m">
                  You know exactly what you'll pay every week/month – no
                  fluctuating invoices.
                </p>
                <img
                  src={Money}
                  className="w-[125px] md:w-[125px] xl:w-[150px] rotate-6 absolute -bottom-6 right-0"
                  alt="Money and budget illustration"
                  loading="lazy"
                  width="150"
                  height="auto"
                  aria-hidden="true"
                />
              </article>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              <article
                data-aos="fade-down"
                data-aos-duration="500"
                className="bg-blue-200 p-6 rounded-2xl h-[220px] lg:h-[320px] relative overflow-hidden"
              >
                <h3 className="text-[20px] lg:text-[22px] xl:text-[29px] font-bold text-gray-800 mb-3 gilroy-b">
                  Cut Artwork Overhead
                </h3>
                <p className="text-[14px] xl:text-[16px] w-5/7 lg:w-4/5 xl:w-3/5 gilroy-m">
                  Saves staff time spent searching for freelancers, negotiating
                  rates, processing payments. Your team focuses on sales &
                  customers, not artwork logistics.
                </p>
                <img
                  src={Rocket}
                  className="w-[125px] md:w-[140px] xl:w-[170px] -rotate-6 absolute -bottom-8 -right-2"
                  alt="Rocket launching illustration representing efficiency"
                  loading="lazy"
                  width="170"
                  height="auto"
                  aria-hidden="true"
                />
              </article>
              <article
                data-aos="fade-up"
                data-aos-duration="500"
                className="hidden lg:block bg-red-200 p-6 rounded-2xl h-[220px] lg:h-[270px] relative overflow-hidden"
              >
                <h3 className="text-[20px] lg:text-[22px] xl:text-[29px] font-bold text-gray-800 mb-3 gilroy-b">
                  Eliminates Approval Delays
                </h3>
                <p className="text-[14px] xl:text-[15px] w-5/7 lg:w-4/5 xl:w-3/5 gilroy-m">
                  With per-job, you might wait for quotes or approvals before
                  starting work. Subscription = immediate start after you submit
                  the job.
                </p>
                <img
                  src={Time}
                  className="w-[125px] md:w-[105px] xl:w-[130px] rotate-6 absolute -bottom-4 -right-5"
                  alt="Clock and time management illustration"
                  loading="lazy"
                  width="130"
                  height="auto"
                  aria-hidden="true"
                />
              </article>
            </div>

            <div className="lg:hidden flex flex-col gap-4">
              <article className="bg-red-200 p-6 rounded-2xl h-[220px] lg:h-[270px] relative overflow-hidden">
                <h3 className="text-[20px] lg:text-[22px] xl:text-[29px] font-bold text-gray-800 mb-3 gilroy-b">
                  Eliminates Approval Delays
                </h3>
                <p className="text-[14px] xl:text-[15px] w-5/7 xl:w-3/5 gilroy-m">
                  per-job, you might wait for quotes or approvals before
                  starting work. Subscription = immediate start after you submit
                  the job.
                </p>
                <img
                  src={Time}
                  className="w-[125px] md:w-[105px] xl:w-[130px] rotate-6 absolute -bottom-2 -right-0"
                  alt="Clock and time management illustration"
                  loading="lazy"
                  width="130"
                  height="auto"
                  aria-hidden="true"
                />
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
