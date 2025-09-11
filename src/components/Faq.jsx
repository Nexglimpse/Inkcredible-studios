import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "We offer a comprehensive range of services including web development, mobile app development, UI/UX design, and digital marketing solutions. Our team specializes in creating custom solutions tailored to your business needs.",
  },
  {
    id: 2,
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 2-6 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    id: 3,
    question: "What is your pricing structure?",
    answer:
      "Our pricing is project-based and depends on the specific requirements, complexity, and timeline. We offer competitive rates and provide detailed quotes after understanding your needs. Contact us for a free consultation and quote.",
  },
  {
    id: 4,
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we provide ongoing support and maintenance services. This includes regular updates, security patches, performance optimization, and technical support. We offer different support packages to suit various needs and budgets.",
  },
];

export default function Faq() {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="w-full px-4.5 md:px-10 xl:px-15 mt-15 md:mt-20 lg:mt-30 ">
      <div>
        <h1 className="text-center text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] gilroy-sb leading-snug text-orange-500">
          FAQs
        </h1>
        <h2 className="text-center text-[26px] md:text-[34px] lg:text-[38px] xl:text-[40px] mt-3 gilroy-b leading-snug ">
          Frequently Asked Questions
        </h2>
        <p className="text-black text-md max-w-3xl mx-auto md:text-[18px] lg:text-lg xl:text-xl gilroy-m mt-2 text-center ">
          Got questions? We've answered the most common ones to help you get to
          know us even better.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4 mt-10 lg:mx-24">
        {faqData.map((item) => {
          const isOpen = openItems.has(item.id);

          return (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 sm:px-8 sm:py-6 text-left flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-lg"
                aria-expanded={isOpen}
              >
                <span className="gilroy-sb text-sm sm:text-base md:text-[17px] lg:text-[21px] pr-4 group-hover:text-orange-600 transition-colors duration-200">
                  {item.question}
                </span>

                {/* Animated Icon */}
                <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                  <div
                    className={`transform transition-transform duration-300 ease-in-out ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                    ) : (
                      <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-orange-500 transition-colors duration-200" />
                    )}
                  </div>
                </div>
              </button>

              {/* Answer Content with Animation */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-4 sm:px-8 sm:pb-6">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="gilroy-m text-lg leading-relaxed mt-3">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
