import React from "react";

const officeData = [
  {
    city: "New Delhi",
    address: "Rattan Jyoti Building, G-1/18, 18, Rajendra Place, New Delhi",
    phone: "+91 836 8037 029",
    mapLink: "https://maps.google.com",
    icon: "		https://www.broki.in/images/Delhi.svg", 
  },
  {
    city: "Noida",
    address: "IIM Lucknow EIC, Block B, Industrial Area, Sector 62, Noida",
    phone: "+91 964 3531 845",
    mapLink: "https://maps.google.com",
    icon: "	https://www.broki.in/images/Noida.svg",
  },
];

const VisitOffice = () => {
  return (
    <div className="bg-white py-12 px-4 md:px-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
        Visit Our Office
      </h2>
      <p className="text-gray-500 text-sm mb-12">
        Interested in learning more about what we do? Swing by our spot!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {officeData.map((office, idx) => (
          <div key={idx} className="text-center">
            <img
              src={office.icon}
              alt={`${office.city} icon`}
              className="mx-auto mb-4 w-12 h-12"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {office.city}
            </h3>
            <p className="text-sm text-gray-600 mt-2">{office.address}</p>
            <p className="text-sm font-semibold mt-1 text-gray-800">
              {office.phone}
            </p>
            <a
              href={office.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-500 mt-1 inline-block hover:underline"
            >
              Open Google Map
            </a>
          </div>
        ))}
      </div>

      {/* Contact Box */}
      <div className="mt-16 bg-gray-100 rounded-xl p-6 md:p-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-semibold text-gray-900">
            Need help? Talk to our expert.
          </h3>
          <p className="text-sm text-gray-600">
            Talk to our experts or Browse through more properties.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 mt-4 md:mt-0">
          <button className="border border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-gray-200 transition">
            Contact Us ↗
          </button>
          <button className="bg-gray-800 text-white font-semibold px-4 py-2 rounded-md text-sm">
            📞 +91 964 353 1845
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisitOffice;
