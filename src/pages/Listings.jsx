import { useState, useEffect, useMemo } from "react";
import { listingsData, defaultFilters } from "../lib/Constant";
import FilterSidebar from "../components/FilterSidebar";
import ListingCard from "../components/ListingCard";
import Pagination from "../components/Pagination";

const Listing = () => {
  const [listings, setListings] = useState([]);
  const [filters, setFilters] = useState(defaultFilters);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("Newest");
  const [viewType, setViewType] = useState("grid");

  const listingsPerPage = 6;

  useEffect(() => {
    setListings(listingsData);
  }, []);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setFilters(defaultFilters);
    setCurrentPage(1);
  };

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
      result = result.reverse();
    }

    return result;
  }, [listings, filters, sortBy]);

  const indexOfLast = currentPage * listingsPerPage;
  const indexOfFirst = indexOfLast - listingsPerPage;
  const currentListings = filteredListings.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredListings.length / listingsPerPage);

  return (
    <div className="p-4 sm:p-6 bg-white min-h-screen font-sans">
      <section>
        <div className="ml-at-1440 lg:ml-24">
          <h1 className="text-3xl font-bold mb-1 text-gray-900">
            Find the best listing for your brand
          </h1>
          <p className="text-sm text-gray-500 mb-6">Home / Listings</p>
        </div>

        {/* Layout wrapper */}
        <div className="listing-layout-md-exact gap-10 max-w-[1300px] w-full mx-auto">
          {/* Sidebar */}
          <div className="w-full listing-form">
            <FilterSidebar
              filters={filters}
              onChange={handleFilterChange}
              onReset={resetFilters}
            />
          </div>

          {/* Listings */}
          <section className="w-full">
            {/* Top bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-5 ml-10 mb-4 gap-2 sm:gap-0">
              <p className="text-sm text-gray-500">
                Showing {indexOfFirst + 1}–
                {Math.min(indexOfLast, filteredListings.length)} of{" "}
                {filteredListings.length} results
              </p>

              <div className="flex items-center space-x-3">
                <label className="text-sm text-gray-600">Sort by</label>
                <select
                  className="border rounded px-2 py-1 text-sm"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option>Newest</option>
                </select>

                <button
                  className={`text-sm px-2 py-1 rounded ${
                    viewType === "grid"
                      ? "underline text-gray-900"
                      : "text-gray-500"
                  }`}
                  onClick={() => setViewType("grid")}
                >
                  Grid
                </button>
                <button
                  className={`text-sm px-2 py-1 rounded ${
                    viewType === "list"
                      ? "underline text-gray-900"
                      : "text-gray-500"
                  }`}
                  onClick={() => setViewType("list")}
                >
                  List
                </button>
              </div>
            </div>

            {/* Listing cards with 2-column layout in both views */}
            <div
              className={`w-full grid gap-12 mt-6 ${
                viewType === "grid" || viewType === "list"
                  ? "grid-cols-1 sm:grid-cols-2"
                  : ""
              }`}
            >
              {currentListings.map((item) => (
                <div key={item.id} className="w-full max-w-[500px] mx-auto">
                  <ListingCard data={item} type="listing" viewType={viewType} />
                </div>
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </section>
        </div>
      </section>
    </div>
  );
};

export default Listing;
