import {
  faLocationDot,
  faBolt,
  faRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { servicesLinks } from "../lib/Constant";
import { useEffect, useMemo, useState } from "react";
import { listingsData, defaultFilters } from "../lib/Constant";
import Pagination from "../components/Pagination";
import { Link, useNavigate } from "react-router";

const Services = () => {
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [currentPage, setCurrentPage] = useState(1);
  const [listings, setListings] = useState([]);
  const [filters, setFilters] = useState(defaultFilters);
  const [sortBy, setSortBy] = useState("Newest");

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setFilters(defaultFilters);
    setCurrentPage(1);
  };
  const listingsPerPage = 6;

  const indexOfLast = currentPage * listingsPerPage;
  const indexOfFirst = indexOfLast - listingsPerPage;
  const filteredListings = useMemo(() => {
    const min = parseInt(filters.minPrice.replace(/[^\d]/g, "")) || 0;
    const max = parseInt(filters.maxPrice.replace(/[^\d]/g, "")) || Infinity;

    let result = listings.filter((listing) => {
      const price = parseInt(listing.price.replace(/[^\d]/g, ""));
      return (
        (filters.location === "All Locations" ||
          listing.location === filters.location) &&
        price >= min &&
        price <= max
      );
    });

    if (sortBy === "Newest") {
      result = result.reverse(); // Assuming latest are at the end
    }

    return result;
  }, [listings, filters, sortBy]);
  const totalPages = Math.ceil(filteredListings.length / listingsPerPage);

  const currentListings = filteredListings.slice(indexOfFirst, indexOfLast);
  useEffect(() => {
    setListings(listingsData);
  }, []);

  const navigate = useNavigate();

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
            <option>Price High</option>
            <option>Price Low</option>
          </select>
          <button
            className={`text-sm underline ${
              viewMode === "grid" ? "text-gray-700" : "text-gray-500"
            }`}
            onClick={() => setViewMode("grid")}
          >
            Grid
          </button>
          <button
            className={`text-sm underline ${
              viewMode === "list" ? "text-gray-700" : "text-gray-500"
            }`}
            onClick={() => setViewMode("list")}
          >
            List
          </button>
        </div>
      </div>

      <div
        className={`${
          viewMode === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            : "grid grid-cols-1 md:grid-cols-2 gap-6"
        }`}
      >
        {/* Card Section */}
        {servicesLinks.map((service) => (
          <div
            className={`bg-white cursor-pointer rounded-xl shadow overflow-hidden ${
              viewMode === "list" ? "flex" : ""
            }`}
          >
            <Link
              to={{
                pathname: `/services/${service.id}`,
                state: { serviceId: service.id, serviceData: service }
              }}
            >
              {/* Image Section */}
              <div
                className={`relative ${
                  viewMode === "list" ? "w-1/2 max-h-48" : ""
                }`}
              >
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`img-animattion object-cover ${
                      viewMode === "list" ? "w-full h-full" : "w-full h-48"
                    }`}
                  />
                </div>
                {service.featured && (
                  <span className="absolute top-2 left-2 bg-[#26c4a0] text-white text-[10px] font-semibold px-2 py-1 rounded">
                    FEATURED
                  </span>
                )}
                <span className="absolute bottom-2 left-2 bg-white text-black text-xs font-bold px-2 py-1 rounded shadow">
                  <FontAwesomeIcon icon={faRupeeSign} className="mr-1" />
                  {service.price} /item
                </span>
              </div>

              {/* Text Section */}
              <div
                className={`p-4 border-t ${
                  viewMode === "list"
                    ? "w-1/2 border-t-0 border-l flex flex-col justify-between"
                    : ""
                }`}
              >
                <h3 className="text-md font-semibold text-gray-900 mb-1">
                  {service.title}
                </h3>
                <div className="text-sm text-gray-600 flex justify-between items-center mb-2">
                  <div className=" hover:text-[#26c4a0] transition-colors duration-200 cursor-pointer">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="mr-1 text-gray-500  hover:text-[#26c4a0] transition-colors duration-200 "
                    />
                    {service.provider}
                  </div>
                  <div className=" hover:text-[#26c4a0] transition-colors duration-200 cursor-pointer">
                    Food Photography
                  </div>
                </div>
                <div className="border-t pt-3 flex items-center justify-between text-sm text-gray-700">
                  <span>On-Site Service</span>
                  <button className="text-[#181a20] font-semibold hover:text-[#26c4a0]     transition-colors duration-200 cursor-pointer">
                    Book Now
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Services;
