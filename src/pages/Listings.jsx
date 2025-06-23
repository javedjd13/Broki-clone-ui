import { useState, useEffect, useMemo } from "react";
import { listingsData, defaultFilters } from "../lib/Constant";
import FilterSidebar from "../components/FilterSidebar";
import ListingCard from "../components/ListingCard";
import Pagination from "../components/Pagination";
import { motion } from "framer-motion";

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
    } else if (sortBy === "Price Low") {
      result.sort(
        (a, b) =>
          parseInt(a.price.replace(/[^\d]/g, "")) -
          parseInt(b.price.replace(/[^\d]/g, ""))
      );
    } else if (sortBy === "Price High") {
      result.sort(
        (a, b) =>
          parseInt(b.price.replace(/[^\d]/g, "")) -
          parseInt(a.price.replace(/[^\d]/g, ""))
      );
    }

    return result;
  }, [listings, filters, sortBy]);

  const indexOfLast = currentPage * listingsPerPage;
  const indexOfFirst = indexOfLast - listingsPerPage;
  const currentListings = filteredListings.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredListings.length / listingsPerPage);
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="pt-2 sm:p-6 bg-white min-h-screen font-sans">
        <section>
          <div className="px-4 sm:px-6 max-w-[1200px] mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold mb-1 text-gray-900">
              Find the best listing for your brand
            </h1>
            <p className="text-sm text-gray-500 mb-6">Home / Listings</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 px-4 sm:px-6 max-w-[1200px] mx-auto">
            {/* Sidebar */}
            <aside className="w-full lg:w-[370px]">
              <FilterSidebar
                filters={filters}
                onChange={handleFilterChange}
                onReset={resetFilters}
              />
            </aside>

            {/* Listings */}
            <section className="flex-1 w-full">
              {/* Top bar */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                <p className="text-sm text-gray-500">
                  Showing {indexOfFirst + 1}–
                  {Math.min(indexOfLast, filteredListings.length)} of{" "}
                  {filteredListings.length} results
                </p>

                <div className="flex flex-wrap items-center gap-2">
                  <label className="text-sm text-gray-600">Sort by</label>
                  <select
                    className="border rounded px-2 py-1 text-sm"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option>Newest</option>
                    <option>Price High</option>
                    <option>Price Low</option>
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

              {/* Cards */}
              <motion.section
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={containerVariants}
              >
                <div
                  className={`grid gap-6 mt-6 ${
                    viewType === "grid"
                      ? "grid-cols-1 sm:grid-cols-2"
                      : "grid-cols-1"
                  }`}
                >
                  {currentListings.map((item) => (
                    <motion.div
                      key={item.id}
                      className="w-full"
                      variants={itemVariants}
                    >
                      <ListingCard
                        data={item}
                        type="listing"
                        viewType={viewType}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Pagination */}
              <div className="mt-6">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            </section>
          </div>
        </section>
      </div>
    </motion.section>
  );
};

export default Listing;
