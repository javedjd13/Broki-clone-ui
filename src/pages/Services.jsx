import {
  faLocationDot,
  faBolt,
  faRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { servicesLinks } from "../lib/Constant";

const Services = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-8 bg-white">
      <h2 className="text-3xl font-bold mb-1 text-gray-900">
        Professional Food Photography for Your F&amp;B Business
      </h2>
      <p className="text-sm text-gray-500 mb-6">Home / Food Photography</p>

      <div className="flex justify-between items-center mb-4">
        <div></div>
        <div className="flex items-center space-x-2">
          <label className="text-sm text-gray-600">Sort by</label>
          <select className="border rounded px-2 py-1 text-sm">
            <option>Newest</option>
          </select>
          <button className="text-sm underline text-gray-700">Grid</button>
          <button className="text-sm text-gray-500">List</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesLinks.map((service, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow overflow-hidden">
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              {service.featured && (
                <span className="absolute top-2 left-2 bg-emerald-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  <FontAwesomeIcon icon={faBolt} className="mr-1" /> FEATURED
                </span>
              )}
              <span className="absolute bottom-2 left-2 bg-white text-black text-xs font-bold px-2 py-1 rounded shadow">
                <FontAwesomeIcon icon={faRupeeSign} className="mr-1" />
                {service.price} /item
              </span>
            </div>
            <div className="p-4 border-t">
              <h3 className="text-md font-semibold text-gray-900 mb-1">
                {service.title}
              </h3>
              <div className="text-sm text-gray-600 flex items-center mb-2">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="mr-1 text-gray-500"
                />
                {service.provider} &nbsp; • &nbsp; Food Photography
              </div>
              <div className="border-t pt-3 flex items-center justify-between text-sm text-gray-700">
                <span>On-Site Service</span>
                <button className="text-[#181a20] font-semibold hover:underline">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center mt-8">
        {/* Pagination Buttons */}
        <div className="flex space-x-2 items-center">
          <button className="w-8 h-8 rounded-full bg-white border text-gray-700 flex items-center justify-center shadow">
            &lt;
          </button>
          <button className="w-8 h-8 rounded-full bg-emerald-400 text-white font-semibold flex items-center justify-center shadow">
            1
          </button>
          <button className="w-8 h-8 rounded-full bg-white border text-gray-700 flex items-center justify-center shadow">
            &gt;
          </button>
        </div>

        {/* Info text below buttons */}
        <p className="text-sm text-gray-600 mt-2">1–10 of 120 available</p>
      </div>
    </div>
  );
};

export default Services;
