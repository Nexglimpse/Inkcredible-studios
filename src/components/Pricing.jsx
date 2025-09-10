import React from "react";
import { Check, Sparkles } from "lucide-react";

const Pricing = () => {
  return (
    <div className="px-4.5 md:px-10 xl:px-15 mt-30">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-center text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] gilroy-sb leading-snug text-orange-500">
          OUR SUBSCRIPTIONS
        </h1>
        <h2 className="text-center text-[26px] md:text-[34px] lg:text-[38px] xl:text-[40px] mt-3 gilroy-b leading-snug ">
          Pick a plan to start saving
        </h2>
        <p className="text-black text-xl gilroy-m mt-2">
          Start with any plan and save thousands every month
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-14">
        <div className="flex border border-gray-200 rounded-lg p-1">
          <button className="gilroy-m px-6 py-2 bg-orange-500 text-white rounded-md font-medium">
            Vector Service
          </button>
          <button className="gilroy-m px-6 py-2 text-gray-800 hover:text-gray-900 font-medium">
            Template Placement
          </button>
          <button className="gilroy-m px-6 py-2 text-gray-800 hover:text-gray-900 font-medium">
            Production Ready Package
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Weekly Plan */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h3 className="gilroy-b text-xl font-semibold text-gray-900 mb-6">
            Weekly Plan
          </h3>

          <div className="mb-6">
            <div className="flex items-baseline">
              <span className="text-xl gilroy-sb text-gray-700 line-through mr-1">
                $499
              </span>
              <span className="text-4xl mr-1 gilroy-sb">$</span>
              <span className="text-[34px] font-bold text-gray-900 gilroy-sb">
                399
              </span>
              <span className="text-gray-700 ml-2 gilroy-sb text-lg">
                per week
              </span>
            </div>
            <p className="text-black mt-1 gilroy-sb">
              Perfect for basic design needs
            </p>
          </div>

          <button className="w-full gilroy-sb border  py-3 px-6 rounded-full font-medium hover:bg-[#FF8419] hover:border-[#FF8419] hover:text-white transition-colors mb-8">
            Choose Subscription
          </button>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4 gilroy-sb">
              Features
            </h4>
            <ul className="space-y-3 gilroy-m">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-800">100 job credits per month</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-800">Turn around time 2 hours</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-800">Dedicated designer</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-800">24/6 support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Monthly Plan - Popular */}
        <div className="bg-white border-2 border-orange-500 rounded-2xl p-8 shadow-sm relative">
          {/* Popular Badge */}
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
            <span className="flex justify-center items-center gap-1 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium">
              <Sparkles size={16} /> Popular Plan
            </span>
          </div>

          <h3 className="gilroy-b text-xl font-semibold text-gray-900 mb-6">
            Monthly Plan
          </h3>

          <div className="mb-6">
            <div className="flex items-baseline">
              <span className="text-xl gilroy-sb text-gray-700 line-through mr-1">
                $1199
              </span>
              <span className="text-4xl mr-1 gilroy-sb">$</span>
              <span className="text-[34px]  font-bold text-gray-900 gilroy-sb">
                999
              </span>
              <span className="text-gray-700 ml-2 gilroy-sb text-lg">
                per month
              </span>
            </div>
            <p className="text-black mt-1 gilroy-sb">
              Perfect for manufacturers
            </p>
          </div>

          <button className="gilroy-sb w-full bg-orange-500 text-white py-3 px-6 rounded-full font-medium hover:bg-orange-600 transition-colors mb-8">
            Choose Subscription
          </button>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4 gilroy-sb">
              Features
            </h4>
            <ul className="space-y-3 gilroy-m">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-800">500 job credits per month</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-800">Turn around time 2 hours</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-800">Dedicated designer</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-800">24/6 support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
