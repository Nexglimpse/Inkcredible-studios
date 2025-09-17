"use client";
import { useState } from "react";
import { Check, Sparkles } from "lucide-react";

const pricingData = {
  "Vector Service": {
    weekly: {
      originalPrice: "$499",
      price: "$399",
      period: "per week",
      description: "Perfect for basic design needs",
      credits: "100 job credits per month",
      turnaround: "Turn around time 2 hours",
      features: [
        "100 job credits per month",
        "Turn around time 2 hours",
        "Dedicated designer",
        "24/6 support",
      ],
    },
    monthly: {
      originalPrice: "$1199",
      price: "$999",
      period: "per month",
      description: "Perfect for manufacturers",
      credits: "500 job credits per month",
      turnaround: "Turn around time 2 hours",
      features: [
        "500 job credits per month",
        "Turn around time 2 hours",
        "Dedicated designer",
        "24/6 support",
      ],
    },
  },
  "Template Placement": {
    weekly: {
      originalPrice: "$399",
      price: "$299",
      period: "per week",
      description: "Perfect for template customization",
      credits: "50 template placements per month",
      turnaround: "Turn around time 1 hour",
      features: [
        "50 template placements per month",
        "Turn around time 1 hour",
        "Template library access",
        "Priority support",
      ],
    },
    monthly: {
      originalPrice: "$999",
      price: "$799",
      period: "per month",
      description: "Perfect for high-volume placement",
      credits: "300 template placements per month",
      turnaround: "Turn around time 1 hour",
      features: [
        "300 template placements per month",
        "Turn around time 1 hour",
        "Template library access",
        "Priority support",
        "Custom templates",
      ],
    },
  },
  "Production Ready Package": {
    weekly: {
      originalPrice: "$699",
      price: "$599",
      period: "per week",
      description: "Perfect for production workflows",
      credits: "25 production packages per month",
      turnaround: "Turn around time 4 hours",
      features: [
        "25 production packages per month",
        "Turn around time 4 hours",
        "Quality assurance",
        "Production files",
        "Revision rounds",
      ],
    },
    monthly: {
      originalPrice: "$1999",
      price: "$1599",
      period: "per month",
      description: "Perfect for enterprise production",
      credits: "150 production packages per month",
      turnaround: "Turn around time 4 hours",
      features: [
        "150 production packages per month",
        "Turn around time 4 hours",
        "Quality assurance",
        "Production files",
        "Unlimited revisions",
        "Account manager",
      ],
    },
  },
};

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("Vector Service");
  const tabs = [
    "Vector Service",
    "Template Placement",
    "Production Ready Package",
  ];

  const currentData = pricingData[activeTab];

  return (
    <section id="pricing">
      <div className="px-4.5 md:px-10 xl:px-15 mt-15 md:mt-20 lg:mt-30">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-center text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] gilroy-sb leading-snug text-orange-500">
            OUR SUBSCRIPTIONS
          </h1>
          <h2 className="text-center text-[26px] md:text-[34px] lg:text-[38px] xl:text-[40px] mt-3 gilroy-b leading-snug ">
            Pick a plan to start saving
          </h2>
          <p className="text-black text-md max-w-3xl mx-auto md:text-[18px] lg:text-lg xl:text-xl gilroy-m mt-2 text-center ">
            Start with any plan and save thousands every month
          </p>
        </div>

        {/* Tabs */}
        {/* <div className="flex justify-center mb-7 md:mb-10 lg:mb-14">
          <div className="md:text-md md:flex border border-gray-200 rounded-lg p-1 relative overflow-hidden">
            <div
              className="absolute top-1 bottom-1 bg-orange-500 rounded-md transition-all duration-300 ease-in-out"
              style={{
                left: `${tabs.indexOf(activeTab) * (100 / tabs.length)}%`,
                width: `${100 / tabs.length}%`,
                transform: "translateX(4px)",
                right: "4px",
              }}
            />
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative z-10 w-full md:w-fit gilroy-m px-6 py-2 rounded-md transition-all duration-300 ease-in-out ${
                  activeTab === tab
                    ? "text-white"
                    : "text-gray-800 hover:text-gray-900"
                } ${tab !== "Vector Service" ? "mt-1 md:mt-0" : ""}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div> */}
        <div className="flex justify-center mb-7 md:mb-10 lg:mb-14">
          <div className="md:text-md md:flex border border-gray-200 rounded-lg p-1 relative overflow-hidden">
            <button
              onClick={() => setActiveTab("Vector Service")}
              className={`w-full md:w-fit gilroy-m px-6 py-2 ${
                activeTab == "Vector Service"
                  ? "bg-orange-500 text-white"
                  : "text-black"
              }  rounded-md gilroy-m`}
            >
              Vector Service
            </button>
            <button
              onClick={() => setActiveTab("Template Placement")}
              className={`w-full md:w-fit gilroy-m px-6 py-2 ${
                activeTab == "Template Placement"
                  ? "bg-orange-500 text-white"
                  : "text-black"
              }  rounded-md gilroy-m`}
            >
              Template Placement
            </button>
            <button
              onClick={() => setActiveTab("Production Ready Package")}
              className={`w-full md:w-fit gilroy-m px-6 py-2 ${
                activeTab == "Production Ready Package"
                  ? "bg-orange-500 text-white"
                  : "text-black"
              }  rounded-md gilroy-m`}
            >
              Production Ready Package
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div
          key={activeTab}
          className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto animate-in fade-in duration-500"
        >
          {/* Weekly Plan */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm transform transition-all duration-300 hover:shadow-md">
            <h3 className="gilroy-b text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">
              Weekly Plan
            </h3>

            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-lg lg:text-xl gilroy-sb text-gray-700 line-through mr-1">
                  {currentData.weekly.originalPrice}
                </span>
                <span className="text-3xl lg:text-[34px] mr-1 gilroy-sb">
                  $
                </span>
                <span className="text-3xl lg:text-[34px] font-bold text-gray-900 gilroy-sb">
                  {currentData.weekly.price.replace("$", "")}
                </span>
                <span className="text-gray-700 ml-2 gilroy-sb text-md lg:text-lg">
                  {currentData.weekly.period}
                </span>
              </div>
              <p className="text-black mt-2 gilroy-sb">
                {currentData.weekly.description}
              </p>
            </div>

            <button className="w-full gilroy-sb border py-3 px-6 rounded-full font-medium hover:bg-[#FF8419] hover:border-[#FF8419] hover:text-white transition-all duration-300 mb-8">
              Choose Subscription
            </button>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4 gilroy-sb">
                Features
              </h4>
              <ul className="space-y-3 gilroy-m">
                {currentData.weekly.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-800">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Monthly Plan - Popular */}
          <div className="bg-white border-2 border-orange-500 rounded-2xl p-8 shadow-sm relative transform transition-all duration-300 hover:shadow-lg">
            {/* Popular Badge */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
              <span className="flex justify-center items-center gap-1 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                <Sparkles size={16} /> Popular Plan
              </span>
            </div>

            <h3 className="gilroy-b text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">
              Monthly Plan
            </h3>

            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-lg lg:text-xl gilroy-sb text-gray-700 line-through mr-1">
                  {currentData.monthly.originalPrice}
                </span>
                <span className="text-3xl lg:text-[34px] mr-1 gilroy-sb">
                  $
                </span>
                <span className="text-3xl lg:text-[34px] font-bold text-gray-900 gilroy-sb">
                  {currentData.monthly.price.replace("$", "")}
                </span>
                <span className="text-gray-700 ml-2 gilroy-sb text-md lg:text-lg">
                  {currentData.monthly.period}
                </span>
              </div>
              <p className="text-black mt-2 gilroy-sb">
                {currentData.monthly.description}
              </p>
            </div>

            <button className="gilroy-sb w-full bg-orange-500 text-white py-3 px-6 rounded-full font-medium hover:bg-orange-600 transition-all duration-300 mb-8">
              Choose Subscription
            </button>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4 gilroy-sb">
                Features
              </h4>
              <ul className="space-y-3 gilroy-m">
                {currentData.monthly.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-800">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
