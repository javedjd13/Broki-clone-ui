import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { servicesData, servicesLinks } from "../../lib/Constant";

const ServiceHeader = ({ serviceData }) => {
  const { serviceId, name, price, category, itemsCovered } = servicesData || {};
  const pricePerItem = itemsCovered > 0 ? Math.floor(price / itemsCovered) : 0;

  return (
    <section className="px-2">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-2" aria-label="Breadcrumb">
        <ol className="inline-flex items-center flex-wrap space-x-1">
          <li>
            <Link to="/" className="hover:text-[#26c4a0] ">
              Home
            </Link>
          </li>
          <li>
            <span className="mx-1">/</span>
          </li>
          <li>
            <Link to="/services" className="hover:text-[#26c4a0] ">
              Services
            </Link>
          </li>
          <li>
            <span className="mx-1">/</span>
          </li>
          <li className="text-gray-700 font-semibold">{category}</li>
        </ol>
      </nav>

      {/* Header Info */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{`${category} by ${name}`}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm mt-2 text-gray-600">
            <span>{category}</span>
            <span className="text-[#26c4a0] font-medium">● Fixed Price</span>
            <span>🕒 Items Covered: {itemsCovered}</span>
            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faCircleInfo} /> Service-ID-{serviceId}
            </span>
          </div>
        </div>

        <div className="text-left md:text-right">
          <h2 className="text-2xl font-semibold text-gray-800">₹{price}</h2>
          <p className="text-sm text-gray-500">
            Price per item: ₹{pricePerItem}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeader;
