import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCalendar,
  faUserTie,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { OVERVIEW_FIELDS, SERVICE_FAQS } from "../../lib/Constant";

const ICON_MAP = {
  faHouse,
  faCalendar,
  faUserTie,
};

const ServicesOverview = ({ serviceData }) => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-6">
      {/* Overview Section */}
      <section className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Overview</h2>
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {OVERVIEW_FIELDS.map(({ label, value, icon }, i) => {
            const displayValue =
              value ?? serviceData?.[label.toLowerCase()] ?? "—";
            return (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl w-full md:w-1/3 border border-gray-200"
              >
                <FontAwesomeIcon
                  icon={ICON_MAP[icon]}
                  className="text-xl text-[#26c4a0]"
                />
                <div>
                  <p className="font-semibold text-gray-800">{label}</p>
                  <p className="text-gray-600">{displayValue}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Provider Description Section */}
      <section className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold mb-2">Provider Description</h2>
        <p className="text-gray-700">
          Shubham is a skilled food photographer with 7 years of experience,
          specializing in capturing visually stunning, appetizing images for
          restaurants, brands, and publications. Expert in lighting, styling,
          and composition, with a proven ability to bring culinary creations to
          life through photography.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-2">
          {SERVICE_FAQS.map((faq, index) => {
            const isOpen = index === activeFaqIndex;
            return (
              <div
                key={index}
                className={`border rounded-xl p-4 ${
                  isOpen ? "bg-green-50 border-green-300" : "bg-white"
                }`}
              >
                <button
                  className="flex justify-between items-center w-full font-semibold text-left text-gray-800"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <FontAwesomeIcon
                    icon={isOpen ? faChevronUp : faChevronDown}
                    className="ml-2"
                  />
                </button>
                {isOpen && <p className="mt-2 text-gray-700">{faq.answer}</p>}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ServicesOverview;
