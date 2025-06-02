import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import AutoScroll from "../components/AutoScroll";
import NearbyListings from "../components/NearbyListings";
import PropertyCards from "../components/PropertyCards";
import PhotographySec from "../components/PhotographySec";
import WhyChooseUs from "../components/WhyChooseUs";
import Form from "../components/Form";
import BlogPosts from "../components/BlogPosts";
import DownloadSec from "../components/DownloadSec";
import HeroImg from "../assets/images/hero-img.webp";
import SubImg from "../assets/images/sub-hero-img.webp";
import { blogPost, categories, cities, tabs } from "../lib/Constant";
import PhotoSec from "../assets/images/photosec.webp";
import PriceFilter from "../components/PriceFilter";
import { Link } from "react-router";

const Home = () => {
  // States
  const [activeTab, setActiveTab] = useState("real-estate");
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [searchQuery, setSearchQuery] = useState(""); //  FIXED
  const [showAdvancedModal, setShowAdvancedModal] = useState(false);

  const [content] = useState({
    titleParts: [
      { text: "Hire From Best ", highlight: false },
      { text: "Photographer", highlight: true },
      { text: " for\nYour Food Photoshoot", highlight: false },
    ],
    description:
      "Capture the essence of your culinary creations with our professional food photography services. Let our expert photographers bring your dishes to life through stunning visuals tailored to elevate your brand.",
    buttonText: "Explore Photography Services",
    imageSrc: PhotoSec,
    imageAlt: "Photographer image",
    imageId: 1,
  });

  // Tab Click Handler
  const handleTabClick = (id) => {
    setActiveTab(id);
    setSelectedCity(cities[0]);
    setSelectedCategory(categories[0]);
    setSearchQuery(""); // Clear previous input if switching tab
  };

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === "services") {
      alert(`Searching for service: ${searchQuery}`);
    } else {
      alert(
        `Searching in Real Estate for city: ${selectedCity}, category: ${selectedCategory}`
      );
    }
  };

  // Advanced Modal Logiic

  return (
    <>
      {/* -------- HERO SECTION -------- */}
      <section className="relative overflow-hidden bg-[#d9f4f0]">
        <div className="max-w-7xl mx-auto px-6 py-6 md:py-16 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8">
          {/* Left Content */}
          <div className="w-full xl:w-1/2">
            <h1 className="animate-up-5 text-3xl md:text-4xl font-semibold text-[#0f1f25] leading-tight mb-8">
              One Stop Solution For All <br /> Your FnB Business Need
            </h1>

            {/* Tabs + Forms */}
            <div className="bg-[#d9f4f0] rounded-xl shadow-md w-full animate-up-5  ">
              {/* Tabs */}
              <div className="flex border-b border-gray-200 rounded-t-xl max-w-60 bg-white">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleTabClick(tab.id)}
                    className={`flex-1 py-3 px-3 font-semibold rounded-t-xl cursor-pointer ${
                      activeTab === tab.id
                        ? "text-[#0f1f25] border-b-2 border-black"
                        : "text-gray-400 border-b-2 border-transparent"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Conditional Form */}
              {activeTab === "services" ? (
                <form
                  onSubmit={handleSubmit}
                  className="flex md:flex-row items-center gap-4 p-6 bg-white rounded-b-xl"
                >
                  <input
                    type="text"
                    placeholder="Search for a service"
                    className="flex-1 w-full md:w-auto rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="bg-[#22b99a] rounded-xl w-12 h-12 flex items-center justify-center text-white hover:bg-[#1e9a85] transition"
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </form>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-wrap lg:flex-nowrap items-center gap-4 p-6 rounded-b-xl bg-white w-full"
                >
                  <select
                    className="flex-1 min-w-[140px] md:min-w-[180px] bg-[#f7f7f7] rounded-xl py-3 px-4 text-gray-500 text-sm focus:outline-none"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                  >
                    {cities.map((city, idx) => (
                      <option key={idx} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>

                  <select
                    className="flex-1 min-w-[140px] md:min-w-[180px] bg-[#f7f7f7] rounded-xl py-3 px-4 text-gray-500 text-sm focus:outline-none"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map((cat, idx) => (
                      <option key={idx} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>

                  <div className="flex items-center space-x-4 m-auto">
                    <button
                      type="button"
                      onClick={() => setShowAdvancedModal(true)}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <FontAwesomeIcon
                        icon={faSlidersH}
                        className="text-sm text-[#0f1f25]"
                      />
                      <span className="font-semibold text-sm text-[#0f1f25]">
                        Advanced
                      </span>
                    </button>
                    <Link to={"/listings"}>
                      <button
                        type="submit"
                        name="search-btn"
                        className="bg-[#22b99a] rounded-xl p-3 w-12 h-12 flex items-center justify-center text-white hover:bg-[#1e9a85] transition cursor-pointer"
                      >
                        <FontAwesomeIcon icon={faSearch} />
                      </button>
                    </Link>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Side Image */}
          <div className="hidden xl:block relative mt-12 -left-12 h-[36rem] w-[476px]">
            <img
              src={HeroImg}
              alt="Photographer"
              className="h-full w-full object-cover rounded-md"
              loading="lazy"
            />
            <div className="bounce-y absolute left-1/2 -translate-x-1/2 bg-white rounded-xl p-2 shadow-lg text-center transition-transform duration-300 ease-out bottom-5">
              <img
                src={SubImg}
                alt="Broki Logo"
                className="rounded-full w-[17.25rem] h-36 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <AutoScroll />
      <NearbyListings />
      <PropertyCards />
      <PhotographySec {...content} />
      <WhyChooseUs />
      <Form />

      {/* Blog Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-center text-3xl font-extrabold mb-12">
          From Our Blog
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPost.map((post) => (
            <BlogPosts key={post.id} post={post} />
          ))}
        </div>
      </section>

      <DownloadSec />
      {/* Advanced Modal */}
      {showAdvancedModal && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[1050] p-4"
          onClick={() => setShowAdvancedModal(false)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-2xl p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-3xl cursor-pointer"
              onClick={() => setShowAdvancedModal(false)}
            >
              ×
            </button>

            {/* Header */}
            <h2 className="text-xl font-semibold mb-6">More Filter</h2>

            {/* Price Range */}
            <PriceFilter />

            {/* Type & Location */}
            <div className="flex gap-4 mb-6">
              <div className="w-1/2">
                <label className="block font-semibold text-gray-700 mb-2">
                  Type
                </label>
                <select className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm">
                  <option>Select...</option>
                  <option>Commercial</option>
                  <option>Residential</option>
                </select>
              </div>
              <div className="w-1/2">
                <label className="block font-semibold text-gray-700 mb-2">
                  Location
                </label>
                <select className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm">
                  <option>Select...</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <div className="flex justify-end">
              <button className="bg-[#22b99a] hover:bg-[#1e9a85] text-white font-semibold px-6 py-2 rounded-lg cursor-pointer">
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
