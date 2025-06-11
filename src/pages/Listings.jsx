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
      result = result.reverse(); // Assuming latest are at the end
    }

    return result;
  }, [listings, filters, sortBy]);

  const indexOfLast = currentPage * listingsPerPage;
  const indexOfFirst = indexOfLast - listingsPerPage;
  const currentListings = filteredListings.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredListings.length / listingsPerPage);

  return (
    <div className="p-6 bg-white min-h-screen font-sans">
      <section>
        <div className="ml-at-1440 lg:ml-24">
          <h1 className="text-3xl font-bold mb-1 text-gray-900">
            Find the best listing for your brand
          </h1>
          <p className="text-sm text-gray-500 mb-6">Home / Listings</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-[1200px] mx-auto">
          {/* Sidebar */}
          <div className="md:col-span-3 ">
            <FilterSidebar
              filters={filters}
              onChange={handleFilterChange}
              onReset={resetFilters}
            />
          </div>

          {/* Listings */}
          <section className="md:col-span-9 w-full">
            {/* Top bar */}
            <div className="flex justify-between items-center mb-4">
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

            {/* Listing cards */}
            <div
              className={`${
                viewType === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6"
                  : "flex flex-col gap-4"
              }`}
            >
              {listingsData.map((item) => (
                <ListingCard
                  key={item.id}
                  data={item}
                  type="listing"
                  viewType={viewType}
                />
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
