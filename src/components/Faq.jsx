import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "What types of artwork services are covered under each plan?",
    answer: [
      "Vector Redraw Plan: Clean vector conversions of logos and artwork.",
      "Redraw & Template Placement Plan: Vector redraws plus product template mockups.",
      "Production Ready Plan: Full service — redraws, template placements, and final production-ready files for medals, awards, pins, apparel, and more.",
    ],
  },
  {
    id: 2,
    question: "What qualifies as a “job”?",
    answer:
      "A job is one artwork request, such as a redraw, a logo placed on a product template, or preparing production-ready artwork. Jobs include revisions: 2 free in Weekly, unlimited in Monthly",
  },
  {
    id: 3,
    question: "How are complex jobs handled?",
    answer:
      "In the Weekly Plan, complex jobs (heavy edits, intricate designs, advanced detailing) are quoted separately. In the Monthly Plan, up to 5 complex jobs are included at no extra cost.",
  },
  {
    id: 4,
    question: "Do unused jobs roll over to the next cycle?",
    answer:
      "No, unused jobs do not roll over. Each cycle (weekly or monthly) is structured to give you predictable costs and balanced workflow.",
  },
  {
    id: 5,
    question: "How do I keep track of all my files and requests?",
    answer:
      "Every subscriber gets access to a dedicated Artwork Portal. You can upload files, track job status, download completed artwork, and view your entire history — ensuring no file is ever lost.",
  },
  {
    id: 6,
    question: "How are payments managed?",
    answer: [
      "Billing is simple and predictable:",
      "One invoice per week for Weekly Plan users.",
      "One invoice per month for Monthly Plan users.",
      "Payments are automatic and recurring, removing the burden of chasing small transactions and making accounting easier.",
    ],
  },
  {
    id: 7,
    question: "Can I switch or cancel my plan anytime?",
    answer:
      "Yes. Plans are flexible. You can upgrade or cancel at the end of your billing cycle. No hidden charges, no lock-ins.",
  },
  {
    id: 8,
    question: "How much can I really save with a subscription?",
    answer:
      "On average, subscribers save up to $4,000 per month compared to hiring in-house designers or paying per job. The Monthly Plan delivers maximum savings with more jobs, unlimited revisions, and complex job coverage.",
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
    <section
      className="w-full px-4.5 md:px-10 xl:px-15 mt-15 md:mt-20 lg:mt-30 "
      id="faq"
    >
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
      <div className="container mx-auto">
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
                  <span className="gilroy-sb text-[16px] sm:text-base md:text-[17px] lg:text-[21px] pr-4 group-hover:text-orange-600 transition-colors duration-200">
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
                      {/* <p className="gilroy-m text-[14px] md:text-lg leading-relaxed mt-3">
                        {item.answer}
                      </p> */}
                      <p className="gilroy-m text-[14px] md:text-lg leading-relaxed mt-3">
                        {Array.isArray(item.answer)
                          ? item.answer.map((line, i) => (
                              <p key={i} className="mb-2">
                                {line}
                                <br />
                              </p>
                            ))
                          : item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
