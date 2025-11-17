import { useState } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import TermsAndConditionsModal from "./TermsAndConditionsModal";

const pricingData = {
  "Vector Service": {
    description: "Ideal for Distributors Needing Clean Vector Files",
    weekly: {
      originalPrice: "$499",
      price: "$375",
      period: "per week",
      description: "Best for the teams with small weekly volumes",
      credits: "100 jobs per month",
      turnaround: "Turn around time 2 hours",
      link: "https://inkcredible.agencyhandy.com/catalog/vector-service-1762431862856237/checkout",
      features: [
        "100 Jobs per Week",
        "Personal Artwork Portal Access",
        "Secure Storage",
        "2 Free Revisions per Job",
        "Complex Jobs - Quotation Based",
      ],
    },
    monthly: {
      originalPrice: "$1899",
      price: "$1699",
      period: "per month",
      description: "Best for the high-volume users seeking best value",
      credits: "500 Jobs per month",
      turnaround: "Turn around time 2 hours",
      link: "https://inkcredible.agencyhandy.com/catalog/vector-service-monthly-plan-1762433074192976/checkout",
      features: [
        "500 Jobs, 100 More than Weekly",
        "Personal Artwork Portal Access",
        "Secure Storage",
        "Unlimited Revisions per Job",
        "Includes Upto 5 Complex Jobs",
        "Save $175 Compared to 4 Weekly Plans",
      ],
    },
    budget: {
      originalPrice: "$899",
      price: "$699",
      period: "per month",
      description: "A simple, flexible plan for light artwork needs.",
      credits: "200 job per month",
      turnaround: "Turn around time 2 hours",
      link: "https://inkcredible.agencyhandy.com/catalog/vector-service-monthly-budget-plan-1762433255632403/checkout",
      features: [
        "200 Jobs per Month",
        "Personal Artwork Portal Access",
        "Secure Storage",
        "2 Free Revisions per Job",
        "Includes Upto 3 Complex Jobs",
        "Save $50 Compared to 4 Weekly Plans",
      ],
    },
  },
  "Template Placement": {
    description:
      "Best for Teams That Need Artwork Placed on Templates for Production",
    weekly: {
      originalPrice: "$599",
      price: "$499",
      period: "per week",
      description: "Best for the teams with small weekly volumes",
      credits: "125 job credits per month",
      turnaround: "Turn around time 1 hour",
      link: "https://inkcredible.agencyhandy.com/catalog/redraw-and-template-placement-weekly-plan-1762870313143687/checkout",
      features: [
        "125 Jobs per Week",
        "Personal Artwork Portal Access",
        "Secure Storage",
        "2 Free Revisions per Job",
        "Complex Jobs - Quotation Based",
      ],
    },
    monthly: {
      originalPrice: "$2199",
      price: "$1999",
      period: "per month",
      description: "Best for the high-volume users seeking best value",
      credits: "600 template placements per month",
      turnaround: "Turn around time 1 hour",
      link: "https://inkcredible.agencyhandy.com/catalog/redraw-and-template-placement-monthly-plan-1762870556836608/checkout",
      features: [
        "600 Jobs, 100 More than Weekly",
        "Personal Artwork Portal Access",
        "Secure Storage",
        "Unlimited Revisions per Job",
        "Includes Upto 5 Complex Jobs",
        "Save $400 Compared to 4 Weekly Plans",
      ],
    },
    budget: {
      originalPrice: "$1299",
      price: "$999",
      period: "per month",
      description: "A simple, flexible plan for light artwork needs.",
      credits: "300 Jobs per month",
      turnaround: "Turn around time 2 hours",
      link: "https://inkcredible.agencyhandy.com/catalog/redraw-and-template-placement-monthly-budget-plan-1762870457704634/checkout",
      features: [
        "300 Jobs per Month",
        "Personal Artwork Portal Access",
        "Secure Storage",
        "2 Free Revisions per Job",
        "Includes Upto 3 Complex Jobs",
        "Save $200 Compared to 4 Weekly Plans",
      ],
    },
  },
  "Production Ready Package": {
    description:
      "Perfect for High-Volume Distributors Producing Custom Awards, Pins, and More",
    weekly: {
      originalPrice: "$699",
      price: "$599",
      period: "per week",
      description: "Best for the teams with small weekly volumes",
      credits: "50 job credits per month",
      turnaround: "Turn around time 4 hours",
      link: "https://inkcredible.agencyhandy.com/catalog/production-ready-weekly-plan-1762871943370944/checkout",
      features: [
        "50 Jobs per Week",
        "Personal Artwork Portal Access",
        "Secure Storage",
        "2 Free Revisions per Job",
        "Complex Jobs - Quotation Based",
      ],
    },
    monthly: {
      originalPrice: "$3299",
      price: "$2999",
      period: "per month",
      description: "Best for the high-volume users seeking best value",
      credits: "150 production packages per month",
      turnaround: "Turn around time 4 hours",
      link: "https://inkcredible.agencyhandy.com/catalog/production-ready-monthly-plan-1762872273872982/checkout",
      features: [
        "300 Jobs, 100 More than Weekly",
        "Personal artwork Portal Access",
        "Secure Storage",
        "Unlimited Revisions per Job",
        "Includes Upto 5 Complex Jobs",
        "Save $600 Compared to 4 Weekly Plans",
      ],
    },
    budget: {
      originalPrice: "$1899",
      price: "$1699",
      period: "per month",
      description: "A simple, flexible plan for light artwork needs.",
      credits: "150 Jobs per month",
      turnaround: "Turn around time 2 hours",
      link: "https://inkcredible.agencyhandy.com/catalog/production-ready-monthly-budget-plan-1762872175855672/checkout",
      features: [
        "150 Jobs per Month",
        "Personal Artwork Portal Access",
        "Secure Storage",
        "2 Free Revisions per Job",
        "Includes Upto 3 Complex Jobs",
      ],
    },
  },
};

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("Vector Service");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");

  const tabs = [
    "Vector Service",
    "Template Placement",
    "Production Ready Package",
  ];

  const currentData = pricingData[activeTab];

  const handleSubscriptionClick = (link) => {
    setSelectedLink(link);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedLink("");
  };

  const handleProceed = () => {
    setIsModalOpen(false);
    // The link navigation is handled in the modal component
  };

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
        <div className="flex justify-center mb-4 md:mb-5 lg:mb-7">
          <div className="md:text-md md:flex border border-gray-200 rounded-lg p-1 relative overflow-hidden">
            <button
              onClick={() => setActiveTab("Vector Service")}
              className={`w-full md:w-fit gilroy-m px-6 py-2 cursor-pointer ${
                activeTab == "Vector Service"
                  ? "bg-orange-500 text-white"
                  : "text-black"
              }  rounded-md gilroy-m`}
            >
              Vector Service
            </button>
            <button
              onClick={() => setActiveTab("Template Placement")}
              className={`w-full md:w-fit gilroy-m px-6 py-2 cursor-pointer ${
                activeTab == "Template Placement"
                  ? "bg-orange-500 text-white"
                  : "text-black"
              }  rounded-md gilroy-m`}
            >
              Redraw & Template Placement
            </button>
            <button
              onClick={() => setActiveTab("Production Ready Package")}
              className={`w-full md:w-fit gilroy-m px-6 py-2 cursor-pointer ${
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
        <div key={activeTab}>
          <p className="text-black text-md max-w-3xl mx-auto md:text-[18px] lg:text-lg  gilroy-m mt-2 text-center mb-7 md:mb-9 lg:mb-13 ">
            {currentData.description}
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="grid lg:grid-cols-3 gap-8  lg:mx-13 animate-in fade-in duration-500"
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

              <button
                onClick={() => handleSubscriptionClick(currentData.weekly.link)}
                className="w-full gilroy-sb border py-3 px-6 rounded-full font-medium hover:bg-[#FF8419] hover:border-[#FF8419] hover:text-white transition-all duration-300 mb-8"
              >
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

              <button
                onClick={() =>
                  handleSubscriptionClick(currentData.monthly.link)
                }
                className="gilroy-sb w-full border-[#FF8419] bg-[#FF8419]  hover:shadow-[0_0px_18px_#FF8419]/50 text-white py-3 px-6 rounded-full font-medium transition-all duration-300 mb-8"
              >
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

            {/* Budget Plan */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm transform transition-all duration-300 hover:shadow-md">
              <h3 className="gilroy-b text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">
                Budget Plan
              </h3>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-lg lg:text-xl gilroy-sb text-gray-700 line-through mr-1">
                    {currentData.budget.originalPrice}
                  </span>
                  <span className="text-3xl lg:text-[34px] mr-1 gilroy-sb">
                    $
                  </span>
                  <span className="text-3xl lg:text-[34px] font-bold text-gray-900 gilroy-sb">
                    {currentData.budget.price.replace("$", "")}
                  </span>
                  <span className="text-gray-700 ml-2 gilroy-sb text-md lg:text-lg">
                    {currentData.budget.period}
                  </span>
                </div>
                <p className="text-black mt-2 gilroy-sb">
                  {currentData.budget.description}
                </p>
              </div>

              <button
                onClick={() => handleSubscriptionClick(currentData.budget.link)}
                className="w-full gilroy-sb border py-3 px-6 rounded-full font-medium hover:bg-[#FF8419] hover:border-[#FF8419] hover:text-white transition-all duration-300 mb-8"
              >
                Choose Subscription
              </button>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4 gilroy-sb">
                  Features
                </h4>
                <ul className="space-y-3 gilroy-m">
                  {currentData.budget.features.map((feature, index) => (
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

        <p className="gilroy-m text-center text-gray-700 text-md md:text-lg lg:text-xl mt-10">
          Have questions about our subscription plans or pricing? Or prefer
          pay-per-job service?{" "}
        </p>
        <div className="flex justify-center items-center mt-3">
          <a
            href="#contact"
            className="flex justify-between gap-2 border-2 border-[#FF8419] text-md gilroy-sb text-black px-7 py-2.5 pb-3 rounded-full transition duration-300 hover:bg-[#FF8419] hover:text-white"
          >
            Contact Us{" "}
            <span>
              <ArrowRight />
            </span>
          </a>
        </div>
      </div>

      {/* Terms and Conditions Modal */}
      <TermsAndConditionsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onProceed={handleProceed}
        subscriptionLink={selectedLink}
      />
    </section>
  );
};

export default Pricing;
