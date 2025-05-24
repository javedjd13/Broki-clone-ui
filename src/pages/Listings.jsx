import React, { useEffect, useState, useMemo } from "react";
import { listingsData } from "../lib/Constant";

const defaultFilters = {
  status: "All",
  type: "All Types",
  minPrice: "",
  maxPrice: "",
  location: "All Locations",
};

export default function ListingPage() {
  const [listings, setListings] = useState([]);
  const [filters, setFilters] = useState(defaultFilters);

  useEffect(() => {
    setListings(listingsData);
  }, []);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => setFilters(defaultFilters);

  const filteredListings = useMemo(() => {
    const min = parseInt(filters.minPrice.replace(/[^\d]/g, "")) || 0;
    const max = parseInt(filters.maxPrice.replace(/[^\d]/g, "")) || Infinity;
    return listings.filter((listing) => {
      const priceValue = parseInt(listing.price.replace(/[^\d]/g, ""));
      return (
        (filters.location === "All Locations" ||
          listing.location === filters.location) &&
        priceValue >= min &&
        priceValue <= max
      );
    });
  }, [listings, filters]);

  // pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const listingsPerPage = 6;
  const indexOfLast = currentPage * listingsPerPage;
  const indexOfFirst = indexOfLast - listingsPerPage;
  const currentListings = filteredListings.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredListings.length / listingsPerPage);

  return (
    <div className="p-6 bg-white min-h-screen font-sans">
      <h1 className="text-3xl font-bold mb-1 text-gray-900">
        Find the best listing for your brand
      </h1>
      <p className="text-sm text-gray-500 mb-6">Home / Listings</p>

      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar Filters */}
        <aside className="col-span-12 md:col-span-3 bg-gray-50 p-4 rounded-xl shadow space-y-6">
          {[
            {
              label: "Listing Status",
              key: "status",
              options: ["All", "For Sale"],
            },
            {
              label: "Property Type",
              key: "type",
              options: ["All Types", "Restaurant", "Cloud Kitchen"],
            },
            {
              label: "Location",
              key: "location",
              options: [
                "All Locations",
                "Ghaziabad",
                "Mumbai",
                "Delhi",
                "Pune",
              ],
            },
          ].map(({ label, key, options }) => (
            <div key={key}>
              <label className="block font-semibold mb-2 text-gray-700">
                {label}
              </label>
              <select
                className="w-full border rounded-lg px-4 py-2 bg-white"
                value={filters[key]}
                onChange={(e) => handleFilterChange(key, e.target.value)}
              >
                {options.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
          ))}

          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Price Range
            </label>
            <div className="flex items-center space-x-2">
              <input
                placeholder="₹0"
                value={filters.minPrice}
                onChange={(e) => handleFilterChange("minPrice", e.target.value)}
                className="w-1/2 border rounded-lg px-3 py-2"
              />
              <span className="text-gray-500">–</span>
              <input
                placeholder="1 Cr+"
                value={filters.maxPrice}
                onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
                className="w-1/2 border rounded-lg px-3 py-2"
              />
            </div>
          </div>

          <button
            className="w-full bg-[#26c4a0] hover:bg-[#1a9f85] transition-colors duration-300
            text-sm cursor-pointer
           text-white px-4 py-2 rounded-lg font-semibold"
          >
            Search
          </button>
          <button
            onClick={resetFilters}
            className="text-sm text-gray-500 underline"
          >
            Reset all filters
          </button>
        </aside>

        {/* Listing Results */}
        <section className="col-span-12 md:col-span-9">
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-gray-500">
              Showing 1–{filteredListings.length} of {listings.length} results
            </p>
            <div className="flex items-center space-x-2">
              <label className="text-sm text-gray-600">Sort by</label>
              <select className="border rounded px-2 py-1 text-sm">
                <option>Newest</option>
              </select>
              <button className="text-sm underline text-gray-700">Grid</button>
              <button className="text-sm text-gray-500">List</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentListings.map((item, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  {item.featured && (
                    <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-medium px-2 py-1 rounded">
                      FEATURED
                    </span>
                  )}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute bottom-2 left-2 bg-white text-black text-sm font-semibold px-2 py-1 rounded">
                    {item.price}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-1">{item.location}</p>
                  <p className="text-sm text-gray-500">📏 {item.size}</p>
                  <p className="text-sm text-gray-600 mt-2 font-medium">
                    For Sale
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-10 flex flex-col items-center justify-center">
            <div className="flex space-x-2">
              <button
                className="w-8 h-8 flex items-center justify-center bg-white border rounded-full shadow"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                ❮
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-8 h-8 flex items-center justify-center border rounded-full text-sm font-medium ${
                    currentPage === i + 1
                      ? "bg-green-600 text-white"
                      : "bg-white text-gray-800"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                className="w-8 h-8 flex items-center justify-center bg-white border rounded-full shadow"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                ❯
              </button>
            </div>

            <p className="text-sm text-gray-600 mt-2">
              Showing {indexOfFirst + 1}–
              {Math.min(indexOfLast, filteredListings.length)} of{" "}
              {filteredListings.length} properties
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
